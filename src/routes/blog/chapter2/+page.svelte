<script lang="ts">
  import ChapterPage from "../../../components/ChapterPage.svelte";

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

  const insights = [
    {
      title: "Language pattern",
      body: "汉语 and 英语 both end in 语, a useful character for language names.",
      ch: "语"
    },
    {
      title: "Group pronouns",
      body: "Add 们 to people words to make groups, such as 我们 for we and 你们 for you all.",
      ch: "们"
    },
    {
      title: "Study verbs",
      body: "学, 说, and 写 make a practical mini set for talking about language learning.",
      ch: "学"
    }
  ];

  const phrases = [
    { zh: "我们学汉语。", pinyin: "wǒ men xué hàn yǔ.", translation: "We study Chinese." },
    { zh: "他们也说英语。", pinyin: "tā men yě shuō yīng yǔ.", translation: "They also speak English." },
    { zh: "我写汉字。", pinyin: "wǒ xiě hàn zì.", translation: "I write Chinese characters." }
  ];
</script>

<ChapterPage
  chapter="Chapter 02"
  title="Speaking and studying Chinese"
  description="Learn the core words for languages, studying, speaking, writing, and talking about groups of people."
  leadCharacter="语"
  leadPinyin="yǔ · language"
  lessonTheme="Language learning"
  {words}
  {insights}
  {phrases}
/>
