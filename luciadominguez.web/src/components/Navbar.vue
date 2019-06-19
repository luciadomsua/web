<template>
  <div id="navbar-container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="@/assets/logo.svg" width="200" height="50">
        </router-link>

        <a
          id="navBurgerToggle"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/gallery" class="navbar-item">Garería</router-link>
          <router-link to="/about" class="navbar-item">Sobre mi</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  expanded: boolean = false;

  mounted(): void {
    const toggle = document.getElementById("navBurgerToggle");
    const menu = document.getElementById("navbarBasicExample");

    if (toggle === null || menu === null) {
      return;
    }

    toggle.addEventListener("click", event => {
      if (!this.expanded) {
        menu.style.display = "block";
        this.expanded = true;
      } else {
        menu.style.display = "none";
        this.expanded = false;
      }
    });
  }
}
</script>

<style lang="scss">
@import "@/styles/defines.scss";

#navbar-container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: $primary;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  .navbar-burger {
    height: unset;
  }

  nav {
    width: 100%;
    max-width: $maxWidth;
    background-color: $primary;
    height: $navHeight;

    .navbar-item img {
      max-height: 3rem;
    }
  }

  .navbar-link:not(.is-arrowless)::after {
    border-color: #8d555b;
  }
}
</style>
