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
    <div class="h-screen w-screen flex items-center bg-[#0000fe70]">
        <div class="p-5 rounded-lg mx-auto w-fit h-fit bg-white">
            <p class="text-xl font-semibold mb-4 w-full text-center">Logo</p>
            <div class="w-[350px] mb-8 text-center mx-auto">
                <p class="text-lg font-semibold">Enter Sample ID</p>
                <p class="text-sm">Enter the sample Id to check the status and result of your sample</p>
            </div>
            <label>Sample ID</label>
            <input placeholder="Enter sample Id" class="block focus:outline-none w-full px-3 py-2 border mt-2 mb-4 rounded-lg" v-model="id" />
            <button @click="() => showSample = true" :class="id === '' ? 'bg-[#0000fe]' : 'bg-gray-300'" class="font-medium text-white p-2 rounded-lg mt-4 w-full text-center">View Sample</button>
        </div>
    </div>

    <!-- Modal -->
    <div @click.self="showSample = false"  v-if="showSample" class="h-screen w-screen fixed top-0 left-0 flex justify-center items-center bg-opacity-60 bg-black">
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
        </div>
    </div>
</template>