<template>
    <div class="home">
        <Hero/>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Hero from "@/components/Hero.vue";

@Component({
    components: {
        Hero
    }
})
export default class Home extends Vue {
    mounted(): void {}
}
</script>
