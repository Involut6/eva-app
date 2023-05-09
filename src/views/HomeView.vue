<script setup>
import SideBar from '../components/SideBar.vue';
</script>

<template>
    <div class="flex">
      <SideBar />
      <router-view></router-view>
    </div>
</template>