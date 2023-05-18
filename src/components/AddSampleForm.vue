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


function addSample() {
    samples.value.push(newSample)
}

</script>

<template>
    <div class="container mx-auto h-min-screen w-full" id="creating-sample">
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
                    <div class="sm:flex gap-[10%] ">
                      <div class="py-[10px] sm:py-[20px]">
                        <h1 class="text-[20px] font-[400]">Client Name</h1>
                        <input class="w-[230px] md:w-[300px] lg:w-[400px] border  border-solid border-gray-300 border-1 p-[4px] rounded-[5px] focus:outline-none" type="text" placeholder="Enter client Name">
                      </div>

                      <div class="py-[10px] sm:py-[20px]">
                        <h1 class="text-[20px] font-[400]">Type of project</h1>
                        <input class="w-[230px] md:w-[300px] lg:w-[400px] border  border-solid border-gray-300 border-1 p-[4px] rounded-[5px] focus:outline-none" type="text" placeholder="Type of project">
                      </div>
                    </div>
                    <div class="sm:flex gap-[10%] ">
                <div class="py-[10px]">
                    <h1 class="text-[20px] font-[400]">Sample Type</h1>
                    <input class="w-[230px] md:w-[300px] lg:w-[400px] border  border-solid border-gray-300 border-1 p-[4px] rounded-[5px] focus:outline-none" v-model="newSample.title" type="text">
                </div>
                <div class="py-[10px]">
                    <h1 class="text-[20px] font-[400]">Sample status</h1>
                    <select class="border focus:outline-none border-solid border-gray-300 border-1 p-[5px] rounded-[5px]" v-model="newSample.status">
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
                
               <section class=" w-[300px] ">
                <h1 class="text-[20px] font-[400] pt-[10px]">List of Analysis</h1>
               <div class="relative w-fit h-[250px] py-2 shadow rounded-lg px-[10px] space-y-2 border-1 sm:w-fit overflow-y-scroll">
                    <div v-for="item in analysis" class="relative flex w-full justify-between items-center">
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