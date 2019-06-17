<template>
  <div class="comments">
    <CommentComponent v-for="comment in comments" :key="comment.id" :comment="comment"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Comment } from "../types";
import CommentComponent from "@/components/Comment.vue";

@Component({
  components: {
    CommentComponent
  }
})
export default class Comments extends Vue {
  @Prop()
  comments!: Comment[];

  created() {}

  mounted() {}
}
</script>

<style lang="scss">
</style>
