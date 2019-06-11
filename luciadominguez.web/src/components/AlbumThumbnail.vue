<template>
    <div></div>
</template>

<script lang="ts">
import Vue from "vue";
import { Getter } from "vuex-class";
import { Prop, Component } from "vue-property-decorator";
import { Album } from "../types";

@Component
export default class AlbumThumbnail extends Vue {
    @Prop() album!: Album;

    mounted(): void {}
}
</script>

<style lang="scss">
</style>
