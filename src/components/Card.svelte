<script>
  import Icon from "svelte-awesome";
  import { eye } from "svelte-awesome/icons";
</script>

<style>
  article {
    background-color: white;
    min-width: 400px;
    max-width: 40vw;
    margin: 20px auto;
    box-shadow: 1px 1px 5px grey;
  }
  .card-bg {
    min-width: 400px;
    max-width: 40vw;
  }
  .author {
    display: flex;
    justify-content: flex-start;
  }

  .author h4 {
    margin-left: 1em;
  }
  .avatar {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin: 10px 0 0 10px;
  }

  h2 {
    text-align: left;
    margin-left: 10px;
  }
  .circle {
    position: relative;
    bottom: 20px;
    left: 90%;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #379;
  }
</style>

<article>
  <div class="image-container">
    <img class="card-bg" src="./images/railway.jpg" alt="placeholder" />
    <div class="circle">
      <Icon
        style="color: white; padding-top:2px; padding-left:1px;"
        data={eye}
        scale="1.2" />
    </div>
  </div>
  <div class="author">
    <img class="avatar" src="./images/railway.jpg" alt="placeholder" />
    <h4>Don Joe</h4>
  </div>
  <h2>
    Why winter is best time to tacle west sibira trainstation express train
  </h2>
</article>
