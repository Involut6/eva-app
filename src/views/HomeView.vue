<script setup>
import SideBar from '../components/SideBar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <div class="flex min-h-screen">
      <SideBar class="w-[23vw]" />
      <div class="w-[77vw]">
        <router-view></router-view>
      </div>
    </div>
</template>