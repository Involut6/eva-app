<script>
import { defineComponent } from 'vue';


export default defineComponent({
    data() {
        return {
            tableRows: [
               {id: 1, title: "Blood Sample", dateCreated: "Aug 29, 2000", status: 'In progress', analysis: [{title: 'pH', status: 'in progress'}]},
               {id:2, title: "Urine Sample", dateCreated: "Apr 4, 2001", status: 'In progress', analysis: [{title: 'pH', status: 'in progress'}]},
               {id: 3, title: "Fieces Sample", dateCreated: "Feb 29, 2010", status: 'In progress', analysis: [{title: 'pH', status: 'in progress'}]},
               {id:4, title: "Soil Sample", dateCreated: "May 12, 2022", status: 'In progress', analysis: [{title: 'pH', status: 'in progress'}]}
            ],
            isDeleteModal: false,
            isEditModal: false
        }
    }
})

</script>

<template>

    <div class="container mx-auto h-min-screen w-full">

        <div> <!--svg icon--></div>

        <img src="" alt="">
       <!-- section -->
        <div class="space-y-3 w-full h-fit px-[30px] py-[50px] max-[800px]:px-[0]">
        <div class="bg-white w-full shadow-xl pb-9 overflow-x-scroll">
            <div class="space-y-5">
                <div class="flex justify-between border-b px-[20px] py-[30px]">
                    <p class="text-lg font-semibold">Sample List</p>
                </div>
                <div class="flex justify-end px-[20px] max-[375px]:flex-col items-center gap-3">
                    <!-- <div class="flex gap-2 items-center">
                      <p>Show</p>
                      <select class="border border-black">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>

                    </div> -->
                    <input type="text" class="border border-gray-300 rounded-[20px] px-5 py-1 outline-none" placeholder="Search....">
                </div>
                <div class="relative min-w-[500px] overflow-auto">
                    <table class="w-full bg-gray-100">
                    <thead class="text-white bg-[#009efb] h-[8vh]">
                        <th>Title</th>
                        <th>Id</th>
                        <th>Date created</th>
                        <th>Status</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr class="text-center h-[10vh] border border-gray-300" :class="tableRows.indexOf(row) % 2 === 0 ? 'bg-gray-100' : 'bg-white'" v-for="row in tableRows" :key="row.id">
                            <td>{{ row.title }}</td>
                            <td>{{ row.id }}</td>
                            <td>{{ row.dateCreated }}</td>
                            <td>{{ row.status }}</td>
                            <td>
                                <div class="flex space-x-2 items-center justify-center">
                                    <div @click="isEditModal = true">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#009efb] cursor-pointer active:text-red" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2L17.875 1.9L22.1 6.125l-2.8 2.8ZM3 21v-4.25l10.6-10.6l4.25 4.25L7.25 21H3Z"/></svg>
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

        <!-- when the delete button is clicked -->

    </div>
    <Teleport to="body">
        <div @click.self="isDeleteModal = false" v-if="isDeleteModal" class="fixed top-0 left-0 h-screen w-screen z-20 flex justify-center items-center bg-opacity-75 bg-black">
        <div class="z-30 bg-white w-[343px] lg:w-[450px] h-fit rounded-lg shadow-lg p-5">
            <p class="text-xl font-semibold">Delete Sample</p>
            <p class="w-full">Are you sure you want to delete this sample?</p>
            <div class="flex space-x-3 mt-8 w-fit ml-auto mr-0">
                <button class="bg-red-600 text-white px-3 py-2 rounded-lg font-medium">Delete</button>
                <button class="bg-[#009EFB] text-white px-3 py-2 rounded-lg font-medium" @click="isDeleteModal = false">Cancel</button>
            </div>
        </div>
    </div>
    </Teleport>

    <!-- editing  sample -->
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
                        <input type="text" class="focus:outline-none px-3 py-1 border rounded w-[250px]">
                    </div>
                    <div class="py-[10px]">
                        <h1>Sample status</h1>
                        <select class="border focus:outline-none border-solid border-gray-300 border-1 p-[5px] rounded-[5px]">
                            <option disabled value="">Status</option>
                            <option>Received</option>
                            <option>Preparation</option>
                            <option>Analysis in progress</option>
                            <option>Analysis Completed</option>
                        </select>
                    </div>
                </div>
                <button class="px-3 py-1 rounded-lg bg-black text-white font-semibold mt-3">Save</button>
            </div>
        </div>
            
        
    </div>  

    </Teleport> 


</template>

<style scoped>

</style>