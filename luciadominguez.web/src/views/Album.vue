<template>
  <div class="photo-view">
    <div class="columns">
      <div class="column">
        <PhotoLarge :photo="cover"/>
      </div>
      <div class="column">
        <PhotoGrid :album="album"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import PhotoLarge from "@/components/PhotoLarge.vue";
import PhotoGrid from "@/components/PhotoGrid.vue";
import { Album, Photo } from "../types";

@Component({
  components: {
    PhotoLarge,
    PhotoGrid
  }
})
export default class AlbumView extends Vue {
  album!: Album;
  cover!: Photo;

  mounted() {
    const albumId: string = this.$route.params.id;
    this.album = this.$store.getters["albums/byId"](albumId);
    this.cover = this.album.Cover || this.album.Photos[0];
  }
}
</script>

<style lang="scss">
</style>
