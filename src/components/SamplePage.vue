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
    <div class="Container w-full">
        <div class="bg-[#009efb] w-full h-[10vh] flex gap-8 items-center justify-end px-[30px]">
           <div class="flex gap-1">
             <div> <svg xmlns="http://www.w3.org/2000/svg" class="text-white" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M2 10q0-2.2.888-4.163T5.425 2.45l1.425 1.4Q5.5 5.025 4.75 6.613T4 10H2Zm18 0q0-1.8-.75-3.388t-2.1-2.762l1.425-1.4q1.65 1.425 2.538 3.388T22 10h-2ZM4 19v-2h2v-7q0-2.075 1.25-3.688T10.5 4.2v-.7q0-.625.438-1.063T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2H4Zm8 3q-.825 0-1.413-.588T10 20h4q0 .825-.588 1.413T12 22Z"/></svg></div>
             <a href="#" class="text-white font-semibold">Notification</a>
           </div>
            <div class="flex gap-1">
              <div><svg xmlns="http://www.w3.org/2000/svg" class="text-white" width="25" height="25"  viewBox="0 0 20 20"><path fill="currentColor" d="M8.5 11.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM11 3.5a.5.5 0 0 0-.576-.494l-7 1.07A.5.5 0 0 0 3 4.57v10.86a.5.5 0 0 0 .424.494l7 1.071a.5.5 0 0 0 .576-.494V10h5.172l-.997.874a.5.5 0 0 0 .658.752l1.996-1.75a.5.5 0 0 0 0-.752l-1.996-1.75a.499.499 0 1 0-.658.752l.997.874H11V3.5Zm-1 .582V15.92L4 15V4.999l6-.917ZM12.5 16H12v-5h1v4.5a.5.5 0 0 1-.5.5ZM12 8V4h.5a.5.5 0 0 1 .5.5V8h-1Z"/></svg></div>
              <a href="#" class="text-white font-semibold">Logout</a>
            </div>
        </div>

        <div> <!--svg icon--></div>

        <img src="" alt="">
       <!-- section -->
        <div class="bg-[whitesmoke] space-y-3 w-full h-fit px-[30px] py-[50px]">
          <div class="flex gap-2">
            <p><a href="#" class="text-gray-700 hover:text-[#009efb]">Home</a></p>
            <p>/</p>
            <p><a href="#" class="text-gray-700 hover:text-[#009efb]">patient</a></p>
            <p>/</p>
            <p><a href="#" class="text-gray-500 hover:text-[#009efb]">Sample list</a></p>
          </div>
          
        <div class="bg-white w-full shadow-xl pb-9">
            <div class="space-y-5">
                <div class="flex justify-between border-b px-[20px] py-[30px]">
                    <p class="font-bold">Sample List</p>
                    <p><a href="#" class="text-[#009efb]">Add Patient</a></p>
                </div>
                <div class="flex justify-between px-[20px]">
                    <div class="flex gap-2 items-center">
                      <p>Show</p>
                      <select class="border border-black">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </div>
                    <input type="text" class="border border-gray-300 rounded-[20px] p-1" placeholder="Show Data....">
                </div>
                <div class="">
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
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-[#009efb]" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2L17.875 1.9L22.1 6.125l-2.8 2.8ZM3 21v-4.25l10.6-10.6l4.25 4.25L7.25 21H3Z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-[#009efb]" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7Zm2-5q0 .425.288.713T10 17q.425 0 .713-.288T11 16V9q0-.425-.288-.713T10 8q-.425 0-.713.288T9 9v7Zm4 0q0 .425.288.713T14 17q.425 0 .713-.288T15 16V9q0-.425-.288-.713T14 8q-.425 0-.713.288T13 9v7Z"/></svg>
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