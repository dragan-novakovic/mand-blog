<script>
  import Icon from "svelte-awesome";
  import { facebook, twitter, instagram } from "svelte-awesome/icons";
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }
  .logo {
    padding-top: 10px;
    width: 200px;
    height: inherit;
    display: inline-block;
  }
  ul {
    display: flex;
    list-style-type: none;
  }

  ul li:not(:first-child) {
    margin-left: 10px;
  }

  ul li {
    text-transform: uppercase;
    font-weight: 500;
    color: #8f8f8f;
  }

  .social-icons {
    margin-right: 20px;
  }
</style>

<header>
  <nav>
    <ul>
      <li>Contributors</li>
      <li>About</li>
      <li>Subscribe</li>
    </ul>
  </nav>
  <object
    data="https://adventure.com/wp-content/themes/adventure_2017/assets/img/logo.svg"
    type="image/svg+xml"
    class="logo"
    title="Adventure.com">
    <img
      src="https://adventure.com/wp-content/themes/adventure_2017/assets/img/logo.png"
      alt="Adventure.com" />
  </object>
  <div class="social-icons">
    <ul>
      <li>
        <a
          href="https://www.facebook.com/adventure/"
          target="_blank"
          title="Facebook">
          <Icon data={facebook} />
        </a>

      </li>
      <li>
        <a
          href="https://twitter.com/adventurecom?lang=en"
          target="_blank"
          title="Twitter">
          <Icon data={twitter} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/adventurecom/"
          target="_blank"
          title="Instagram">
          <Icon data={instagram} />
        </a>
      </li>
    </ul>
  </div>
</header>
