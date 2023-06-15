<script>
import { defineComponent } from 'vue';
import useSampleStore from '../stores/sample';


export default defineComponent({
    mounted() {
        this.details = useSampleStore().$state.client
        console.log(this.details)
    },
    data() {
        return {
            isDeleteModal: false,
            isEditModal: false,
            details: {},
            drop: false,
            analysis: useSampleStore().$state.analysis,
            singleSample: {},
            isAddModal: false
        }
    },
    methods: {
        dropDown(id) {
            this.drop = id
        },
        getSingleSample(sample) {
            this.isEditModal = true
            this.singleSample = sample
        }
    }
})

</script>

<template>

    <div class="container mx-auto min-h-screen w-full">

        <div class="px-4 md:px-8 pt-4 md:pt-8 flex space-x-2 items-center">
            <router-link to="/" class="text-[#0000fe]">Home</router-link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"/></svg>
            <p>Client Details</p>
        </div>
        <div class="w-full h-fit md:px-[30px] px-4 pt-4 pb-[100px] lg:pb-4">
            <div class="bg-white md:px-[30px] px-4 py-5 space-y-4">
                <div class="md:flex justify-between border-b py-4">
                    <p class="text-lg font-semibold">{{ details.clientName }}</p>
                    <p class="">Date created: {{ details.dateReceived }}</p>
                </div>
                <div class="flex justify-between max-[375px]:flex-col items-center gap-3">
                    <p class="font-semibold">Sample list</p>
                    <button @click="isAddModal = true" class="bg-black text-white px-4 py-[10px] font-[600] rounded-lg">Add Sample</button>
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
                        <tr class="text-center h-[7vh] border border-gray-300" :class="details.samples.indexOf(row) % 2 === 0 ? 'bg-gray-100' : 'bg-white'" v-for="row in details.samples" :key="row.id">
                            <td>{{ row.sampleType }}</td>
                            <td>{{ details.samples.indexOf(row) + 1 }}</td>
                            <td>{{ row.dateReceived }}</td>
                            <td>{{ row.sampleStatus }}</td>
                            <td>{{ row.listOfAnalysis.length }}</td>
                            <td>
                                <div class="flex space-x-4 items-center justify-center">

                                    <div @click="getSingleSample(row)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0000fe] cursor-pointer active:text-red" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2L17.875 1.9L22.1 6.125l-2.8 2.8ZM3 21v-4.25l10.6-10.6l4.25 4.25L7.25 21H3Z"/></svg>
                                    </div>
                                    <div @click="isDeleteModal = true">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="delete-icon text-red-600 cursor-pointer" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7Zm2-5q0 .425.288.713T10 17q.425 0 .713-.288T11 16V9q0-.425-.288-.713T10 8q-.425 0-.713.288T9 9v7Zm4 0q0 .425.288.713T14 17q.425 0 .713-.288T15 16V9q0-.425-.288-.713T14 8q-.425 0-.713.288T13 9v7Z"/></svg>
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

    <Teleport to="body">
        <div @click.self="isDeleteModal = false" v-if="isDeleteModal" class="fixed top-0 left-0 h-screen w-screen z-20 flex justify-center items-center bg-opacity-75 bg-black">
        <div class="z-30 bg-white w-[343px] lg:w-[450px] h-fit rounded-lg shadow-lg p-5">
            <p class="text-xl font-semibold">Delete Sample</p>
            <p class="w-full">Are you sure you want to delete this sample?</p>
            <div class="flex space-x-3 mt-8 w-fit ml-auto mr-0">
                <button class="bg-red-600 text-white px-3 py-2 rounded-lg font-medium">Delete</button>
                <button class="bg-[#0000fe] text-white px-3 py-2 rounded-lg font-medium" @click="isDeleteModal = false">Cancel</button>
            </div>
        </div>
    </div>
    </Teleport>
    <!-- Edit modal -->
    <Teleport to="body">
    <div @click.self="isEditModal = false" v-if="isEditModal" class="fixed top-0 left-0 h-screen w-screen z-40 flex justify-center items-center bg-opacity-75 bg-black">
        <div class="my-[20px] bg-[white] py-[10px] shadow-xl">
            <div class="px-6 py-5 border-b flex justify-between ">
                <h1 class="font-[600] text-[18px]">Edit</h1>
            </div>
            <div class="px-6 py-[20px]">
                <div class="flex space-x-4 items-center">
                    <div class="space-y-1">
                        <p>Sample name</p>
                        <input type="text" v-model="singleSample.sampleType" class="focus:outline-none px-3 py-1 border rounded w-[250px]">
                    </div>
                    <div class="py-[10px]">
                        <h1>Sample status</h1>
                        <select v-model="singleSample.sampleStatus" class="border focus:outline-none border-solid border-gray-300 border-1 p-[5px] rounded-[5px]">
                            <option disabled value="">Status</option>
                            <option>Received</option>
                            <option>Preparation</option>
                            <option>Analysis in progress</option>
                            <option>Analysis Completed</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p>List of Analysis</p>
                    <div v-for="item in singleSample.listOfAnalysis" :key="item" class="flex mt-2 space-x-8 items-center">
                        <p class="">{{ item.name }}</p>
                        <div class="flex items-center space-x-2 px-2 py-[6px] rounded-full bg-[#99ff00] text-[#0000fe]">
                            <p class="text-sm font-medium">{{ item.status }}</p>
                            <svg v-if="item.status === 'In progress'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2M4.26 5.67A9.885 9.885 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9L4.26 5.67M2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4.06 13h-2m5.04 5.37l-1.43 1.37A9.994 9.994 0 0 0 11 22v-2a8.002 8.002 0 0 1-3.9-1.63M12.5 7v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"/></svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2M4.26 5.67A9.885 9.885 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9L4.26 5.67M15.5 8.5l-4.88 4.88l-2.12-2.12l-1.06 1.06l3.18 3.18l5.94-5.94L15.5 8.5M2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4.06 13h-2m5.04 5.37l-1.43 1.37A9.994 9.994 0 0 0 11 22v-2a8.002 8.002 0 0 1-3.9-1.63Z"/></svg>
                        </div>
                    </div>
                </div>
                <div class="flex gap-8 items-end">
                  <div class="relative mt-4">
                    <h1 class="">Add Analysis</h1>
                    <div @click="() => drop = !drop" class="flex w-[200px] items-center justify-between py-1 pl-3 rounded border border-gray-300 w-[200px]">
                        <p class="">Analysis</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414L12 15.001Z"/></svg>
                    </div>
                    <div v-if="drop" class="absolute top-[80px] left-0 z-10 bg-white w-fit h-[250px] py-2 shadow rounded-lg px-[10px] space-y-2 border-1 sm:w-fit overflow-y-scroll">
                        <div v-for="item in analysis" class="flex w-full justify-between items-center">
                            <div class="flex gap-[5px] justify-start item-center ">
                                <input type="checkbox" :id="item.title" :value="item" v-model="selectedAnalysis">
                                <label :for="item.title" class="w-fit">{{item.title}}</label>
                            </div>
                        </div>
                    </div>
                  </div> 

                  <div class="flex w-full border border-gray-300 items-center h-[40px] overflow-hidden rounded-[20px] pl-[10px]">
                    <input type="text" placeholder="Update result" class="outline-none">
                    <div>
                    <svg class="bg-black h-fit w-fit p-2 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M7.4 10h1.59v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.7 3.7a.996.996 0 0 0-1.41 0L6.7 8.29c-.63.63-.19 1.71.7 1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"/></svg>
                    </div>
                  </div>
                    
                </div>

                <button class="px-3 py-1 rounded-lg bg-black text-white font-semibold mt-3">Save</button>
            </div>
        </div>
            
        
    </div>  

    </Teleport> 

    <Teleport to="body">
    <div @click.self="isAddModal = false" v-if="isAddModal" class="fixed top-0 left-0 h-screen w-screen z-40 flex justify-center items-center bg-opacity-75 bg-black">
        <div class="my-[20px] bg-[white] py-[10px] shadow-xl">
            <div class="px-6 py-5 border-b flex justify-between ">
                <h1 class="font-[600] text-[18px]">Add Sample</h1>
            </div>
            <div class="px-6 py-[20px]">
                <div class="flex space-x-4 items-center">
                    <div class="space-y-1">
                        <p>Sample name</p>
                        <input type="text" v-model="singleSample.sampleType" class="focus:outline-none px-3 py-1 border rounded w-[250px]">
                    </div>
                    <div class="py-[10px]">
                        <h1>Sample status</h1>
                        <select v-model="singleSample.sampleStatus" class="border focus:outline-none border-solid border-gray-300 border-1 p-[5px] rounded-[5px]">
                            <option disabled value="">Status</option>
                            <option>Received</option>
                            <option>Preparation</option>
                            <option>Analysis in progress</option>
                            <option>Analysis Completed</option>
                        </select>
                    </div>
                </div>
                <div class="flex gap-8 items-end">
                  <div class="relative mt-4">
                    <h1 class="">Add Analysis</h1>
                    <div @click="() => drop = !drop" class="flex w-[200px] items-center justify-between py-1 pl-3 rounded border border-gray-300 w-[200px]">
                        <p class="">Analysis</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414L12 15.001Z"/></svg>
                    </div>
                    <div v-if="drop" class="absolute top-[80px] left-0 z-10 bg-white w-fit h-[250px] py-2 shadow rounded-lg px-[10px] space-y-2 border-1 sm:w-fit overflow-y-scroll">
                        <div v-for="item in analysis" class="flex w-full justify-between items-center">
                            <div class="flex gap-[5px] justify-start item-center ">
                                <input type="checkbox" :id="item.title" :value="item" v-model="selectedAnalysis">
                                <label :for="item.title" class="w-fit">{{item.title}}</label>
                            </div>
                        </div>
                    </div>
                  </div>
                    
                </div>

                <button class="px-3 py-1 rounded-lg bg-black text-white font-semibold mt-3">Save</button>
            </div>
        </div>
            
        
    </div>  

    </Teleport> 


</template>
