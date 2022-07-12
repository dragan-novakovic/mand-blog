<script>
  import Nav from "../components/Nav.svelte";

  export /**
* @type {any}
*/
   let segment;
</script>

<style>
  main {
    position: relative;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
