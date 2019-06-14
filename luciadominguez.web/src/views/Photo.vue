<template>
  <div class="photo-view">
    <div class="columns">
      <div class="column">
        <PhotoLarge :photo="photo"/>
      </div>
      <div class="column">
        <Comments :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Photo } from "../types";
import PhotoLarge from "@/components/PhotoLarge.vue";
import Comments from "@/components/Comments.vue";

@Component({
  components: {
    PhotoLarge,
    Comments
  }
})
export default class PhotoView extends Vue {
  photo!: Photo;

  get comments() {
    return this.photo.Comments;
  }

  created() {
    const photoId = this.$route.params.id;
    this.photo = this.$store.getters["photos/byId"](photoId);
  }

  mounted() {}
}
</script>

<style lang="scss">
</style>
