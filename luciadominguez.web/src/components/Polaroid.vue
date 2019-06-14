<template>
  <div class="polaroid" @click="photoClicked(photo)">
    <div class="image-container">
      <img :src="url" :alt="photoTitle">
    </div>
    <div class="image-meta">
      <span>{{ photoTitle }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Photo } from "../types";

@Component
export default class Polaroid extends Vue {
  @Prop()
  photo!: Photo;

  @Prop()
  title!: string;

  mounted() {}

  get url(): string {
    return this.photo.Url;
  }

  get photoTitle(): string {
    return this.title || this.photo.Title;
  }

  photoClicked(photo: Photo) {
    this.$router.replace({ name: "photo", params: { id: photo.Id } });
  }
}
</script>

<style lang="scss">
@import "@/styles/polaroid.scss";
</style>
