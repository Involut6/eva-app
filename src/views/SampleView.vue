<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            showSample: false,
            id: ''
        }
    },
    methods: {
        proceed() {this.$router.push('/client/samples')}
    }
})
</script>

<template>
    <div class="h-screen w-screen flex items-center lg:bg-gray-300">
        <div class="w-fit h-fit mx-auto  flex md:shadow-2xl">
        <div class="hidden lg:block relative h-[520px] w-[500px] bg-black rounded-s-[15px] overflow-hidden">
          <div class="w-full h-full bg-black opacity-60 absolute">
            <img src="../assets/Kinetic-Labs-access-to-lab-space-and-facilities.jpg" alt="" class="w-full h-full">
          </div>
          <div class="absolute  bottom-[8%] text-center">
            <h1 class="font-semibold text-[30px] font-[700] text-white">Welcome to EnvAccord</h1>
            <p class="font-semibold text-2xl text-white">We are a leading provider of specialised environmental and sustainability risk management advisory services in Africa.</p></div> 
        </div>

        <div class="bg-[white] md:h-[520px] md:w-[500px] rounded-e-[15px] pt-[50px] px-4 md:px-[100px] text-center">
         <div class="border border-black border-1 w-fit mx-auto rounded-full p-[7px] bg-gray-100 mb-[10px]"> <img src="../assets/download-removebg-preview.png" alt="" class="w-[80px] "></div>
         <div class="">
         <p class="text-xl font-semibold py-3">Enter Sample ID</p>
         <p class="text-sm">Enter the sample Id to check the status and result of your sample</p>
         <label class="flex justify-start mt-[20px]">Sample ID</label>
         <input placeholder="Enter sample Id" class="block focus:outline-none w-full px-3 py-2 border mt-2 mb-4 rounded-lg" v-model="id" />
         <button @click="proceed" :class="id === '' ? 'bg-[#0000fe]' : 'bg-gray-300'" class="font-medium text-white p-2 rounded-lg mt-4 w-full text-center">View Sample</button>
        </div>
        </div>
      </div>
    </div>
</template>

<style>
table, th, td {
  border: 1px solid;
}
</style>