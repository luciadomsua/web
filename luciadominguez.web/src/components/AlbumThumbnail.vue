<template>
    <div></div>
</template>

<script lang="ts">
import Vue from "vue";
import { Getter } from "vuex-class";
import { Prop } from "vue-property-decorator";
import { Album } from "@/types";

export default class AlbumThumbnail extends Vue {
    @Prop() album!: Album;
}
</script>

<style lang="scss">
</style>
