<script setup>
import SideBar from '../components/SideBar.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <div class="relative h-screen">
    <div class="min-h-screen">
      <SideBar class="w-[23vw] fixed top-0 left-0 z-10" />
      <div class="relative w-screen lg:w-[77vw] lg:ml-[23vw] bg-[whitesmoke] pb-10">
        <Navbar class="shadow" />
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </div>
</template>