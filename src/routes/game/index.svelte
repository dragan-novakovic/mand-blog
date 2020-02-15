<script>
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

  const eng_only = words.map(({ eng }) => eng);
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
    border: 1px solid black;
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
    {#each words as { eng, ch, pinyin }, i}
      <div class="card-container">
        <p class="pinyin">{pinyin}</p>
        <p class="hanzi">{ch}</p>
      </div>
    {/each}
    {#each eng_only as eng, i}
      <div class="card-container">
        <p class="eng">{eng}</p>
      </div>
    {/each}
  </div>
</main>
