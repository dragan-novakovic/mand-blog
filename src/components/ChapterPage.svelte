<script lang="ts">
  type Word = {
    eng: string;
    ch: string;
    pinyin: string;
  };

  type Insight = {
    title: string;
    body: string;
    ch: string;
  };

  type Phrase = {
    zh: string;
    pinyin: string;
    translation: string;
  };

  let {
    chapter,
    title,
    description,
    leadCharacter,
    leadPinyin,
    lessonTheme,
    words,
    insights = [],
    phrases = []
  }: {
    chapter: string;
    title: string;
    description: string;
    leadCharacter: string;
    leadPinyin: string;
    lessonTheme: string;
    words: Word[];
    insights?: Insight[];
    phrases?: Phrase[];
  } = $props();

  function formatIndex(index: number) {
    return (index + 1).toString().padStart(2, "0");
  }
</script>

<style>
  .chapter-shell {
    display: grid;
    gap: 1.25rem;
  }

  .chapter-hero {
    position: relative;
    display: grid;
    gap: 1.5rem;
    overflow: hidden;
    padding: 2rem;
  }

  .chapter-hero::after {
    content: "";
    position: absolute;
    inset: auto -7rem -8rem auto;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    background: rgba(217, 67, 47, 0.1);
  }

  .hero-copy {
    position: relative;
    z-index: 1;
  }

  .hero-copy p:not(.eyebrow) {
    max-width: 45rem;
    color: var(--text-color);
    font-size: 1.08rem;
    margin: 1rem 0 0;
  }

  .meta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 1.4rem;
  }

  .meta-pill {
    border: 1px solid var(--line-color);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.62);
    color: var(--muted-color);
    font-size: 0.9rem;
    font-weight: 800;
    padding: 0.6rem 0.85rem;
  }

  .hero-preview {
    position: relative;
    z-index: 1;
    align-self: stretch;
  }

  .writing-card {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 17rem;
    overflow: hidden;
    border-radius: 28px;
    background:
      linear-gradient(rgba(255, 255, 255, 0.18) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.18) 1px, transparent 1px),
      linear-gradient(145deg, #cc352b, #8c251f);
    background-size:
      3rem 3rem,
      3rem 3rem,
      auto;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16);
  }

  .writing-card::before,
  .writing-card::after {
    content: "";
    position: absolute;
    background: rgba(255, 235, 212, 0.32);
  }

  .writing-card::before {
    width: 1px;
    height: 100%;
  }

  .writing-card::after {
    width: 100%;
    height: 1px;
  }

  .lead-character {
    position: relative;
    z-index: 1;
    color: #fff7e9;
    font-size: clamp(7rem, 20vw, 13rem);
    line-height: 1;
    text-shadow: 0 18px 42px rgba(55, 13, 9, 0.25);
  }

  .lead-pinyin {
    position: absolute;
    right: 1.25rem;
    bottom: 1rem;
    z-index: 1;
    color: #ffe3b3;
    font-size: 0.9rem;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .insight-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  .insight-card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: start;
    padding: 1.2rem;
  }

  .insight-mark {
    display: grid;
    place-items: center;
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 20px;
    color: var(--accent-color-strong);
    background: #fff0df;
    font-size: 1.7rem;
  }

  .insight-card h2 {
    margin: 0 0 0.35rem;
    font-size: 1.1rem;
    font-weight: 900;
  }

  .insight-card p {
    color: var(--text-color);
    margin: 0;
  }

  .word-library,
  .phrase-panel {
    padding: 1.35rem;
  }

  .section-heading {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    margin-bottom: 1rem;
  }

  .section-heading h2 {
    font-weight: 900;
  }

  .section-heading p {
    color: var(--muted-color);
    margin: 0;
  }

  .word-grid {
    display: grid;
    gap: 0.85rem;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  }

  .word-card {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--line-color);
    border-radius: 24px;
    background:
      linear-gradient(180deg, rgba(255, 245, 232, 0.78), rgba(255, 255, 255, 0.52)),
      rgba(255, 252, 246, 0.88);
    padding: 1rem;
  }

  .word-card::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), var(--gold-color));
    opacity: 0.8;
  }

  .word-top {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    color: var(--muted-color);
    font-size: 0.78rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .pinyin {
    color: var(--jade-color);
    text-align: right;
  }

  .word-hanzi {
    color: var(--heading-color);
    font-size: clamp(3.3rem, 9vw, 5rem);
    line-height: 1;
    margin: 0.9rem 0 0.45rem;
  }

  .word-meaning {
    color: var(--heading-color);
    font-weight: 850;
    margin: 0;
  }

  .phrase-list {
    display: grid;
    gap: 0.8rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .phrase-card {
    display: grid;
    gap: 0.45rem;
    border: 1px solid var(--line-color);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.56);
    padding: 1rem;
  }

  .phrase-zh {
    color: var(--heading-color);
    font-size: 1.6rem;
    line-height: 1.2;
    margin: 0;
  }

  .phrase-pinyin {
    color: var(--jade-color);
    font-weight: 850;
    margin: 0;
  }

  .phrase-translation {
    color: var(--muted-color);
    margin: 0;
  }

  .chapter-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .action-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.8rem;
    border-radius: 999px;
    font-weight: 900;
    padding: 0 1rem;
    text-decoration: none;
  }

  .action-link.primary {
    color: white;
    background: linear-gradient(135deg, var(--accent-color), var(--accent-color-strong));
  }

  .action-link.secondary {
    color: var(--ink-color);
    background: rgba(255, 255, 255, 0.64);
    border: 1px solid var(--line-color);
  }

  .action-link:hover {
    transform: translateY(-2px);
    text-decoration: none;
  }

  @media (min-width: 820px) {
    .chapter-hero {
      grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
      padding: 2.5rem;
    }

    .word-library,
    .phrase-panel {
      padding: 1.7rem;
    }
  }
