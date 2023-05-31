<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            showSample: false,
            id: ''
        }
    }
})
</script>

<template>
    <div class="h-screen w-screen flex items-center bg-gray-300">
        <div class=" w-fit h-fit mx-auto  flex shadow-2xl">
        <div class="hidden md:block relative h-[520px] w-[500px] bg-black rounded-s-[15px] overflow-hidden">
          <div class="w-full h-full bg-black opacity-60 absolute">
            <img src="../assets/Kinetic-Labs-access-to-lab-space-and-facilities.jpg" alt="" class="w-full h-full">
          </div>
          <div class="absolute  bottom-[8%] text-center">
            <h1 class="font-semibold text-[30px] font-[700] text-white">Welcome to EnvAccord</h1>
            <p class="font-semibold text-2xl text-white">We are a leading provider of specialised environmental and sustainability risk management advisory services in Africa.</p></div> 
        </div>

        <div class="bg-[white] h-[520px] w-[500px] rounded-e-[15px] pt-[50px] px-[100px] text-center">
         <div class="border border-black border-1 w-fit mx-auto rounded-full p-[7px] bg-gray-100 mb-[10px]"> <img src="../assets/download-removebg-preview.png" alt="" class="w-[80px] "></div>
         <div class="">
         <p class="text-xl font-semibold py-3">Enter Sample ID</p>
         <p class="text-sm">Enter the sample Id to check the status and result of your sample</p>
         <label class="flex justify-start mt-[20px]">Sample ID</label>
         <input placeholder="Enter sample Id" class="block focus:outline-none w-full px-3 py-2 border mt-2 mb-4 rounded-lg" v-model="id" />
         <button @click="() => showSample = true" :class="id === '' ? 'bg-[#0000fe]' : 'bg-gray-300'" class="font-medium text-white p-2 rounded-lg mt-4 w-full text-center">View Sample</button>
        </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div @click.self="showSample = false"  v-if="showSample" class="h-screen w-screen fixed top-0 left-0 flex justify-center items-center bg-opacity-60 bg-black">
        <!-- <div class="p-5 rounded-lg bg-white w-[550px]">
            <div class="w-full flex justify-between">
                <div>
                    <p class="text-2xl font-semibold">Sample Information</p>
                    <p class="">View the Information of your sample</p>
                </div>
                <div @click="showSample = false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
                </div>
            </div>

            <div class="content">

            <div class="flex space-x-8 mt-5">
                <div class="">
                    <p class="font-semibold">Title</p>
                    <p class="">Blood Sample</p>
                </div>
                
                <div class="">
                    <p class="font-semibold">Status</p>
                    <div class="flex space-x-2">
                        <p class="">Received</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#0000fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M20 13V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H14"/><path d="M16 2v3.4a.6.6 0 0 0 .6.6H20m-4 13h6m0 0l-3-3m3 3l-3 3"/></g></svg>
                    </div>
                </div>
            </div>

            <div class="mt-4">
                <p class="mb-2 font-semibold">Analysis</p>                
                <div class="flex space-x-6">
                    <div class="flex space-x-2">
                        <p>pH</p>
                        <div class="flex items-center space-x-2">
                            <p>In progress</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><g fill="none" stroke="#0000fe" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13.5a6.5 6.5 0 1 1 6.21-8.41M13.5 7v.5"/><path stroke-dasharray=".889 1.778" d="M13.11 9.23a6.51 6.51 0 0 1-2.79 3.36"/><path d="m9.53 13l-.47.18"/></g></svg>
                        </div>
                    </div>
                    <div class="flex space-x-4">
                        <p>pH</p>
                        <div class="flex items-center space-x-4">
                            <p>In progress</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><g fill="none" stroke="#0000fe" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13.5a6.5 6.5 0 1 1 6.21-8.41M13.5 7v.5"/><path stroke-dasharray=".889 1.778" d="M13.11 9.23a6.51 6.51 0 0 1-2.79 3.36"/><path d="m9.53 13l-.47.18"/></g></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ml-auto mr-0 w-fit mt-5">
                <button class="px-3 py-2 rounded-lg bg-gray-300 text-white">Download Result</button>
            </div>
            </div>
        </div> -->
        <div class="p-5 rounded-lg bg-white w-[800px] relative z-80 h-[90vh] overflow-scroll">
           <div class="flex justify-between md:justify-end">
            <svg class="md:hidden" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"/></svg>
            <img src="../assets/svg-rev-01.png" alt="" class="h-[90px] ">
        </div> 
          <div class="px-[60px]">
             <p class="text-xl font-bold py-3">Customer Satisfaction Survey</p>
             <table class="py-2 w-full my-2">
                <tr>
                    <th class="text-left w-[30%] text-lg px-2">Client Name</th>
                    <th><input type="text" class="focus:outline-none w-full"></th>
                </tr>

                <tr>
                    <th class="text-left w-[30%] text-lg px-2">Project Title</th>
                    <th><input type="text" class="focus:outline-none w-full"></th>
                </tr>

                <tr>
                    <th class="text-left w-[30%] text-lg px-2">Client Contact</th>
                    <th><input type="text" class="focus:outline-none w-full"></th>
                </tr>

                <tr>
                    <th class="text-left w-[30%] text-lg px-2">Service Provided</th>
                    <th><input type="text" class="focus:outline-none w-full"></th>
                </tr>

                <tr>
                    <th class="text-left w-[30%] text-lg px-2">Date</th>
                    <th><input type="text" class="focus:outline-none w-full"></th>
                </tr>
             </table>
             <p class="text-xl font-bold py-3">Overall level of satisfaction.</p>
             <div class="mb-2">
                <p class="text-[17px]">1. What is your overall level of satisfaction with our laboratory services?</p>
                <div class="md:flex justify-between">
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Very pleased</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">pleased</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Adequate</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Dissatisfied</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Strongly dissatisfied</label>
                   </div>
                </div>
             </div>

             <div class="mb-2">
                <p class="text-[17px]">2. Will you use our service again?</p>
                <div class="md:flex gap-[7%]">
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Yes</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Maybe</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">NO</label>
                   </div>
                </div>
             </div>

             <div class="mb-2">
                <p class="text-[17px]">3. Did you receive value for the fees charged?</p>
                <div class="md:flex gap-[7%]">
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Yes</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Maybe</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">NO</label>
                   </div>
                </div>
             </div>
             <p class="text-[17px]">4. What can we do to serve you better?</p>
             <input type="text" class="w-full my-2 border border-black h-[50vh]">
          </div>
          <div class="flex justify-end items-end  my-[15px] px-[30px]">
                <button class="bg-black text-white px-[35px] py-[10px] font-[600] rounded-lg">Submit</button>
               </div>
        </div>
    </div>
</template>

<style>
table, th, td {
  border: 1px solid;
}
</style>