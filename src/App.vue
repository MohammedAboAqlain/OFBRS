<template>
    <div class="container">
        <app-header></app-header>
        <div class="row mx-0">
            <div class="col-12 px-0">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/header.vue'
    export default {
        data(){
            return {
                // selectedComponent: 'appHome'
            }
        },
        components: {
            appHeader: Header
        }
    }
</script>

<style>
    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }
</style>