</style>

<svelte:head>
  <title>{title} | Mandarin Path</title>
</svelte:head>

<div class="chapter-shell">
  <section class="chapter-hero panel">
    <div class="hero-copy">
      <p class="eyebrow">{chapter}</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <div class="meta-row">
        <span class="meta-pill">{words.length} words</span>
        <span class="meta-pill">{lessonTheme}</span>
        <span class="meta-pill">HSK 1</span>
      </div>
    </div>

    <div class="hero-preview" aria-label="Featured writing card">
      <div class="writing-card">
        <span class="lead-character hanzi">{leadCharacter}</span>
        <span class="lead-pinyin">{leadPinyin}</span>
      </div>
    </div>
  </section>

  {#if insights.length}
    <section class="insight-grid" aria-label="Chapter highlights">
      {#each insights as insight}
        <article class="insight-card panel">
          <span class="insight-mark hanzi">{insight.ch}</span>
          <div>
            <h2>{insight.title}</h2>
            <p>{insight.body}</p>
          </div>
        </article>
      {/each}
    </section>
  {/if}

  <section class="word-library panel">
    <div class="section-heading">
      <p class="eyebrow">Vocabulary deck</p>
      <h2>Read, say, and connect each word.</h2>
      <p>Use the number, hanzi, pinyin, and meaning as a quick study card.</p>
    </div>

    <div class="word-grid">
      {#each words as word, index}
        <article class="word-card">
          <div class="word-top">
            <span>{formatIndex(index)}</span>
            <span class="pinyin">{word.pinyin}</span>
          </div>
          <p class="word-hanzi hanzi">{word.ch}</p>
          <p class="word-meaning">{word.eng}</p>
        </article>
      {/each}
    </div>
  </section>

  {#if phrases.length}
    <section class="phrase-panel panel">
      <div class="section-heading">
        <p class="eyebrow">Example phrases</p>
        <h2>Practice the chapter words in context.</h2>
      </div>

      <ul class="phrase-list">
        {#each phrases as phrase}
          <li class="phrase-card">
            <p class="phrase-zh hanzi">{phrase.zh}</p>
            <p class="phrase-pinyin">{phrase.pinyin}</p>
            <p class="phrase-translation">{phrase.translation}</p>
          </li>
        {/each}
      </ul>
    </section>
  {/if}

  <div class="chapter-actions">
    <a class="action-link secondary" href="/blog">All lessons</a>
    <a class="action-link primary" href="/memory-game">Practice with cards</a>
  </div>
</div>
