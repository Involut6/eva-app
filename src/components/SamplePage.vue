<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            tableRows: [
               {id: 1, title: "ola", dateCreated: "Aug 29, 2000", status: 'In progress'},
               {id:2, title: "AbdulQayum", dateCreated: "Aug 29, 2000", status: 'In progress'},
               {id: 3, title: "Emmanuel", dateCreated: "Aug 29, 20 00", status: 'In progress'},
               {id:4, title: "Hammed", dateCreated: "Aug 29, 2000", status: 'In progress'}
            ]
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
                    <p><a href="#" class="text-[#009efb]">Add Patient</a></p>
                </div>
                <div class="flex justify-between px-[20px] max-[375px]:flex-col items-center gap-3">
                    <div class="flex gap-2 items-center">
                      <p>Show</p>
                      <select class="border border-black">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </div>
                    <input type="text" class="border border-gray-300 rounded-[20px] px-5 py-1 outline-none" placeholder="Show Data....">
                </div>
                <div class="min-w-[500px] overflow-auto">
                    <table class="w-full bg-gray-100">
                    <thead class="text-white bg-[#009efb] h-[8vh]">
                        <th>Title</th>
                        <th>Date created</th>
                        <th>Status</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr class="text-center h-[10vh] border border-gray-300" :class="tableRows.indexOf(row) % 2 === 0 ? 'bg-gray-100' : 'bg-white'" v-for="row in tableRows" :key="row.id">
                            <td>{{ row.title }}</td>
                            <td>{{ row.dateCreated }}</td>
                            <td>{{ row.status }}</td>
                            <td><div class="flex space-x-2 items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-[#009efb] cursor-pointer" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2L17.875 1.9L22.1 6.125l-2.8 2.8ZM3 21v-4.25l10.6-10.6l4.25 4.25L7.25 21H3Z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-[#009efb] cursor-pointer" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7Zm2-5q0 .425.288.713T10 17q.425 0 .713-.288T11 16V9q0-.425-.288-.713T10 8q-.425 0-.713.288T9 9v7Zm4 0q0 .425.288.713T14 17q.425 0 .713-.288T15 16V9q0-.425-.288-.713T14 8q-.425 0-.713.288T13 9v7Z"/></svg>
                            </div></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>

        </div>
        </div>

    </div>
</template>

<style scoped></style>