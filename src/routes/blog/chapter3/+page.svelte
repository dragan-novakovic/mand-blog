<script lang="ts">
  import ChapterPage from "../../../components/ChapterPage.svelte";

  const words = [
    { eng: "Big", ch: "大", pinyin: "dà" },
    { eng: "Adult male", ch: "夫", pinyin: "fū" },
    { eng: "Small", ch: "小", pinyin: "xiǎo" },
    { eng: "Everyone", ch: "人人", pinyin: "rén rén" },
    { eng: "Adult", ch: "大人", pinyin: "dà rén" },
    { eng: "Villain/small person", ch: "小人", pinyin: "xiǎo rén" },
    { eng: "Size", ch: "大小", pinyin: "dà xiǎo" },
    { eng: "Sun/Day", ch: "日", pinyin: "rì" },
    { eng: "Moon/Month", ch: "月", pinyin: "yuè" },
    { eng: "Bright", ch: "明", pinyin: "míng" },
    { eng: "Sunrise", ch: "旦", pinyin: "dàn" },
    { eng: "Dusk", ch: "夕", pinyin: "xī" }
  ];

  const insights = [
    {
      title: "Build compounds",
      body: "大, 小, and 人 combine into easy visual compounds like 大人 and 小人.",
      ch: "合"
    },
    {
      title: "Radical story",
      body: "明 combines sun 日 and moon 月, a memorable character story for bright.",
      ch: "明"
    },
    {
      title: "Time clues",
      body: "日, 月, 旦, and 夕 connect to day, month, sunrise, and dusk.",
      ch: "日"
    }
  ];

  const phrases = [
    { zh: "人人学汉语。", pinyin: "rén rén xué hàn yǔ.", translation: "Everyone studies Chinese." },
    { zh: "日月明。", pinyin: "rì yuè míng.", translation: "Sun and moon make brightness." },
    { zh: "大小不一样。", pinyin: "dà xiǎo bù yí yàng.", translation: "The sizes are not the same." }
  ];
</script>

<ChapterPage
  chapter="Chapter 03"
  title="Size, people, sun, and moon"
  description="Practice simple characters that combine into memorable visual words and nature-based meanings."
  leadCharacter="明"
  leadPinyin="míng · bright"
  lessonTheme="Character building"
  {words}
  {insights}
  {phrases}
/>
