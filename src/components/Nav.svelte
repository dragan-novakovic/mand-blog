<script lang="ts">
  import { page } from "$app/state";

  const pathname = $derived(page.url.pathname);
  const links = [
    { href: "/", label: "Learn", match: (path: string) => path === "/" },
    { href: "/blog", label: "Lessons", match: (path: string) => path.startsWith("/blog") },
    { href: "/memory-game", label: "Practice", match: (path: string) => path.startsWith("/memory-game") }
  ];
</script>

<style>
  nav {
    position: sticky;
    top: 0;
    z-index: 5;
    width: min(1180px, calc(100% - 32px));
    margin: 1rem auto 0;
    border: 1px solid var(--line-color);
    border-radius: 999px;
    background: rgba(255, 250, 243, 0.78);
    backdrop-filter: blur(18px);
    box-shadow: 0 14px 40px rgba(86, 52, 29, 0.09);
    font-weight: 700;
    padding: 0.45rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--heading-color);
    padding-left: 0.6rem;
  }

  .brand-mark {
    display: grid;
    place-items: center;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    color: white;
    background: linear-gradient(135deg, var(--accent-color), var(--gold-color));
    box-shadow: 0 12px 24px rgba(217, 67, 47, 0.25);
    font-family: "Noto Serif CJK SC", "Songti SC", serif;
    font-size: 1.5rem;
  }

  .brand-text {
    display: none;
  }

  .brand-title {
    display: block;
    line-height: 1;
  }

  .brand-subtitle {
    display: block;
    color: var(--muted-color);
    font-size: 0.72rem;
    font-weight: 600;
    margin-top: 0.2rem;
  }

  ul {
    display: flex;
    gap: 0.25rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .selected {
    color: var(--accent-color-strong);
    background: #fff2e7;
    box-shadow: inset 0 0 0 1px rgba(217, 67, 47, 0.12);
  }

  .selected::before {
    content: "";
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: var(--accent-color);
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    color: var(--ink-color);
    text-decoration: none;
    padding: 0.85rem 1rem;
    border-radius: 999px;
    font-size: 0.88rem;
  }

  a:hover {
    background: rgba(255, 242, 231, 0.75);
    text-decoration: none;
  }

  @media (min-width: 680px) {
    .brand-text {
      display: block;
    }

    a {
      padding-inline: 1.2rem;
    }
  }
</style>

<nav>
  <div class="brand" aria-label="Mandarin learning app">
    <span class="brand-mark hanzi">语</span>
    <span class="brand-text">
      <strong class="brand-title">Mandarin Path</strong>
      <span class="brand-subtitle">HSK 1 learning hub</span>
    </span>
  </div>

  <ul>
    {#each links as link}
      <li>
        <a data-sveltekit-preload-data="hover" class:selected={link.match(pathname)} href={link.href}>
          <span>{link.label}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>
