<template>
  <div class="photo-grid">
    <div class="columns" v-for="photo in album.Photos" :key="photo.Id">
      <div class="column">
        <PhotoThumbnail :photo="photo"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Album } from "../types";
import PhotoThumbnail from "./PhotoThumbnail.vue";

@Component({
  components: {
    PhotoThumbnail
  }
})
export default class PhotoGrid extends Vue {
  @Prop()
  album!: Album[];

  mounted() {}
}
</script>

<style>
</style>
