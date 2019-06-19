<template>
  <div class="home">
    <Hero/>
    <div class="loader" v-if="!albums">Cargando...</div>
    <AlbumSlider v-else v-for="album in albums" :key="album.Id" :album="album"/>
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
  get albums(): void {
    return this.$store.getters["albums/all"];
  }
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
