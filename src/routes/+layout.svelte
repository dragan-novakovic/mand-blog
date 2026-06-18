<script>
  import Nav from "../components/Nav.svelte";
</script>

<style>
  main {
    position: relative;
    width: min(1180px, calc(100% - 32px));
    padding: 2rem 0 4rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media (min-width: 760px) {
    main {
      padding-top: 3rem;
    }
  }
</style>

<Nav />

<main>
  <slot />
</main>
