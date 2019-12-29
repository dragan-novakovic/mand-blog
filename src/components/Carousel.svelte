<script>
  import Icon from "svelte-awesome";
  import { chevronRight, chevronLeft } from "svelte-awesome/icons";
  let images = [
    {
      title:
        "Can saltwater save world in 2050, Filmmaker Darius Raznih disscueses this",
      url: "./images/banner.jpg"
    },
    {
      title:
        "Can2 saltwater save world in 2050, Filmmaker Darius Raznih disscueses this",
      url: "./images/banner.jpg"
    },
    {
      title:
        "Can3 saltwater save world in 2050, Filmmaker Darius Raznih disscueses this",
      url: "./images/railway.jpg"
    }
  ];

  let selected = 0;

  function next() {
    selected += 1;
  }

  function back() {
    if (selected > 0) {
      selected -= 1;
    }
  }
</script>

<style>
  .carousel {
    background-size: cover;
  }
  .carousel-main {
    display: flex;
    justify-content: space-between;
    color: white;
  }

  h1 {
    font-size: 4em;
    font-weight: 400;
    margin: 20px 20%;
  }

  button {
    background: transparent;
    padding: 20px 40px;
    color: white;
  }

  .chev-left {
    margin: auto 0;
  }

  .chev-right {
    margin: auto 0;
  }
</style>

<div class="carousel" style="background-image: url({images[selected].url});">
  <div class="carousel-main">
    <div on:click={back} class="chev-left">
      <Icon data={chevronLeft} scale={4} />
    </div>

    <h1>{images[selected].title}</h1>
    <div on:click={next} class="chev-right">
      <Icon data={chevronRight} scale={4} />
    </div>
  </div>

  <button>READ MORE</button>

</div>
