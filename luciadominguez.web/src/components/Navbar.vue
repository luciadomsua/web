<template>
    <div id="navbar-container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item" href="https://bulma.io">
                    <img src="@/assets/logo.svg" width="200" height="50">
                </router-link>

                <a
                    role="button"
                    class="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <router-link to="/" class="navbar-item">Home</router-link>

                    <router-link to="gallery" class="navbar-item">Gallery</router-link>

                    <router-link to="about" class="navbar-item">About</router-link>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">More</a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">About</a>
                            <a class="navbar-item">Jobs</a>
                            <a class="navbar-item">Contact</a>
                            <hr class="navbar-divider">
                            <a class="navbar-item">Report an issue</a>
                        </div>
                    </div>
                </div>

                <!-- <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">Log in</a>
                        </div>
                    </div>
                </div>-->
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
    mounted(): void {}
}
</script>

<style lang="scss">
@import "@/styles/defines.scss";

#navbar-container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-color: $primary;

    nav {
        width: 100%;
        max-width: $maxWidth;
        background-color: $primary;
        height: 4rem;

        .navbar-item img {
            max-height: 3rem;
        }
    }

    .navbar-link:not(.is-arrowless)::after {
        border-color: #8d555b;
    }
}
</style>
