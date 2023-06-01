<script>

import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            table: [
                {number: 1, name: "Balkis", id: "h557yi", sampleStatus: "READ", dateCreated: "Aug 29 2022" },
                {number: 2, name: "Agba", id: "erfrti", sampleStatus: "UNREAD", dateCreated: "Sep 23 2023" },
                {number: 3, name: "Abdulhameed", id: "njksd5", sampleStatus: "1", dateCreated: "Aug 2 2021" },
                {number: 4, name: "Esther", id: "8nfocd", sampleStatus: "READ", dateCreated: "Jan 29 2012" },
                {number: 5, name: "Emma", id: "we34rd", sampleStatus: "UNREAD", dateCreated: "May 9 2022" },
                {number: 6, name: "Fawas", id: "cdf4tg", sampleStatus: "READ", dateCreated: "Jul 4 2023" },
                {number: 7, name: "Maruf", id: "43rfda", sampleStatus: "UNREAD", dateCreated: "Dec 29 2023" },
                {number: 8, name: "Taye", id: "vf45gf", sampleStatus: "READ", dateCreated: "Aug 20 2023" },
                {number: 9, name: "Ibrahim", id: "sdfrg4", sampleStatus: "UNREAD", dateCreated: "Aug 9 2022" },
            ]
        }
    }
})
</script>

<template>
    <div class="container mx-auto min-h-screen w-full pb-[100px] lg:pb-0">
        <div class="w-full h-fit xl:p-[30px] max-[1300px]:p-4">
            <div class="flex space-x-2 items-center">
                <router-link to="/"><p class="text-[#0000fe]">Home</p></router-link>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"/></svg>
                <p>Feedback</p>
             </div>
             <!-- for feedback -->
             <div class="overflow-x-scroll">
                <div class="relative min-w-[800px]">
                <table class="w-full bg-gray-100">
                <thead class="bg-[#0000fe] text-white h-[8vh]">
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr class="text-center h-[8vh] text-[17px] border border-gray-300" v-for="rows in table" :key="rows.id" :class=" table.indexOf(rows) % 2 === 0 ? 'bg-gray-200' : 'bg-gray-white'">
                        <td>{{ rows.number }}</td>
                        <td>{{ rows.name }}</td>
                        <td>{{ rows.id }}</td>
                        <td>{{ rows.sampleStatus }}</td>
                        <td>{{ rows.dateCreated }}</td>
                        <td>
                            <div class="flex justify-center items-center space-x-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0000fe] cursor-pointer" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"/></svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-red-600 cursor-pointer" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7Zm2-5q0 .425.288.713T10 17q.425 0 .713-.288T11 16V9q0-.425-.288-.713T10 8q-.425 0-.713.288T9 9v7Zm4 0q0 .425.288.713T14 17q.425 0 .713-.288T15 16V9q0-.425-.288-.713T14 8q-.425 0-.713.288T13 9v7Z"/></svg>
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
</template>