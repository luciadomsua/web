<template>
  <div class="comment">
    <p class="author">{{ comment.author }}</p>
    <p class="text">{{ comment.text }}</p>
    <p class="date">{{ comment.creationDate }}</p>
    <p/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Comment } from "../types";

@Component
export default class CommentComponent extends Vue {
  @Prop()
  comment!: Comment;

  created(): void {}

  mounted(): void {}
}
</script>

<style lang="scss">
@import "@/styles/defines.scss";

.comment {
  background-color: rgb(255, 255, 255);
  padding: 10px;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  border: $polaroidBorder;
  box-shadow: $polaroidBoxShadow;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  .author {
    font-weight: bold;
    font-size: 18px;
  }

  .text {
    margin: 10px 0;
  }

  .date {
    color: #747474;
    font-size: 14px;
  }
}
</style>
