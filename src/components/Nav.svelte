<script lang="ts">
  import { page } from "$app/state";

  const pathname = $derived(page.url.pathname);
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
  }

  .nav-title {
    color: grey;
    text-transform: uppercase;
    padding-top: 10px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    text-transform: uppercase;
  }
</style>

<nav>
  <ul>
    <li>
      <a class:selected={pathname === "/"} href="/">home</a>
    </li>
    <li>
      <a data-sveltekit-preload-data="hover" class:selected={pathname.startsWith("/blog")} href="/blog">blog</a>
    </li>
    <li>
      <a
        data-sveltekit-preload-data="hover"
        class:selected={pathname.startsWith("/memory-game")}
        href="/memory-game"
      >
        Memory Game
      </a>
    </li>
  </ul>
  <div class="nav-title">
    <h2>Blog</h2>
  </div>

</nav>
