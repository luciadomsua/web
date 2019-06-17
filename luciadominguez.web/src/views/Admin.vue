<template>
  <div class="admin-view">
    <div class="columns">
      <div class="column">
        <AddAlbumView/>
      </div>
      <div class="column"></div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddAlbumView from "./AddAlbumView.vue";

@Component({
  components: {
    AddAlbumView
  }
})
export default class AdminView extends Vue {}
</script>

<style lang="scss" scoped>
.columns {
  margin-top: 50px;
}
</style>
