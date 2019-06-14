<template>
  <div class="photo-large">
    <Polaroid :photo="photo" :title="photo.Title"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Photo } from "../types";
import Polaroid from "@/components/Polaroid.vue";

@Component({
  components: {
    Polaroid
  }
})
export default class PhotoLarge extends Vue {
  @Prop()
  photo!: Photo;

  mounted() {}
}
</script>

<style lang="scss">
</style>
