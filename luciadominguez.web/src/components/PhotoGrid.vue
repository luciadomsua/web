<template>
    <div class="photo-grid">
        
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Photo } from "../types";

@Component
export default class PhotoGrid extends Vue {
    @Prop()
    photos!: Photo[];

    mounted() {

    }
}
</script>

<style>

</style>
