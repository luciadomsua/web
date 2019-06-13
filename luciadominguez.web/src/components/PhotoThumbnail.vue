<template>
  <div class="photo-thumbnail">
    <div class="photo-card">
      <a :href="photo.Url">
        <div class="photo-image">
          <img :src="photo.Url" :alt="photo.Description">
        </div>
        <div class="photo-title">
          <span>{{ photo.Title }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Photo } from "../types";

@Component
export default class PhotoThumbnail extends Vue {
  @Prop()
  photo!: Photo;

  mounted() {}
}
</script>

<style lang="scss">
.photo-card {
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

  .photo-image {
    opacity: 0.5;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .photo-title {
    font-size: 14px;
  }
}
</style>
