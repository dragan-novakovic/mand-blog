<script>
  import Icon from "svelte-awesome";
  import { userCircleO, globe, eye } from "svelte-awesome/icons";
  import Header from "./components/Header.svelte";
  import Carousel from "./components/Carousel.svelte";
  import Card from "./components/Card.svelte";
</script>

<style>
  main {
    text-align: center;
    background-color: whitesmoke;
  }
  article {
    background-color: cadetblue;
    max-height: 500px;
    margin-top: 16px;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
  }

  .tabs {
    margin: 50px 0;
  }

  ul li {
    margin-left: 10px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
  }

  .cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>

<main>
  <Header />
  <article>
    <Carousel />
  </article>
  <div class="tabs">
    <ul>
      <li style="color: green;">
        <Icon data={userCircleO} />
        <span>People</span>
      </li>
      <li style="color: purple;">
        <Icon data={globe} />
        <span>Places</span>
      </li>
      <li style="color: blue;">
        <Icon data={eye} />
        <span>Experiences</span>
      </li>
    </ul>
  </div>
  <div class="cards-container">
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</main>
