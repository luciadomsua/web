<template>
  <div id="hero">
    <div class="hero-container"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Hero extends Vue {
  mounted(): void {}
}
</script>

<style lang="scss">
@import "@/styles/defines.scss";

#hero {
  width: 100%;
  background-color: $third;
  height: 350px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  display: flex;
  position: relative;

  img {
    width: 100%;
    flex-grow: 1;
  }

  .hero-container {
    width: 100%;
    height: 100%;
    max-width: $maxWidth;
    background-image: url("~@/assets/hero.jpg");
    background-size: cover;
    object-position: center;
  }
}
</style>
