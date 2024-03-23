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
        <div class="bg-white px-8 md:px-16 py-8 mx-auto">
    <div class="md:grid grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-16 md:space-y-0 space-y-4 w-full justify-between items-start">
      <div class="">
        <img src="../assets/enva-logo.png" class="w-32" />
        <div class="flex space-x-4 text-[#0000ff] w-full mt-4">
          <a href="https://www.facebook.com/EnvAccordLtd" class="block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
            </svg>
          </a>
          <a href="https://twitter.com/EnvAccord" class="block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/envaccordng" class="block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 16">
              <path fill="currentColor"
                d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599c.28.28.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233c0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92c.28-.28.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
          <a href="https://ng.linkedin.com/company/environmental-accord-nigeria-limited?_l=en_US" class="block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M4.001 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm1 2v14h14V5h-14Zm2.5 4a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm-1 1h2v7.5h-2V10Zm5.5.43c.584-.565 1.266-.93 2-.93c2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 1 0-3.5 0v4.25h-2V10h2v.43Z" />
            </svg>
          </a>
        </div>
      </div>
      <div class="space-y-3">
        <a href="https://www.envaccord.com/about-us-2/" class="block text-[#0000ff]">About us</a>
        <a href="https://www.envaccord.com/services-2/" class="block text-[#0000ff]">Services</a>
        <a href="https://www.envaccord.com/careers/" class="block text-[#0000ff]">Careers</a>
        <a href="https://www.envaccord.com/careers/" class="block text-[#0000ff]">Contact us</a>
      </div>
      <div class="space-y-3 col-span-2">
        <div>
          <p class="text-[#0000ff] font-bold">Address:</p>
          <p>36B Oguntona Crescent, Gbagada Phase 1, Lagos State, Nigeria.</p>
        </div>
        <div>
          <p class="text-[#0000ff] font-bold">Email: <span class="font-normal text-black">lab@envaccord.com</span></p>
        </div>
        <div>
          <p class="text-[#0000ff] font-bold">Phone: <span class="font-normal text-black text-sm">+2348023609591, +2348136363762</span></p>
        </div>
      </div>
      <div class="space-y-3 col-span-2">
        <p class="text-[#0000ff] font-bold">Our Vision</p>
        <p>To be the preferred environmental and sustainability risk management advisor in Africa.</p>
      </div>
      <div class="space-y-3 col-span-2">
        <p class="text-[#0000ff] font-bold">Our Mision</p>
        <p>We provide superior sustainability solutions, helping to build long term value for our clients and assuring the
          confidence of our stakeholders.</p>
      </div>
    </div>
    <div class="flex text-xs w-full mt-8 text-center items-center justify-center gap-3">
      <p class="">Copyright © 2023 - Dervac - All Right Reserved.</p>
      <p class="">Version 1.0</p>
    </div>
  </div>
      </div>
      <Footer />
    </div>
  </div>
</template>