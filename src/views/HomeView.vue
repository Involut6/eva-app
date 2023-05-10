<script setup>
import SideBar from '../components/SideBar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <div class="flex">
      <SideBar />
      <router-view></router-view>
      <Footer l/>
    </div>
</template>