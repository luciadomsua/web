<template>
    <div id="hero-container">
        <div class="hero"></div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Hero extends Vue {
    mounted(): void {}
}
</script>

<style lang="scss">
@import "@/styles/defines.scss";

#hero-container {
    width: 100%;
    background-color: $third;
    height: 250px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    .hero {
        width: 100%;
        height: 100%;
        max-width: $maxWidth;
        border: 1px solid red;
    }
}
</style>
