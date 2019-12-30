<script context="module">

</script>

<script>
  const words = [
    { eng: "I", ch: "我", pinyin: "wǒ" },
    { eng: "You", ch: "你", pinyin: "nǐ" },
    { eng: "He", ch: "他", pinyin: "tā" },
    { eng: "She", ch: "她", pinyin: "tā" },
    { eng: "To be", ch: "是", pinyin: "shì" },
    { eng: "Not (Negation)", ch: "不", pinyin: "bù" },
    { eng: "Question particle", ch: "吗", pinyin: "ma" },
    { eng: "Hello", ch: "你好", pinyin: "nǐhǎo" },
    { eng: "Goodbye", ch: "再见", pinyin: "zàijiàn" },
    { eng: "person", ch: "人", pinyin: "rén" },
    { eng: "China", ch: "中国", pinyin: "zhōngguó" },
    { eng: "America", ch: "美国", pinyin: "měiguó" }
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

  .tones {
    display: flex;
    justify-content: space-between;
    width: 160px;
    font-size: 2em;
    list-style-type: none;
    text-decoration: underline;
  }
</style>

Ｉ
<svelte:head>
  <title>Intro</title>
</svelte:head>

<h1>Intro part - １</h1>

<div class="content">
  <div>
    <h2>Pinyin</h2>
    <p>
      is the Chinese lagnuage phonetic system. It is used to mark Mandarin
      Chinese pronunciation by the Latin alphabet.
    </p>
    <div>
      <span>bā</span>
      =
      <h3>八</h3>
    </div>
  </div>

  <h2>Tones</h2>
  <ul class="tones">
    <li>ā</li>
    <li>á</li>
    <li>ǎ</li>
    <li>à</li>

  </ul>
  <hr />
  <h2>Greetings</h2>
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
</div>
