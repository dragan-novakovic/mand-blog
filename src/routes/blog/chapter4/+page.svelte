<script lang="ts">
  import ChapterPage from "../../../components/ChapterPage.svelte";

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
    { eng: "Wind", ch: "风", pinyin: "fēng" }
  ];

  const insights = [
    {
      title: "Animal set",
      body: "兔, 狗, 猫, and 马 give you a friendly group for quick recognition practice.",
      ch: "兔"
    },
    {
      title: "Nature radicals",
      body: "山, 木, 水, 火, and 石 are visual characters that are easy to sketch and remember.",
      ch: "山"
    },
    {
      title: "Weather family",
      body: "雨 connects naturally with 雪, while 风 and 冰 round out weather vocabulary.",
      ch: "雨"
    }
  ];

  const phrases = [
    { zh: "小狗在山上。", pinyin: "xiǎo gǒu zài shān shàng.", translation: "The puppy is on the mountain." },
    { zh: "今天有雨和风。", pinyin: "jīn tiān yǒu yǔ hé fēng.", translation: "Today there is rain and wind." },
    { zh: "木、水、火。", pinyin: "mù, shuǐ, huǒ.", translation: "Wood, water, fire." }
  ];
</script>

<ChapterPage
  chapter="Chapter 04"
  title="Animals, nature, and weather"
  description="Review concrete visual characters for animals, natural elements, and common weather words."
  leadCharacter="山"
  leadPinyin="shān · mountain"
  lessonTheme="Visual vocabulary"
  {words}
  {insights}
  {phrases}
/>
