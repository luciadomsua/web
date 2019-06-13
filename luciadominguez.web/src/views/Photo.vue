<template>
  <div class="photo-view">
    <div class="columns">
      <div class="column"></div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import PhotoLarge from "@/components/PhotoLarge.vue";
import PhotoGrid from "@/components/PhotoGrid.vue";

@Component({
  components: {
    PhotoLarge,
    PhotoGrid
  }
})
export default class PhotoView extends Vue {
  mounted() {}
}
</script>

<style lang="scss">
</style>
