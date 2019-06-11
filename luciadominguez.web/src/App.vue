<template>
    <div id="app">
        <Navbar/>
        <router-view/>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";

@Component({
    components: {
        Navbar
    }
})
export default class App extends Vue {
    mounted(): void {
        this.$store.dispatch("albums/load");
        this.$store.dispatch("photos/load");
        this.$store.dispatch("tags/load");
    }
}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";
@import "@/styles/index.scss";

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
