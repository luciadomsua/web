<template>
  <div class="gallery">
    <div class="album-slider">
      <AlbumSlider :albums="albums"/>
    </div>
    <div class="album-slider">
      <AlbumSlider :albums="albums"/>
    </div>
    <div class="album-slider">
      <AlbumSlider :albums="albums"/>
    </div>
    <div class="album-slider">
      <AlbumSlider :albums="albums"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { Album } from "../types";
import AlbumSlider from "../components/AlbumSlider.vue";
import Toolbox from "../tools/toolbox";

@Component({
  components: {
    AlbumSlider
  }
})
export default class Gallery extends Vue {
  @Getter("albums/all")
  albums!: Album[];

  mounted(): void {}
}
</script>

<style lang="scss">
.album-slider {
  margin-bottom: 30px;
}
</style>
