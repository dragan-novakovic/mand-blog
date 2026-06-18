<script lang="ts">
  type Word = {
    eng: string;
    ch: string;
    pinyin: string;
  };

  type Card = Word | string;

  const words: Word[] = [
    { eng: "Plural marker for people", ch: "们", pinyin: "men" },
    { eng: "To Speak", ch: "说", pinyin: "shuō" },
    { eng: "Chinese lang.", ch: "汉语", pinyin: "hànyǔ" },
    { eng: "English lang.", ch: "英语", pinyin: "yīngyǔ" },
    { eng: "Both; all", ch: "都", pinyin: "dōu" },
    { eng: "To learn; To Study", ch: "学", pinyin: "xué" },
    { eng: "Also; Too", ch: "也", pinyin: "yě" },
    { eng: "To Write", ch: "写", pinyin: "xiě" },
    { eng: "Chinese character", ch: "汉字", pinyin: "hànzì" }
  ];

  function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const eng_only = words.map(({ eng }) => eng);
  const all_words = shuffleArray([...words, ...eng_only]);

  let active: number[] = [];
  let show: number[] = [];

  function getEnglish(card: Card) {
    return typeof card === "string" ? card : card.eng;
  }

  function handleSelect(index: number) {
    if (active.length < 2) {
      active = [...active, index];
    }

    if (active.length > 2) {
      active = [index];
    }

    if (active.length === 2) {
      const a = getEnglish(all_words[active[0]]);
      const b = getEnglish(all_words[active[1]]);

      if (a === b) {
        alert("WIN");
        show = [...show, active[0], active[1]];
      }
    }

    setTimeout(() => {
      active = [];
    }, 3000);
  }
</script>

<style>
  .game-hero {
    display: grid;
    gap: 1rem;
    padding: 2rem;
    margin-bottom: 1.25rem;
  }

  .game-hero p {
    max-width: 42rem;
    margin: 0;
    color: var(--text-color);
  }

  .game-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    border: 1px solid var(--line-color);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.6);
    color: var(--muted-color);
    font-size: 0.9rem;
    font-weight: 800;
    padding: 0.55rem 0.8rem;
  }

  .board-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    gap: 0.9rem;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 9.5rem;
    border: 1px solid var(--line-color);
    border-radius: 24px;
    background: rgba(255, 252, 246, 0.92);
    box-shadow: 0 18px 45px rgba(86, 52, 29, 0.1);
    font: inherit;
    padding: 1rem;
    text-align: center;
  }

  .back {
    position: relative;
    overflow: hidden;
    background:
      linear-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.14) 1px, transparent 1px),
      linear-gradient(145deg, var(--accent-color), #8f241f);
    background-size:
      2rem 2rem,
      2rem 2rem,
      auto;
  }

  .back::after {
    content: "语";
    color: rgba(255, 255, 255, 0.82);
    font-family: "Noto Serif CJK SC", "Songti SC", serif;
    font-size: 3.4rem;
    line-height: 1;
  }

  .card-container:hover {
    cursor: pointer;
    transform: translateY(-3px);
    box-shadow: 0 24px 55px rgba(86, 52, 29, 0.16);
  }

  .pinyin {
    margin: 0;
    color: var(--jade-color);
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 0.08em;
  }

  .hanzi {
    color: var(--heading-color);
    font-size: 3.6rem;
    line-height: 1;
    padding-top: 0.35rem;
    margin: 0;
  }

  .eng {
    color: var(--heading-color);
    font-size: 1.02rem;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  @media (min-width: 480px) {
    .board-container {
      grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
    }
  }
</style>

<svelte:head>
  <title>Practice | Mandarin Path</title>
</svelte:head>

<section class="game-hero panel">
  <p class="eyebrow">Memory practice</p>
  <h1>Match meaning to hanzi.</h1>
  <p>Flip two cards at a time and pair each English prompt with its Chinese word.</p>
  <div class="game-meta">
    <span class="pill">HSK 1</span>
    <span class="pill">{words.length} word pairs</span>
    <span class="pill">Pinyin support</span>
  </div>
</section>

<div class="board-container">
  {#each all_words as word, i}
    {#if show.includes(i) || active.includes(i)}
      <div class="card-container">
        {#if typeof word === 'object'}
          <p class="pinyin">{word.pinyin}</p>
          <p class="hanzi">{word.ch}</p>
        {:else}
          <p class="eng">{word}</p>
        {/if}
      </div>
    {:else}
      <button type="button" onclick={() => handleSelect(i)} class="card-container back" aria-label="Reveal card"></button>
    {/if}
  {/each}
</div>
