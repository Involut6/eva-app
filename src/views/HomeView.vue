<script setup>
import SideBar from '../components/SideBar.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <div class="h-screen relative">
    <div class="relative">
      <Navbar class="fixed top-0" />
    </div>
    <div class="lg:flex min-h-screen">
      <div class="relative">
        <SideBar class="w-[23vw]" />
      </div>
      <div class="w-screen h-fit lg:w-[77vw] pt-16 lg:ml-[23vw] bg-[whitesmoke] overflow-y-scroll">
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </div>
</template>