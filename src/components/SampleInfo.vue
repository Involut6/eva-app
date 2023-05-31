<script>

import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            table: [
                {number: 1, name: "Balkis", id: "h557yi", sampleStatus: "READ", dateCreated: "Aug 29 2022" },
                {number: 2, name: "Agba", id: "erfrti", sampleStatus: "UNREAD", dateCreated: "Sep 23 2023" },
                {number: 3, name: "Abdulhameed", id: "njksd5", sampleStatus: "READ", dateCreated: "Aug 2 2021" },
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
        <div>
    <div class="sticky top-0 z-10 bg-white w-full py-3 flex items-center justify-between px-[30px]">
      <div class="flex space-x-3 items-center">
        <img src="../assets/download-removebg-preview.png" class="h-[50px]" />
        <h1 class="hidden md:block text-[#0000fe] text-center text-3xl font-semibold">Env<span class="text-[#99ff00]">Accord</span></h1>
      </div>
      <div class="flex gap-8 items-center">
        <div class="flex gap-1">
         <div>
            <svg class="text-[#0000fe]" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="currentColor" d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l8.59 3.43L19.59 11L21 12.41l-6.37 6.37l3.44 8.59A1 1 0 0 0 19 28a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05Z"/></svg>
        </div>
         <a href="#" class="hidden md:block text-[#0000fe] font-semibold">Send Feedback</a>
       </div>
        <router-link to="/login" class="flex gap-1">
          <div><svg xmlns="http://www.w3.org/2000/svg" class="text-[#0000fe]" width="25" height="25"  viewBox="0 0 20 20"><path fill="currentColor" d="M8.5 11.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM11 3.5a.5.5 0 0 0-.576-.494l-7 1.07A.5.5 0 0 0 3 4.57v10.86a.5.5 0 0 0 .424.494l7 1.071a.5.5 0 0 0 .576-.494V10h5.172l-.997.874a.5.5 0 0 0 .658.752l1.996-1.75a.5.5 0 0 0 0-.752l-1.996-1.75a.499.499 0 1 0-.658.752l.997.874H11V3.5Zm-1 .582V15.92L4 15V4.999l6-.917ZM12.5 16H12v-5h1v4.5a.5.5 0 0 1-.5.5ZM12 8V4h.5a.5.5 0 0 1 .5.5V8h-1Z"/></svg></div>
          <p class="text-[#0000fe] hidden md:block font-semibold">Logout</p>
        </router-link>
      </div>
      
    </div>
    <div class="container mx-auto min-h-screen w-full">
<div class="w-full h-fit md:px-[30px] px-4 border-t-2 pb-[100px] lg:pb-4">
    <div class="bg-white md:px-[30px] px-4 py-5 space-y-4">
        <div class="md:flex justify-between border-b py-4">
            <p class="text-lg font-semibold">{{ details.clientName }}</p>
            <p class="">Date created: {{ details.dateReceived }}</p>
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
                <tr class="text-center h-[7vh] border border-gray-300" :class="details.samples.indexOf(row) % 2 === 0 ? 'bg-gray-100' : 'bg-white'" v-for="row in details.samples" :key="row.id">
                    <td>{{ row.sampleType }}</td>
                    <td>{{ details.samples.indexOf(row) + 1 }}</td>
                    <td>{{ row.dateReceived }}</td>
                    <td>{{ row.sampleStatus }}</td>
                    <td>{{ row.listOfAnalysis.length }}</td>
                    <td>
                        <div class="flex space-x-4 items-center justify-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0000fe] cursor-pointer" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"/></svg>
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
</template>