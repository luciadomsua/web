<template>
    <div class="slider">
        <ul>
            <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";

export default class Slider extends Vue {
    @Prop() items!: any[];
}
</script>

<style lang="scss">
.slider {
    ul {
        list-style: none;
    }
}
</style>
