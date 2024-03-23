<script>
import { defineComponent } from 'vue';
import {useSampleStore} from '../stores/sample';
import { getSamples, postSample, deleteSample, editSample } from '../services/DataServices';
import * as XLSX from 'xlsx';


export default defineComponent({
    mounted() {
        this.isLoading = true
        this.details = useSampleStore().$state.client
        getSamples(this.$route.params.id).then((response) => {
            console.log(response)
            if (response.status === 200 || response.status === 201) {
                console.log(response.data.data.samples);
                this.samples = response.data.data.samples
            }
        }).catch(error => {
            console.log(error)
        }).finally(() => this.isLoading = false)
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
            isAddModal: false,
            samples: [],
            sampleName: '',
            sampleStatus: '',
            analysisName: '',
            analysisStatus: '',
            selected: [],
            sampleId: '',
            isLoading: false,
            alert: false,
            message: '',
            success: '',
            file: {},
            dateSampled: '',
            sampleId: '',
            sampleStatus: ''

        }
    },
    methods: {
        dropDown(id) {
            this.drop = id
        },
        getSingleSample(sample) {
            this.isEditModal = true
            this.singleSample = sample
        },
        async fetchSamples(id) {
            this.isLoading = true
            getSamples(id).then((response) => {
                this.samples = response.data.data.samples;
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                this.isLoading = false
                setTimeout(() => {
                    this.alert = false
                }, 1500);
            })
        },
        handleFileUpload(e){
           const selectedImage = e.target.files[0];
            
            this.file = selectedImage
        },
        postSample() {
            postSample({
                name: this.sampleName,
                status: this.sampleStatus,
                analyses: this.selected,
                date_sampled: this.dateSampled,
                sample_id: this.sampleId
            }, this.$route.params.id).then((response) => {
                if (response.status === 200 || response.status === 201) {
                    this.success = 'Success'
                    console.log(response.data)
                } else {
                    this.success = 'Error'
                }
            }).catch(error => {
                console.log(error)
                this.message = 'All fields are required!'
            }).finally(() => {
                this.isLoading = false
                this.message = 'Sample added successfully!'
                this.alert = true
                setTimeout(() => {
                    this.alert = false
                    this.isAddModal = false
                }, 1500);
            })
            this.fetchSamples(this.$route.params.id);
        },
        deleteModal(id) {
            this.isDeleteModal = true;
            this.sampleId = id
        },
        deleteRow() {
            this.isLoading = true
            deleteSample(this.$route.params.id, this.sampleId).then((response) => {
                console.log(response.data);
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                this.isLoading = false
                this.isDeleteModal = false
                useSampleStore().fetchSamples(this.$route.params.id);

            })
        },
        editSample(id) {
            const formData = new FormData()
            this.isLoading = true
            this.singleSample.analyses = [...this.singleSample.analyses, ...this.selected]
            console.log(typeof(this.singleSample.analyses))
            this.singleSample.analyses.forEach((analysis, index) => {
              formData.append(`analyses[${index}][name]`, analysis.name)
              formData.append(`analyses[${index}][status]`, analysis.status)
              formData.append(`analyses[${index}][id]`, analysis.id)
            })
            if (this.file.name) {
                formData.append('file', this.file)
            }
            // formData.append('analyses', this.singleSample.analyses)
            formData.append('status', this.singleSample.status)
            formData.append('name', this.singleSample.name)
            formData.append('date_sampled', this.singleSample.date_sampled)
            formData.append('sample_id', this.singleSample.sample_id)
            formData.append('_method', 'put')
            editSample(this.$route.params.id, id, formData).then((response) => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                this.success = 'Success'
                this.isLoading = false
                this.message = 'Sample updated successfully!'
                useSampleStore().fetchSamples(this.$route.params.id);
                this.alert = true
                setTimeout(() => {
                    this.alert = false
                    this.isEditModal = false
                }, 1500);
            })
        },
    }
})

</script>

