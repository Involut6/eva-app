<script setup>
import { storeToRefs } from 'pinia';
import useSampleStore from '../stores/sample';
import { ref } from 'vue';

const { analysis, selectedAnalysis, samples } = storeToRefs(useSampleStore());

const newSample = ref({
    title: '',
    status: '',
    sampleAnalysis: selectedAnalysis
})

const drop = ref(false);

function addSample() {
    samples.value.push(newSample)
}

</script>

<template>
    <div class="container mx-auto h-min-screen w-full">
        <div class="w-[100%] h-[100vh] p-[30px]">
             <div class="flex space-x-2 items-center">
                <p>Home</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"/></svg>
                <p class="text-[#0000fe]">Add samples</p>
             </div>
            <div class="my-[20px] bg-[white] py-[10px] shadow-xl">
                <div class="py-[20px] border-b flex justify-between px-[30px] ">
                    <h1 class="font-[600] text-[18px]">Add Sample</h1>
                </div>
                <section class="px-[30px] py-[20px]">
                    <div class="md:flex gap-12">
                      <div class="py-[10px] sm:py-[20px]">
                        <h1 class="text-lg font-[400]">Client Name</h1>
                        <input class="w-[300px] border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" type="text" placeholder="Enter client Name">
                      </div>

                      <div class="py-[10px] sm:py-[20px]">
                        <h1 class="text-lg font-[400]">Type of project</h1>
                        <input class="w-[300px] border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" type="text" placeholder="Type of project">
                      </div>
                    </div>
                    <div class="md:flex gap-12">
                <div class="py-[10px]">
                    <h1 class="text-lg font-[400]">Sample Type</h1>
                    <input class="w-[300px] border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" v-model="newSample.title" type="text">
                </div>
                <div class="py-[10px]">
                    <h1 class="text-lg font-[400]">Sample status</h1>
                    <select class="border w-[300px] focus:outline-none border-solid border-gray-300 border-1 p-2 pr-2 rounded-[5px]" v-model="newSample.status">
                        <option disabled value="">Status</option>
                        <option>Received</option>
                        <option>Analysis in progress</option>
                        <option>Analysis Completed</option>
                        <option>QA/QC in progress</option>
                        <option>Sample preparation in progress</option>
                        <option>QA/QC in completed</option>
                        <option>Result ready to download</option>
                    </select>
                </div>
               </div>
                
               <section class="relative">
                <h1 class="text-lg font-[400] pt-[10px]">List of Analysis</h1>
                <div @click="() => drop = !drop" class="flex w-[300px] items-center justify-between py-2 pl-3 rounded-lg border w-[200px]">
                    <p class="">Analysis</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414L12 15.001Z"/></svg>
                </div>
                <div v-if="drop" class="absolute top-[100px] left-0 bg-white w-fit h-[250px] py-2 shadow rounded-lg px-[10px] space-y-2 border-1 sm:w-fit overflow-y-scroll">
                    <div v-for="item in analysis" class="flex w-full justify-between items-center">
                        <div class="flex gap-[5px] justify-start item-center ">
                            <input type="checkbox" :value="item" v-model="selectedAnalysis">
                            <p class="w-fit">{{item.title}}</p>
                        </div>
                        <select class="focus:outline-none" v-model="item.status">
                            <option value="" disabled>Status</option>
                            <option v-for="option in item.analysisStatus" :value="option">{{ option }}</option>
                        </select>
                    </div>
                 </div>
               </section>
               
               <div class="flex justify-end items-end  my-[15px]">
                <button @click="addSample" class="bg-black text-white px-[35px] py-[10px] font-[600] rounded-lg">Upload</button>
               </div>  
                </section>


                <div class="flex justify-start items-end  my-[15px] px-[30px]">
                <button class="bg-black text-white px-[35px] py-[10px] font-[600] rounded-lg">Add Sample</button>
               </div>
            </div>
        
        
        </div>
    </div>

</template>

<style scoped></style>