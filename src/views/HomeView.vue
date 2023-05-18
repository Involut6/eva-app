<script setup>
import SideBar from '../components/SideBar.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <div class="relative h-screen">
    <div class="min-h-screen">
      <Navbar class="shadow" />
      <SideBar class="w-[20%] fixed top-[70px] left-0 z-1" />
      <div class="relative w-screen lg:w-[80%] lg:ml-[20%] bg-[#E8EBFC] pb-10">
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </div>
</template>