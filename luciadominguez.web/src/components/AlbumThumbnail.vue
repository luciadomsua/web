<template>
  <div class="album-card">
    <a :href="album.Url">
      <div class="album-image">
        <img :src="album.Cover.Url" :alt="album.Description">
      </div>
      <div class="album-title">
        <span>{{ album.Title }}</span>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { Getter } from "vuex-class";
import { Prop, Component, Vue } from "vue-property-decorator";
import { Album } from "../types";

@Component
export default class AlbumThumbnail extends Vue {
  @Prop() album!: Album;

  mounted(): void {}
}
</script>

<style lang="scss">
.album-card {
  max-width: 200px;
  background-color: rgb(255, 255, 255);
  padding: 5px 5px 5px;
  border: 1px solid rgb(235, 235, 235);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  z-index: 1;

  a {
    text-decoration: none;
    color: #333333;
  }

  .album-image {
    opacity: 0.5;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
