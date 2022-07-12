<script context="module">

</script>

<script lang="ts">
  const words = [
    { eng: "Rabbit", ch: "兔", pinyin: "tù" },
    { eng: "Dog", ch: "狗", pinyin: "gǒu" },
    { eng: "Cat", ch: "猫", pinyin: "māo" },
    { eng: "Horse", ch: "马", pinyin: "mǎ" },
    { eng: "Puppy", ch: "小狗", pinyin: "xiǎo gǒu" },
    { eng: "Fire", ch: "火", pinyin: "huǒ" },
    { eng: "Tree", ch: "木", pinyin: "mù" },
    { eng: "Mountain", ch: "山", pinyin: "shān" },
    { eng: "Stone", ch: "石", pinyin: "shí" },
    { eng: "Water", ch: "水", pinyin: "shuǐ" },
    { eng: "Rain", ch: "雨", pinyin: "yǔ" },
    { eng: "Ice", ch: "冰", pinyin: "bīng" },
    { eng: "Snow", ch: "雪", pinyin: "xuě" },
    { eng: "Wind", ch: "风", pinyin: "fēng" },
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
  <h1>Chapter - IV</h1>
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
