<template>
  <div class="gallery">
    <div class="album-slider" v-for="album in albums" :key="album.id">
      <AlbumSlider :album="album"/>
    </div>
    <router-view :key="$route.fullPath"/>
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
  albums!: Album[];

  created(): void {
    this.albums = this.$store.getters["albums/all"];
  }

  mounted(): void {}
}
</script>

<style lang="scss">
.gallery {
  margin-top: 25px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  .album-slider {
    min-width: 33%;
  }
}
.album-slider {
  margin-bottom: 30px;
}
</style>
