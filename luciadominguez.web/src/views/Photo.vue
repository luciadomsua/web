<template>
  <div class="photo-view">
    <div class="big-picture" @click="toggleComments">
      <Polaroid :photo="photo"/>
    </div>
    <div class="comments-view">
      <Comments :comments="comments"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Photo, Comment } from "../types";
import Polaroid from "@/components/Polaroid.vue";
import Comments from "@/components/Comments.vue";

@Component({
  components: {
    Polaroid,
    Comments
  }
})
export default class PhotoView extends Vue {
  photo!: Photo;

  get comments(): Comment[] | null {
    return this.photo.comments;
  }

  toggleComments(): void {
    this.$router.back();
  }

  created(): void {
    const photoId = this.$route.params.photoId;
    this.photo = this.$store.getters["photos/byId"](photoId);
  }
}
</script>

<style lang="scss">
.photo-view {
  margin-top: 25px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .big-picture {
    width: 49%;

    .polaroid {
      width: 100%;
      img {
        opacity: 1;
      }
    }
  }

  .comments-view {
    width: 50%;
  }
}

@media screen and (max-width: 479px) {
  .photo-view {
    margin-top: 0;
    flex-flow: column;

    .big-picture {
      width: 100%;
    }

    .comments-view {
      width: 100%;
    }
  }
}
</style>
