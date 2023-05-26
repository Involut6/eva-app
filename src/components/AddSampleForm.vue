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
const sample = ref(1)

</script>

<template>
    <div class="container mx-auto h-min-screen w-full">
        <div class="w-[100%] h-[100vh] p-4 md:p-[30px] mb-[150px]">
             <div class="flex space-x-2 items-center">
                <router-link to="/"><p class="text-[#0000fe]">Home</p></router-link>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"/></svg>
                <p>Add Clients</p>
             </div>
            <div class="my-[20px] bg-[white] py-[10px] shadow-xl">
                <div class="py-[20px] border-b flex justify-between md:px-[30px] px-4">
                    <h1 class="font-[600] text-[18px]">Add Client</h1>
                </div>
                <section class="px-4 md:px-[30px] py-[20px]">
                    <div class="grid w-full gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      <div class="w-full">
                        <h1 class="text-lg font-[400]">Client Name</h1>
                        <input class="w-full border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" type="text" placeholder="Enter client Name">
                      </div>

                      <div class="">
                        <h1 class="text-lg font-[400]">Type of project</h1>
                        <input class="w-full border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" type="text" placeholder="Project type">
                      </div>
                      <div class="">
                        <h1 class="text-lg font-[400]">Date Received</h1>
                        <input class="w-full border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" type="date" placeholder="Project type">
                      </div>
                      <div class="">
                        <h1 class="text-lg font-[400]">Sample Type</h1>
                        <input class="w-full border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" v-model="newSample.title" type="text">
                    </div>
                    <div class="">
                        <h1 class="text-lg font-[400]">Sample status</h1>
                        <select class="border w-full focus:outline-none border-solid border-gray-300 border-1 p-2 pr-2 rounded-[5px]" v-model="newSample.status">
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
                    <section class="relative">
                        <h1 class="text-lg font-[400]">List of Analysis</h1>
                        <div @click="() => drop = !drop" class="flex w-full items-center justify-between py-1 pl-3 rounded border border-gray-300 w-[200px]">
                            <p class="">Analysis</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414L12 15.001Z"/></svg>
                        </div>
                        <div v-if="drop" class="absolute top-[80px] left-0 z-10 bg-white w-fit h-[250px] py-2 shadow rounded-lg px-[10px] space-y-2 border-1 sm:w-fit overflow-y-scroll">
                            <div v-for="item in analysis" class="flex w-full justify-between items-center">
                                <div class="flex gap-[5px] justify-start item-center ">
                                    <input type="checkbox" :id="item.title" :value="item" v-model="selectedAnalysis">
                                    <label :for="item.title" class="w-fit">{{item.title}}</label>
                                </div>
                                <select class="focus:outline-none" v-model="item.status">
                                    <option value="" disabled>Status</option>
                                    <option v-for="option in item.analysisStatus" :value="option">{{ option }}</option>
                                </select>
                            </div>
                         </div>
                    </section>
                </div>
            </section>
                <!-- <div class="flex justify-start items-end w-fit  my-[15px] px-[30px] mr-0 ml-auto">
                    <button class="bg-black text-white px-[35px] py-[10px] font-[600] rounded-lg">Add more</button>
               </div> -->
            <div class="flex justify-start items-end  my-[15px] px-[30px]">
                <button class="bg-black text-white px-[35px] py-[10px] font-[600] rounded-lg">Add Client</button>
               </div>
            </div>
        
        
        </div>
    </div>
    <div v-if="drop" @click="drop = false" class="w-[79vw] h-screen z-1 absolute top-0 left-0"></div>
</template>

<style scoped></style>