<script>
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";

  const words = [
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

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const eng_only = words.map(({ eng }) => eng);
  const all_words = shuffleArray([...words, ...eng_only]);

  let active = [];
  let show = [];

  function handleSelect(e, index) {
    //fix timer
    if (active.length < 2) {
      active.push(index);
      show = show;
    }

    if (active.length > 2) {
      active.pop();
      active.push(index);
      show = show;
    }

    if (active.length === 2) {
      const a = all_words[active[0]].eng || all_words[active[0]];
      const b = all_words[active[1]].eng || all_words[active[1]];
      console.log({ a, b });

      if (a === b) {
        alert("WIN");
        show.push(active[0]);
        show.push(active[1]);
      }
    }

    setTimeout(() => {
      active = [];
    }, 3000);
    show = show;
  }

  // animations
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  .board-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 5px;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 180px;
    height: 120px;
    border: 2px solid black;
    border-radius: 5px;
  }

  .back {
    background: repeating-linear-gradient(
      45deg,
      #606dbc,
      #606dbc 10px,
      #465298 10px,
      #465298 20px
    );
  }

  .card-container:hover {
    cursor: pointer;
  }

  .pinyin {
    margin: 0;
    padding-top: 4px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.1px;
  }

  .hanzi {
    font-family: "Arial Unicode MS";
    font-size: 3.2em;
    padding-top: 8px;
    margin: 0;
  }

  .eng {
    font-weight: bold;
    text-align: center;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Mandarin Blog</title>
</svelte:head>

<main>
  <h1>HSK 1 --- Level 1</h1>
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
        <div on:click={e => handleSelect(e, i)} class="card-container back" />
      {/if}
    {/each}
    <!-- 
      {#each eng_only as eng, i}
        <div class="card-container">
         
        </div>
      {/each} -->
  </div>
</main>