<template>
    <div class="container mx-auto min-h-screen w-full">
        <div class="px-4 md:px-8 pt-4 md:pt-8 flex space-x-2 items-center">
            <router-link to="/admin" class="text-[#0000fe]">Home</router-link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"/></svg>
            <p>Client Details</p>
        </div>
        <div class="w-full h-fit md:px-[30px] px-4 pt-4 pb-[100px] lg:pb-4">
            <div class="bg-white md:px-[30px] px-4 py-5 space-y-4">
                <div class="md:flex justify-between border-b py-4">
                    <p class="text-lg font-semibold">{{ details.name }}</p>
                </div>
                <div class="flex justify-between max-[375px]:flex-col items-center gap-3">
                    <p class="font-semibold">Sample list</p>
                    <button @click="isAddModal = true" class="bg-black text-white px-4 py-[10px] font-[600] rounded-lg">Add Sample</button>
                </div>
            </div>  
        <div class="bg-white w-full shadow-xl pb-9 overflow-x-scroll">
            <div v-if="isLoading" class="space-y-8">
                <div class = "centered">
                  <div class = "blob-1"></div>
                  <div class = "blob-2"></div>
                </div>
            </div>
            <div v-else-if="samples.length > 0" class="space-y-5">
                <div class="relative min-w-[700px]">
                    <table class="w-full bg-gray-100">
                    <thead class="text-white px-4 text-left bg-[#0000fe] h-[8vh]">
                        <th class="w-[26%] pl-8">Sample Type</th>
                        <th class="w-[10%]">Sample Id</th>
                        <th class="w-[12%]">Date created</th>
                        <th class="w-[12%]">Date sampled</th>
                        <th class="w-[20%]">Status</th>
                        <th class="w-[10%]">Analysis</th>
                        <th class="w-[10%] pr-8">Action</th>
                    </thead>
                    <tbody>
                        <tr class="text-left h-[7vh] border border-gray-300" :class="samples?.indexOf(row) % 2 === 0 ? 'bg-gray-100' : 'bg-white'" v-for="row in samples" :key="row.id">
                            <td class="pl-8">{{ row.name }}</td>
                            <td>{{ row.sample_id }}</td>
                            <td>{{ row.created_date.substring(0, 10) }}</td>
                            <td>{{ row.date_sampled?.substring(0, 10) }}</td>
                            <td>{{ row.status }}</td>
                            <td>{{ row.analyses.length }}</td>
                            <td class="pr-8">
                                <div class="flex space-x-4 items-center justify-left">

                                    <div @click="getSingleSample(row)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0000fe] cursor-pointer active:text-red" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2L17.875 1.9L22.1 6.125l-2.8 2.8ZM3 21v-4.25l10.6-10.6l4.25 4.25L7.25 21H3Z"/></svg>
                                    </div>
                                    <div @click="deleteModal(row.id)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="delete-icon text-red-600 cursor-pointer" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7Zm2-5q0 .425.288.713T10 17q.425 0 .713-.288T11 16V9q0-.425-.288-.713T10 8q-.425 0-.713.288T9 9v7Zm4 0q0 .425.288.713T14 17q.425 0 .713-.288T15 16V9q0-.425-.288-.713T14 8q-.425 0-.713.288T13 9v7Z"/></svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div v-else class="w-fit mx-auto py-8 text-center">
                <div class="mb-4 p-4 bg-[#0000fe] rounded-full mx-auto w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><path fill="none" stroke="#9AFF01" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6A1.5 1.5 0 0 0 12 4.5H7l-1.44-3H2A1.5 1.5 0 0 0 .5 3v8A1.5 1.5 0 0 0 2 12.5h10a1.5 1.5 0 0 0 1.5-1.5Z"/></svg>
                </div>
                <p class="text-2xl font-medium">No Sample</p>
                <p class="mb-6">This client has no samples. Click to add sample.</p>
                <button @click="isAddModal = true" class="bg-[#0000fe] text-white px-4 py-[10px] font-[600] rounded-lg">Add Sample</button>
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
                <button class="bg-red-600 text-white px-3 py-2 rounded-lg font-medium" @click="deleteRow">Delete</button>
                <button class="bg-[#0000fe] text-white px-3 py-2 rounded-lg font-medium" @click="isDeleteModal = false">Cancel</button>
            </div>
        </div>
    </div>
    </Teleport>
    
    <!-- Edit modal -->
    <Teleport to="body">
    <div @click.self="isEditModal = false" v-if="isEditModal" class="fixed top-0 left-0 h-screen w-screen z-40 flex justify-center items-center bg-opacity-75 bg-black">
        <div class="bg-[white] h-[60vh] overflow-y-scroll shadow-xl">
            <div class="sticky bg-white top-0 px-6 py-3 border-b flex justify-between">
                <h1 class="font-[600] text-[18px]">Edit Sample</h1>
                <svg @click="isEditModal = false" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
            </div>
            <div class="px-6 pt-[20px]">
                <div class="md:flex md:space-x-4 items-center">
                    <div class="text-sm space-y-1">
                        <p>Sample type</p>
                        <input type="text" v-model="singleSample.name" class="focus:outline-none px-3 py-1 border rounded w-[250px]">
                    </div>
                    <div class="text-sm py-[10px]">
                        <h1>Sample status</h1>
                        <select v-model="singleSample.status" class="border focus:outline-none border-solid border-gray-300 border-1 p-[5px] rounded-[5px]">
                            <option>Status</option>
                            <option>Sample Received</option>
                            <option>Sample in Preparation</option>
                            <option>Sample Analysis in Progress</option>
                            <option>Sample Analysis Completed</option>
                            <option>QA/QC Ongoing</option>
                            <option>QA/QC Completed</option>
                            <option>Result is ready</option>
                        </select>
                    </div>
                </div>
                <div class="md:flex md:gap-8 items-end">
                    <div class="text-sm relative mt-4">
                    <h1 class="">Add Analysis</h1>
                    <div @click="() => drop = !drop" class="flex w-[200px] items-center justify-between py-1 pl-3 rounded border border-gray-300">
                        <p class="">Analysis</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414L12 15.001Z"/></svg>
                    </div>
                    <div v-if="drop" class="absolute top-[80px] left-0 z-10 bg-white w-fit h-[250px] py-2 shadow-xl rounded-lg px-[10px] space-y-2 border-1 sm:w-fit overflow-y-scroll">
                        <div v-for="item in analysis" :key="item.name" class="flex w-full justify-between border-t items-center">
                            <div class="flex gap-[5px] justify-start item-center ">
                                <input type="checkbox" :id="item.name" :value="item" v-model="selected">
                                <div class="space-y-1">
                                    <label :for="item.name" class="w-fit">{{item.name}}</label>
                                    <select class="border focus:outline-none border-solid border-gray-300 border-1 p-[5px] rounded-[5px]">
                                        <option>Analysis in Progress</option>
                                        <option>Analysis Completed</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div class="w-full">
                      <h1 class="text-sm">Date Sampled</h1>
                      <input class="w-full border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" type="date" v-model="singleSample.date_sampled" placeholder="dd-mm-yyyy">
                    </div>
                    
                </div>
                
                <div class="space-y-1 mt-4">
                        <p>Sample ID</p>
                        <input type="text" v-model="singleSample.sample_id" class="focus:outline-none px-3 py-1 border rounded w-[250px]">
                    </div>
                <label v-if="singleSample.status === 'Result is ready'" @dragenter.prevent="" @dragleave.prevent="" @dragover.prevent @drop.prevent="drop" 
                    class="w-full h-fit flex flex-col items-center mt-4 space-y-3 px-6 py-4 transition bg-white border border-gray-200 rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                        <div>
                            <div class="text-gray-700 text-[12px]">
                            <p class="text-[#0000ff] text-center cursor-pointer font-semibold rounded-lg">Click here to upload</p>
                            <div class="text-xs font-medium" v-if="file?.size">{{ file.name }}</div>

                            <div v-else class="text-gray-700 text-center text-[12px]">
                          Excel file or spreadsheets
                        </div>
                        </div>
                        
                        </div>
                    <input type="file" name="file_upload" class="hidden" ref="file" @change="handleFileUpload">
                </label>
                <div class="my-4 text-sm">
                    <p>List of Analysis</p>
                    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div v-for="item in singleSample.analyses" class="border p-2">
                            <p>{{item.name}}</p>
                            <select v-model="item.status" class="border focus:outline-none border-solid border-gray-300 border-1 p-[5px] rounded-[5px]">
                                <option>Analysis in Progress</option>
                                <option>Analysis Completed</option>
                            </select>
                            <!-- <div class="flex items-center space-x-2">
                                <p>{{item.status}}</p>
                                <svg v-if="item.status === 'Analysis in Progress'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><g fill="none" stroke="#0000fe" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13.5a6.5 6.5 0 1 1 6.21-8.41M13.5 7v.5"/><path stroke-dasharray=".889 1.778" d="M13.11 9.23a6.51 6.51 0 0 1-2.79 3.36"/><path d="m9.53 13l-.47.18"/></g></svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#0000fe" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"/></svg>
                            </div> -->
                        </div>
                    </div>
                    <!-- <div v-for="item in singleSample.analyses" :key="item" class="flex mt-2 space-x-8 items-center">
                        <p class="">{{ item.name }}</p>
                        <div class="flex items-center space-x-2 px-2 py-[6px] rounded-full bg-[#99ff00] text-[#0000fe]">
                            <p class="text-sm font-medium">{{ item.status }}</p>
                            <svg v-if="item.status === 'In progress'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2M4.26 5.67A9.885 9.885 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9L4.26 5.67M2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4.06 13h-2m5.04 5.37l-1.43 1.37A9.994 9.994 0 0 0 11 22v-2a8.002 8.002 0 0 1-3.9-1.63M12.5 7v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"/></svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2M4.26 5.67A9.885 9.885 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9L4.26 5.67M15.5 8.5l-4.88 4.88l-2.12-2.12l-1.06 1.06l3.18 3.18l5.94-5.94L15.5 8.5M2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4.06 13h-2m5.04 5.37l-1.43 1.37A9.994 9.994 0 0 0 11 22v-2a8.002 8.002 0 0 1-3.9-1.63Z"/></svg>
                        </div>
                    </div> -->
                </div>
                <div class="sticky bottom-0 py-3 border-t bg-white">
                    <button @click="editSample(singleSample.id)" class="bg-[#0000ff] w-full text-center py-[7px] h-fit rounded-[5px] text-white text-[16px] font-semibold">
                      <div v-if="isLoading" class="w-full justify-center flex space-x-4 items-center">
                        <span>Please wait</span>
                        <div class="lds-dual-ring"></div>
                      </div>
                      <span v-else>Save</span>
                    </button>
                </div>
            </div>
        </div>
            
        
    </div>  

    </Teleport> 

    <!-- Add Sample Modal -->

    <Teleport to="body">
    <div @click.self="isAddModal = false" v-if="isAddModal" class="fixed top-0 left-0 h-screen w-screen z-40 flex justify-center items-center bg-opacity-75 bg-black">
        <div class="my-[20px] bg-[white] py-[10px] shadow-xl">
            <div class="px-6 py-5 border-b flex justify-between ">
                <h1 class="font-[600] text-[18px]">Add Sample</h1>
            </div>
            <div class="px-6 py-[20px]">
                <div class="md:flex md:space-x-4 items-center">
                    <div class="space-y-1">
                        <p>Sample name</p>
                        <input type="text" v-model="sampleName" class="focus:outline-none px-3 py-1 border rounded w-[250px]">
                    </div>
                    <div class="space-y-1">
                        <p>Sample ID</p>
                        <input type="text" v-model="sampleId" class="focus:outline-none px-3 py-1 border rounded w-[250px]">
                    </div>
                    
                    
                </div>
                
                <div class="flex gap-4 items-center">
                  <div class="relative">
                    <h1 class="">Add Analysis</h1>
                    <div @click="() => drop = !drop" class="flex w-[200px] items-center justify-between py-1 pl-3 rounded border border-gray-300">
                        <p class="">Analysis</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414L12 15.001Z"/></svg>
                    </div>
                    <div v-if="drop" class="absolute top-[80px] left-0 z-10 bg-white w-fit h-[250px] py-2 shadow rounded-lg px-[10px] space-y-2 border-1 sm:w-fit overflow-y-scroll">
                        <div v-for="item in analysis" :key="item.name" class="flex w-full justify-between items-center">
                            <div class="flex gap-[5px] justify-start item-center ">
                                <input type="checkbox" :id="item.name" :value="item" v-model="selected">
                                <label :for="item.name" class="w-fit">{{item.name}}</label>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div class="py-[10px] w-full">
                      <h1 class="text-sm font-[400]">Date Sampled</h1>
                      <input class="w-full border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" type="date" v-model="dateSampled" placeholder="dd-mm-yyyy">
                    </div>
                </div>
                <div class="py-2">
                        <h1>Sample status</h1>
                        <select v-model="sampleStatus" class="border focus:outline-none border-solid border-gray-300 border-1 p-[5px] rounded-[5px]">
                            <option disabled value="">Status</option>
                            <option>Analysis Received</option>
                            <option>Sample in Preparation</option>
                            <option>Sample analysis in progress</option>
                            <option>Sample analysis Completed</option>
                        </select>
                    </div>

                <button @click="postSample" class="px-4 py-2 rounded-lg bg-black text-white font-semibold mt-3">
                    <div v-if="isLoading" class="w-full justify-center flex space-x-4 items-center">
                      <span>Please wait</span>
                      <div class="lds-dual-ring"></div>
                    </div>
                    <span v-else>Save</span>
                </button>
            </div>
        </div>
        <div v-if="success === 'Success'" class="fixed top-20 w-fit h-fit rounded-lg bg-[#F1FCE0] border border-[#9AFF01] text-green-600 shadow-lg px-4 py-2 transition-left duration-300 ease" :class="alert ? 'left-16' : 'left-[-1000px]'">
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg>
              <div>
                <p class="text-xl font-medium">Success</p>
                <p class="">{{ message }}</p>
              </div>
            </div>
        </div>
        <div v-if="success === 'Error'" class="fixed top-20 w-fit h-fit rounded-lg bg-red-100 border border-red-400 text-red-600 shadow-lg px-4 py-2 transition-left duration-300 ease" :class="alert ? 'left-16' : 'left-[-1000px]'">
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg>
              <div>
                <p class="text-xl font-medium">Error</p>
                <p class="">{{ message }}</p>
              </div>
            </div>
        </div>
        
    </div>  

    </Teleport> 


</template>

<style scoped>
.centered{
  width:400px;
  height:200px; 
}
.blob-1,.blob-2{
  width:70px;
  height:70px;
  position:absolute;
  background:#99ff00;
  border-radius:50%;
  top:40%;left:50%;
  transform:translate(-50%,-50%);
}
.blob-1{
  left:20%;
  animation:osc-l 2.5s ease infinite;
}
.blob-2{
  left:80%;
  animation:osc-r 2.5s ease infinite;
  background:#0000fe;
}
@keyframes osc-l{
  0%{left:20%;}
  50%{left:50%;}
  100%{left:20%;}
}
@keyframes osc-r{
  0%{left:80%;}
  50%{left:50%;}
  100%{left:80%;}
}
@media (max-width: 500px) {
    @keyframes osc-l{
      0%{left:30%;}
      50%{left:50%;}
      100%{left:30%;}
    }
    @keyframes osc-r{
      0%{left:80%;}
      50%{left:50%;}
      100%{left:80%;}
    }
}

.lds-dual-ring {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
