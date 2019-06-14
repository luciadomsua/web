<template>
  <div class="album-card">
    <router-link :to="{ name: 'album', params: { id: album.Id } }">
      <Polaroid :photo="albumCover" :title="albumTitle"/>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Getter } from "vuex-class";
import { Prop, Component, Vue } from "vue-property-decorator";
import { Album, Photo } from "../types";
import Polaroid from "@/components/Polaroid.vue";

@Component({
  components: {
    Polaroid
  }
})
export default class AlbumThumbnail extends Vue {
  @Prop()
  album!: Album;

  mounted(): void {}

  get albumCover(): Photo {
    return this.album.Cover || this.album.Photos[0];
  }

  get albumTitle(): string {
    return this.album.Title;
  }
}
</script>

<style lang="scss">
</style>
