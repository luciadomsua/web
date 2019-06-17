<template>
  <div class="polaroid">
    <div class="image-container">
      <img :src="url" :alt="photoTitle">
    </div>
    <div class="image-meta" v-if="!noTitle">
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

  @Prop({ default: false })
  noTitle!: boolean;

  get url(): string {
    return this.photo.url;
  }

  get photoTitle(): string {
    return this.photo.title;
  }
}
</script>

<style lang="scss">
@import "@/styles/polaroid.scss";
</style>
