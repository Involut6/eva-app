<script setup></script>

<template>
    <div class="Container w-full">
        <div class="bg-[#009efb] w-full h-[10vh] flex items-center justify-end px-[30px]">
           <div class="flex gap-5">
             <div> <!--svg icon--></div>
             <p class="text-white font-semibold">Make an appointment</p>
           </div>

           <div class="flex gap-5">
             <div> <!--svg icon--></div>
             <p class="text-white font-semibold">Write a prescription</p>
           </div>

           <div class="flex gap-5">
             <div> <!--svg icon--></div>
             <p class="text-white font-semibold">Generate report</p>
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
            <p><a href="#" class="text-gray-500 hover:text-[#009efb]">Patient list</a></p>
          </div>
          
        <div class="bg-white w-full shadow-xl pb-9">
            <div class="space-y-5">
                <div class="flex justify-between border-b px-[20px] py-[30px]">
                    <p class="font-bold">Patient List</p>
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
                    <input type="text" class="border border-gray-400 rounded-[20px] p-1" placeholder="Show Data....">
                </div>
                <div class="px-[20px]">
                    <table class="w-full bg-gray-100 border border-gray-400 rounded-lg">
                    <thead class="text-white bg-[#009efb]">
                        <th>Name</th>
                        <th>Dates</th>
                        <th>Status</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr class="text-center">
                            <td>ola</td>
                            <td>aug, 29 200</td>
                            <td>fever</td>
                            <td>icon</td>
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