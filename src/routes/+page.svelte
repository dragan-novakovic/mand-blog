<style>
  .hero {
    display: grid;
    gap: 2rem;
    align-items: center;
  }

  .hero-copy {
    padding: 2rem;
  }

  .hero-copy p {
    max-width: 40rem;
    color: var(--text-color);
    font-size: 1.1rem;
    margin: 1.25rem 0 0;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-top: 1.8rem;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
    padding: 0 1.25rem;
    border-radius: 999px;
    font-weight: 800;
    text-decoration: none;
  }

  .button.primary {
    color: white;
    background: linear-gradient(135deg, var(--accent-color), var(--accent-color-strong));
    box-shadow: 0 16px 32px rgba(217, 67, 47, 0.24);
  }

  .button.secondary {
    color: var(--ink-color);
    background: rgba(255, 255, 255, 0.65);
    border: 1px solid var(--line-color);
  }

  .button:hover {
    transform: translateY(-2px);
    text-decoration: none;
  }

  .hero-card {
    position: relative;
    overflow: hidden;
    padding: 1.4rem;
  }

  .hero-card::before {
    content: "";
    position: absolute;
    inset: 1rem;
    border: 1px dashed rgba(217, 67, 47, 0.24);
    border-radius: 26px;
    pointer-events: none;
  }

  .character-card {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 20rem;
    border-radius: 24px;
    color: white;
    background:
      linear-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.14) 1px, transparent 1px),
      linear-gradient(145deg, #d9432f, #9e2a22);
    background-size:
      3rem 3rem,
      3rem 3rem,
      auto;
  }

  .character {
    font-size: clamp(7rem, 18vw, 12rem);
    line-height: 1;
    text-shadow: 0 18px 40px rgba(89, 24, 18, 0.28);
  }

  .pronunciation {
    position: absolute;
    right: 1.3rem;
    bottom: 1.2rem;
    color: #ffe4b8;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .stats {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    margin-top: 1rem;
  }

  .stat {
    padding: 1.1rem;
  }

  .stat strong {
    display: block;
    color: var(--heading-color);
    font-size: 1.8rem;
    line-height: 1;
  }

  .stat span {
    display: block;
    color: var(--muted-color);
    margin-top: 0.35rem;
  }

  .section {
    margin-top: 2rem;
  }

  .path-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  .path-card {
    padding: 1.25rem;
  }

  .path-card h3 {
    margin: 0.65rem 0 0.35rem;
    font-size: 1.15rem;
    font-weight: 800;
  }

  .path-card p {
    color: var(--text-color);
    margin: 0;
  }

  .path-icon {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 18px;
    color: var(--accent-color-strong);
    background: #fff0df;
    font-size: 1.6rem;
  }

  @media (min-width: 880px) {
    .hero {
      grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
    }

    .hero-copy {
      padding: 3rem;
    }
  }
</style>

<svelte:head>
  <title>Mandarin Path</title>
</svelte:head>

<section class="hero">
  <div class="hero-copy panel">
    <p class="eyebrow">Chinese learning app</p>
    <h1>Build Mandarin habits one character at a time.</h1>
    <p>
      Follow bite-sized HSK 1 lessons, review pinyin and tones, then lock in vocabulary with a playful
      memory game.
    </p>
    <div class="hero-actions">
      <a class="button primary" href="/blog">Start lessons</a>
      <a class="button secondary" href="/memory-game">Practice words</a>
    </div>
  </div>

  <div class="hero-card panel" aria-label="Featured Chinese character">
    <div class="character-card">
      <span class="character hanzi">学</span>
      <span class="pronunciation">xué · learn</span>
    </div>
  </div>
</section>

<section class="stats">
  <div class="stat panel">
    <strong>4</strong>
    <span>guided chapters</span>
  </div>
  <div class="stat panel">
    <strong>47</strong>
    <span>starter words</span>
  </div>
  <div class="stat panel">
    <strong>HSK 1</strong>
    <span>beginner focus</span>
  </div>
</section>

<section class="section">
  <p class="eyebrow">Learning flow</p>
  <div class="path-grid">
    <article class="path-card panel">
      <span class="path-icon hanzi">声</span>
      <h3>Hear the sound</h3>
      <p>Start with pinyin and tones so each new word has a reliable pronunciation anchor.</p>
    </article>
    <article class="path-card panel">
      <span class="path-icon hanzi">字</span>
      <h3>Recognize characters</h3>
      <p>Scan clear vocabulary cards with hanzi, pinyin, and English meaning grouped by chapter.</p>
    </article>
    <article class="path-card panel">
      <span class="path-icon hanzi">练</span>
      <h3>Practice recall</h3>
      <p>Use the memory game to match meaning with characters and strengthen active recall.</p>
    </article>
  </div>
</section>
