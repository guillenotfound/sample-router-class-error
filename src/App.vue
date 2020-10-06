<template>
    <router-link to="/">home</router-link>
    <router-link to="/second">second</router-link>
    <!-- annoying here -->
    <router-view class="home" name="home"></router-view>
    <!-- annoying there -->
    <router-view class="sidebar" name="sidebar"></router-view>
    <router-view class="main class"></router-view>
</template>

<script>
export default {
    name: "App",
};
</script>
