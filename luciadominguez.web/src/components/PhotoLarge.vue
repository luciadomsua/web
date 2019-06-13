<template>
  <div class="photo">
    <div class="photo-container">
      <div class="photo-card">
        <div class="photo-image">
          <img :src="photo.Url" :alt="photo.Title">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Photo } from "../types";

@Component
export default class PhotoLarge extends Vue {
  @Prop()
  photo!: Photo;

  mounted() {}
}
</script>

<style lang="scss">
</style>
