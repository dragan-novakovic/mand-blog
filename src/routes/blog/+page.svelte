<style>
  .lesson-hero {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 2rem;
    margin-bottom: 1.25rem;
  }

  .lesson-hero p {
    max-width: 42rem;
    margin: 0;
    color: var(--text-color);
  }

  .lesson-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  }

  .lesson-card {
    display: flex;
    flex-direction: column;
    min-height: 13rem;
    padding: 1.25rem;
    color: var(--heading-color);
  }

  .lesson-card:hover {
    transform: translateY(-3px);
    text-decoration: none;
    box-shadow: 0 28px 70px rgba(86, 52, 29, 0.16);
  }

  .lesson-number {
    color: var(--accent-color);
    font-size: 0.78rem;
    font-weight: 900;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .lesson-title {
    margin: 1rem 0 0.5rem;
    font-size: 1.35rem;
    font-weight: 900;
  }

  .lesson-description {
    color: var(--text-color);
    margin: 0;
  }

  .lesson-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: auto;
    padding-top: 1.5rem;
    color: var(--muted-color);
    font-size: 0.9rem;
    font-weight: 700;
  }

  .hanzi-badge {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 18px;
    color: white;
    background: linear-gradient(135deg, var(--accent-color), var(--gold-color));
    font-size: 1.45rem;
  }
</style>

<svelte:head>
  <title>Lessons | Mandarin Path</title>
</svelte:head>

<section class="lesson-hero panel">
  <p class="eyebrow">Lesson library</p>
  <h1>Choose your next Mandarin step.</h1>
  <p>Each chapter introduces a focused vocabulary set with hanzi, pinyin, and English meaning.</p>
</section>

<div class="lesson-grid">
  <a class="lesson-card panel" data-sveltekit-preload-data="hover" href="/blog/intro">
    <span class="lesson-number">Chapter 01</span>
    <h2 class="lesson-title">Greetings and people</h2>
    <p class="lesson-description">Start with pronouns, hello, goodbye, and simple nationalities.</p>
    <span class="lesson-footer">
      <span>12 words</span>
      <span class="hanzi-badge hanzi">你</span>
    </span>
  </a>

  <a class="lesson-card panel" data-sveltekit-preload-data="hover" href="/blog/chapter2">
    <span class="lesson-number">Chapter 02</span>
    <h2 class="lesson-title">Speaking Chinese</h2>
    <p class="lesson-description">Learn study verbs, language names, and the plural marker 们.</p>
    <span class="lesson-footer">
      <span>9 words</span>
      <span class="hanzi-badge hanzi">语</span>
    </span>
  </a>

  <a class="lesson-card panel" data-sveltekit-preload-data="hover" href="/blog/chapter3">
    <span class="lesson-number">Chapter 03</span>
    <h2 class="lesson-title">Size, sun, and moon</h2>
    <p class="lesson-description">Practice radicals and simple compounds built from everyday ideas.</p>
    <span class="lesson-footer">
      <span>12 words</span>
      <span class="hanzi-badge hanzi">明</span>
    </span>
  </a>

  <a class="lesson-card panel" data-sveltekit-preload-data="hover" href="/blog/chapter4">
    <span class="lesson-number">Chapter 04</span>
    <h2 class="lesson-title">Animals and nature</h2>
    <p class="lesson-description">Review animals, elements, weather, and visual character links.</p>
    <span class="lesson-footer">
      <span>14 words</span>
      <span class="hanzi-badge hanzi">山</span>
    </span>
  </a>
</div>
