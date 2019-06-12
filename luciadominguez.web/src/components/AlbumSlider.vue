<template>
    <div class="album-slider">
        <div class="slider-container">
            <div v-for="album in albums" :key="album.Id" class="album-container">
                <AlbumThumbnail :album="album"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";
import { Album } from "../types";
import AlbumThumbnail from "./AlbumThumbnail.vue";
import Toolbox from "../tools/toolbox";

@Component({
    components: {
        AlbumThumbnail
    }
})
export default class AlbumSlider extends Vue {
    @Prop() albums!: Album[];

    mounted(): void {
        this.albums = Toolbox.mockAlbums();
    }
}
</script>

<style lang="scss">
.slider-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    .album-container {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transform: rotate(-2deg);

        &:nth-child(even) {
            transform: rotate(2deg);
        }

        &:nth-child(3n) {
            position: relative;
            top: -5px;
        }

        &:nth-child(5n) {
            position: relative;
            right: 5px;
        }

        &:nth-child(8n) {
            position: relative;
            top: 8px;
            right: 5px;
        }

        &:nth-child(11n) {
            position: relative;
            top: 3px;
            left: -5px;
        }

        &:not(:last-child) {
            margin-right: 10px;
        }
    }
}
</style>
