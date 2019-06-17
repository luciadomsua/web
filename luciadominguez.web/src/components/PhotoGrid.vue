<template>
  <div class="photo-grid">
    <div class="columns">
      <div class="column" v-for="photo in album.photos" :key="photo.id">
        <Polaroid :photo="photo"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Album } from "../types";
import Polaroid from "./Polaroid.vue";

@Component({
  components: {
    Polaroid
  }
})
export default class PhotoGrid extends Vue {
  @Prop()
  album!: Album[];

  mounted() {}
}
</script>

<style lang="scss">
.columns {
  flex-flow: row wrap;

  .column {
    width: 25%;
  }
}
</style>
