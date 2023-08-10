<script>

import { defineComponent } from 'vue';
import { useSampleStore } from '../stores/sample';

export default defineComponent({
    data() {
        return {
            client: useSampleStore().$state.clients[4],
            isSampleModal: false,
            sampleData: {},
            isFeedback: false
        }
    },
    methods: {
        singleSample(data) {
            this.isSampleModal = true
            this.sampleData = data
        }
    }
})
</script>
<template>
    <div>
        <div class="sticky top-0 z-10 bg-white w-full py-3 flex items-center justify-between px-[50px] border-b">
            <div class="flex space-x-3 items-center">
                <img class="h-[50px]" src="../assets/svg-rev-01.png" alt="">
            </div>
            <div class="flex gap-8 items-center">
                <div @click="isFeedback = true" class="flex gap-1 cursor-pointer">
                    <svg class="text-[#0000fe]" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                        viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l8.59 3.43L19.59 11L21 12.41l-6.37 6.37l3.44 8.59A1 1 0 0 0 19 28a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05Z" />
                    </svg>
                    <p href="#" class="hidden md:block text-[#0000fe] font-semibold">Send Feedback</p>
                </div>
            </div>

        </div>
        <div class="container mx-auto min-h-screen w-full">
            <div class="w-full h-fit md:px-[50px] px-4 pb-[100px] lg:pb-4 mt-10">
                <div class="bg-white md:px-[30px] px-4 py-5 space-y-4">
                    <div class="flex justify-between border-b py-4">
                        <p class="text-lg font-bold">Mr. Anjorin</p>
                        <p class="text-xl font-bold">Id: Anjb01</p>
                    </div>
                    <div>
                        <p class="font-semibold">Sample list</p>
                    </div>
                </div>
                <div class="bg-white w-full shadow-xl pb-9 overflow-x-scroll">
                    <div class="space-y-5">
                        <div class="relative min-w-[700px]">
                            <table class="w-full bg-gray-100">
                                <thead class="text-white bg-[#0000fe] h-[8vh]">
                                    <th>Title</th>
                                    <th>Id</th>
                                    <th>Date created</th>
                                    <th>Status</th>
                                    <th>Analysis</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                    <tr class="text-center h-[7vh] border border-gray-300"
                                        :class="client.samples.indexOf(row) % 2 === 0 ? 'bg-gray-100' : 'bg-white'"
                                        v-for="row in client.samples" :key="row.id">
                                        <td>{{ row.sampleType }}</td>
                                        <td>{{ client.samples.indexOf(row) + 1 }}</td>
                                        <td>{{ row.dateReceived }}</td>
                                        <td>{{ row.sampleStatus }}</td>
                                        <td>{{ row.listOfAnalysis.length }}</td>
                                        <td>
                                            <div class="flex space-x-4 items-center justify-center">
                                                <div @click="singleSample(row)">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="text-[#0000fe] cursor-pointer" width="25" height="25"
                                                        viewBox="0 0 24 24">
                                                        <path fill="currentColor"
                                                            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z" />
                                                    </svg>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Modals -->


<div @click.self="isSampleModal = false"  v-if="isSampleModal" class="h-screen w-screen fixed top-0 left-0 flex justify-center z-10 items-center bg-opacity-60 bg-black">
        <div class="p-5 rounded-lg bg-white w-[550px]">
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
                    <p class="">{{ sampleData.sampleType }}</p>
                </div>
                
                <div class="">
                    <p class="font-semibold">Status</p>
                    <div class="flex space-x-2">
                        <p class="">{{sampleData.sampleStatus}}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#0000fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M20 13V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H14"/><path d="M16 2v3.4a.6.6 0 0 0 .6.6H20m-4 13h6m0 0l-3-3m3 3l-3 3"/></g></svg>
                    </div>
                </div>
            </div>

            <div class="mt-4">
                <p class="mb-2 font-semibold">Analysis</p>                
                <div class="flex space-x-6">
                    <div v-for="item in sampleData.listOfAnalysis.length" class="flex space-x-2">
                        <p>Temperature</p>
                        <div class="flex items-center space-x-2">
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
        </div>
    </div>
    <div @click.self="isFeedback = false"  v-if="isFeedback" class="h-screen w-screen fixed top-0 left-0 flex justify-center z-10 items-center bg-opacity-60 bg-black">
        <div class="container mx-auto p-5 rounded-lg bg-white w-full md:w-[90vw] lg:w-[800px] relative z-80 h-[90vh] lg:h-fit overflow-scroll">
           <div class="flex justify-between md:justify-end">
            <svg class="md:hidden" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"/></svg>
            <img src="../assets/svg-rev-01.png" alt="" class="h-[90px] ">
        </div> 
          <div class="md:px-[60px]">
             <p class="text-xl font-bold py-3">Customer Satisfaction Survey</p>
             
             <p class="text font-semibold py-3">Overall level of satisfaction.</p>
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
             <textarea rows="6" type="text" class="w-full my-2 border border-black p-2 rounded-lg" />
          </div>
          <div class="flex justify-end items-end  mt-[15px] px-[30px]">
                <button class="bg-black text-white px-[35px] py-[10px] font-[600] rounded-lg">Submit</button>
               </div>
        </div>
    </div>
</template>