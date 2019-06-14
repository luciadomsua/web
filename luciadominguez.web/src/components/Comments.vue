<template>
  <div class="comments">
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Comment } from "../types";

@Component
export default class Comments extends Vue {
  @Prop()
  comments!: Comment[];

  created() {}

  mounted() {}
}
</script>

<style lang="scss">
</style>
