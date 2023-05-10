<script setup>
import SideBar from '../components/SideBar.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <div class="h-screen overflow-hidden">
    <div class="lg:flex min-h-screen">
      <SideBar class="w-[23vw]" />
      <div class="w-screen lg:w-[77vw] bg-[whitesmoke] overflow-y-scroll">
        <Navbar class="shadow" />
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </div>
</template>