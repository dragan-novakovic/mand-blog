<script context="module">

</script>

<script lang="ts">
  const words = [
    { eng: "Big", ch: "大", pinyin: "dà" },
    { eng: "Adult male", ch: "夫", pinyin: "fū" },
    { eng: "Small", ch: "小", pinyin: "xiǎo" },
    { eng: "Everyone", ch: "人人", pinyin: "rén rén" },
    { eng: "Adult", ch: "大人", pinyin: "dà rén" },
    { eng: "Villian/small person", ch: "小人", pinyin: "xiǎo rén" },
    { eng: "Size", ch: "大小", pinyin: "dà xiǎo" },
    { eng: "Sun/Day", ch: "日", pinyin: "rì" },
    { eng: "Moon/Month", ch: "月", pinyin: "yuè" },
    { eng: "Bright", ch: "明", pinyin: "míng" },
    { eng: "Sunrise", ch: "旦", pinyin: "dàn" },
    { eng: "Dusk", ch: "夕", pinyin: "xī" },
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
  .title {
    display: flex;
    justify-content: space-between;
  }
</style>

<svelte:head>
  <title>Intro</title>
</svelte:head>

<div class="title">
  <h1>Chapter - III</h1>
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
