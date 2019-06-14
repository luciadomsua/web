<template>
  <div class="album-slider">
    <h1> {{ album.Title }} </h1>
    <div class="slider-container">
      <AlbumThumbnail :album="album" class="album-container"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";
import { Album } from "../types";
import AlbumThumbnail from "./AlbumThumbnail.vue";
import Toolbox from "../tools/toolbox";

@Component({
  components: {
    AlbumThumbnail
  }
})
export default class AlbumSlider extends Vue {
  @Prop()
  album!: Album;

  created(): void {}

  mounted(): void {}
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: left;
  font-size: 32px;
}

.slider-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  .album-container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    transform: rotate(-2deg);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:nth-child(even) {
      transform: rotate(2deg);
    }

    &:nth-child(3n) {
      position: relative;
      top: -5px;
    }

    &:nth-child(5n) {
      position: relative;
      right: 5px;
    }

    &:nth-child(7n) {
      position: relative;
      transform: rotate(1deg);
    }

    &:nth-child(8n) {
      position: relative;
      top: 8px;
      right: 5px;
    }

    &:nth-child(9n) {
      position: relative;
      transform: rotate(4deg);
    }

    &:nth-child(11n) {
      position: relative;
      top: 3px;
      left: -5px;
    }

    &:not(:last-child) {
      margin-right: 5px;
    }

    &:hover {
      transform: scale(1.5);
      position: relative;
      z-index: 15;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;

      .album-image {
        opacity: 1;
      }
    }
  }
}
</style>
