<template>
  <div class="album-view">
    <div class="big-picture" @click="toggleComments">
      <Polaroid :photo="albumCover"/>
    </div>
    <div class="photo-grid">
      <div class="photo-thumbnail" v-for="photo in albumPhotos" :key="photo.id">
        <div class="small-picture" @click="changeBigPicture(photo)">
          <Polaroid :photo="photo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Polaroid from "@/components/Polaroid.vue";
import { Album, Photo } from "../types";

@Component({
  components: {
    Polaroid
  }
})
export default class AlbumView extends Vue {
  album!: Album;

  get albumCover(): Photo | null {
    if (this.album !== null) {
      if (this.album.cover !== null) {
        return this.album.cover;
      }

      if (this.album.photos.length > 0) {
        return this.album.photos[0];
      }
    }

    return null;
  }

  get albumPhotos(): Photo[] | null {
    return this.album.photos;
  }

  get albumTitle(): string {
    return this.album.title;
  }

  changeBigPicture(photo: Photo): void {
    this.album.cover = photo;
  }

  toggleComments(): void {
    if (this.albumCover !== null) {
      this.$router.push({
        name: "photo",
        params: { photoId: this.albumCover.id }
      });
    }
  }

  created(): void {
    const albumId = this.$route.params["albumId"];
    this.album = this.$store.getters["albums/byId"](albumId);
  }
}
</script>

<style lang="scss">
.album-view {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;

  .big-picture {
    width: 49%;
  }

  .photo-grid {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    width: 50%;

    .photo-thumbnail {
      width: 25%;
      height: auto;
    }
  }
}

.columns {
  flex-flow: row wrap;

  .column {
    width: 25%;
  }
}

.big-picture {
  display: flex;

  .polaroid {
    width: 100%;
    img {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    flex-grow: 1;
  }
}
</style>
