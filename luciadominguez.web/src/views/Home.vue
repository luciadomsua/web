<template>
  <div class="home">
    <Hero/>
    <AlbumSlider v-for="album in albums" :key="album.Id" :album="album"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Hero from "@/components/Hero.vue";
import AlbumSlider from "@/components/AlbumSlider.vue";
import { Album } from "../types";

@Component({
  components: {
    Hero,
    AlbumSlider
  }
})
export default class Home extends Vue {
  albums!: Album[];

  created(): void {
    this.albums = this.$store.getters["albums/all"];
  }

  mounted(): void {}
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;

  #hero {
    margin-bottom: 25px;
  }
}
</style>
