<script lang="ts">
  import ChapterPage from "../../../components/ChapterPage.svelte";

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
    { eng: "Person", ch: "人", pinyin: "rén" },
    { eng: "China", ch: "中国", pinyin: "zhōngguó" },
    { eng: "America", ch: "美国", pinyin: "měiguó" }
  ];

  const insights = [
    {
      title: "Tone marks first",
      body: "Pinyin shows pronunciation with tone marks: ā, á, ǎ, à. Read the tone before memorizing the character.",
      ch: "声"
    },
    {
      title: "Question particle",
      body: "Add 吗 at the end of a statement to turn it into a simple yes-or-no question.",
      ch: "吗"
    },
    {
      title: "People and places",
      body: "Combine person words with country names to build beginner sentences quickly.",
      ch: "人"
    }
  ];

  const phrases = [
    { zh: "你好。", pinyin: "nǐ hǎo.", translation: "Hello." },
    { zh: "你是中国人吗？", pinyin: "nǐ shì zhōng guó rén ma?", translation: "Are you Chinese?" },
    { zh: "我不是美国人。", pinyin: "wǒ bú shì měi guó rén.", translation: "I am not American." }
  ];
</script>

<ChapterPage
  chapter="Chapter 01"
  title="Pinyin, greetings, and people"
  description="Start with the sounds of Mandarin, the four tones, and the first words you need for greeting people."
  leadCharacter="你"
  leadPinyin="nǐ · you"
  lessonTheme="Tones and introductions"
  {words}
  {insights}
  {phrases}
/>
