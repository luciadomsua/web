<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h4>Albums</h4>
        <ul>
            <li v-for="album in Albums" v-bind:key="album">{{ album.Id }} - {{ album.Title }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { IAlbum } from "@/types";

@Component
export default class About extends Vue {
    @Getter Albums?: IAlbum[];
}
</script>
