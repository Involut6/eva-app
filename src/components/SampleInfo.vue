<script>
import { defineComponent } from 'vue';
import { getClientById } from '../services/DataServices';

export default defineComponent({
    data() {
        return {
            client: [],
            isSampleModal: false,
            sampleData: {},
            isFeedback: false,
            isLoading: true
        }
    },
    mounted() {
        this.isLoading = true
          getClientById(this.$route.params.id).then(response => {
            if (response.data.data.client.samples.length == 0) {
                this.$router.push('/');
                alert('You have no samples to view. Please contact the administrator.')
            }
            console.log(response);
            if (response.status === 200) {
              this.client = response.data.data.client;
              console.log(response.data.data)
            }
          }).catch(error => {
            console.log(error)
          }).finally(() => {
            this.isLoading = false
          })
        
    },
    methods: {
        singleSample(data) {
            this.isSampleModal = true
            this.sampleData = data
        },
        back() {
          this.$router.push('/')
        }
    }
})
</script>
<template>
    <div>
        <div class="sticky top-0 z-10 bg-white w-full py-3 flex items-center justify-between px-4 md:px-[50px] border-b">
            <div @click="back" class="flex space-x-3 items-center">
                <img class="h-[50px]" src="../assets/enva-logo.png" alt="">
            </div>
            <div class="flex gap-8">
                <div class="flex gap-8 items-center">
                    <a href="https://forms.gle/Hbnxe7SauhUtbmZQ9" target="_blank" class="flex gap-1 cursor-pointer">
                        <svg class="text-[#0000fe]" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            viewBox="0 0 32 32">
                            <path fill="currentColor"
                                d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l8.59 3.43L19.59 11L21 12.41l-6.37 6.37l3.44 8.59A1 1 0 0 0 19 28a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05Z" />
                        </svg>
                        <p class="text-[#0000fe] font-semibold">Send Feedback</p>
                    </a>
                </div>
                <p @click="back" class="text-[#0000fe] font-semibold cursor-pointer">Logout</p>
            </div>
        </div>
        <div class="container mx-auto min-h-screen w-full">
            <div class="w-full h-fit md:px-[50px] px-4 pb-[100px] lg:pb-4 mt-10">
                <div class="bg-white md:px-[30px] px-4 py-5 space-y-4">
                    <div class="flex justify-between border-b py-4">
                        <p class="text-lg font-bold">{{ client.name }}</p>
                        <div class="flex items-center text-xl gap-2">
                            <p>Client ID:</p>
                            <p class="text-xl font-bold">{{ client.client_id }}</p>
                        </div>
                        
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
                                        <td>{{ row.name }}</td>
                                        <td>{{ client.samples.indexOf(row) + 1 }}</td>
                                        <td>{{ row.created_at.substring(0, 10) }}</td>
                                        <td>{{ row.status }}</td>
                                        <td>{{ row.analyses.length }}</td>
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
        <div class="p-5 rounded-lg bg-white w-[343px] md:w-[550px]">
            <div class="w-full flex justify-between">
                <div>
                    <p class="text-2xl font-semibold">Sample Information</p>
                    <p class="">View the Information of your sample</p>
                </div>
                <div @click="isSampleModal = false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
                </div>
            </div>

            <div class="content">

            <div class="flex justify-between mt-5">
                <div class="">
                    <p class="font-semibold">Title</p>
                    <p class="">{{ sampleData.name }}</p>
                </div>
                
                <div class="">
                    <p class="font-semibold">Status</p>
                    <div class="flex space-x-2">
                        <p class="">{{sampleData.status}}</p>
                    </div>
                </div>

                <div class="">
                    <p class="font-semibold">Date</p>
                    <div class="flex space-x-2">
                        <p class="">{{sampleData.created_at.substring(0, 10)}}</p>
                    </div>
                </div>
            </div>

            <div class="mt-4">
                <p class="mb-2 font-semibold">Analysis</p>                
                <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div v-for="item in sampleData.analyses" class="border p-2">
                        <p>{{item.name}}</p>
                        <div class="flex items-center space-x-2">
                            <p>{{item.status}}</p>
                            <svg v-if="item.status === 'Analysis in Progress'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><g fill="none" stroke="#0000fe" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13.5a6.5 6.5 0 1 1 6.21-8.41M13.5 7v.5"/><path stroke-dasharray=".889 1.778" d="M13.11 9.23a6.51 6.51 0 0 1-2.79 3.36"/><path d="m9.53 13l-.47.18"/></g></svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#0000fe" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"/></svg>
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
    
</template>