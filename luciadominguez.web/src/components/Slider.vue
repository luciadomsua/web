<template>
    <div class="slider">
        <ul>
            <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";

@Component
export default class Slider extends Vue {
    @Prop() items!: any[];

    mounted(): void {}
}
</script>

<style lang="scss">
.slider {
    ul {
        list-style: none;
    }
}
</style>
