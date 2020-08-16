<script context="module">

</script>

<script lang="ts">
  const words = [
    { eng: "Plural marker for people", ch: "们", pinyin: "men" },
    { eng: "To Speak", ch: "说", pinyin: "shuō" },
    { eng: "Chinese lang.", ch: "汉语", pinyin: "hànyǔ" },
    { eng: "English lang.", ch: "英语", pinyin: "yīngyǔ" },
    { eng: "Both; all", ch: "都", pinyin: "dōu" },
    { eng: "To learn; To Study", ch: "学", pinyin: "xué" },
    { eng: "Also; Too", ch: "也", pinyin: "yě" },
    { eng: "To Write", ch: "写", pinyin: "xiě" },
    { eng: "Chinese character", ch: "汉字", pinyin: "hànzì" },
  ];
</script>

<style>
  h1 {
    text-transform: uppercase;
  }

  h3 {
    display: inline;
    font-weight: bold;
    font-family: "Arial Unicode MS";
    font-stretch: extra-expanded;
    font-size: 2em;
  }

  /* .tones {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    width: 160px;
    font-size: 2em;
    list-style-type: none;
    text-decoration: underline;
    background: lightgray;
    border-radius: 5px;
    border: 1px solid black;
    padding: 8px;
  } */

  /* .example {
    display: inline-block;
    border: 1px solid black;
    padding: 8px;
    border-radius: 5px;
    background: lightgray;
    margin-bottom: 10px;
  } */

  .title {
    display: flex;
    justify-content: space-between;
  }
</style>

<svelte:head>
  <title>Intro</title>
</svelte:head>

<div class="title">
  <h1>Chapter - II</h1>
  <h4>Word count: {words.length}</h4>
</div>
<hr />

<div class="content">
  <h2>Learning Chinese 1</h2>
  <ul>
    {#each words as { eng, ch, pinyin }}
      <li>
        {eng} -
        <h3>{ch}</h3>
        /
        <span>{pinyin}</span>
      </li>
    {/each}
  </ul>
  <hr />
  <h2>Examples</h2>
</div>
