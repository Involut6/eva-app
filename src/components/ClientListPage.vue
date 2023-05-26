<script>
import { defineComponent } from 'vue';
import useSampleStore from '../stores/sample';


export default defineComponent({
    data() {
        return {
            isDeleteModal: false,
            isEditModal: false,
            totalSample: 207,
            samples: [
                {name: 'Micheal Sullivan', gender: 'Male', location: 'Lagos State, Ikeja LCDA', id: 0, samples: [{id: 1, title: "Blood Sample", dateCreated: "Aug 29, 2000", status: 'In progress', analysis: [{title: 'pH', status: 'in progress'}]},
               {id:2, title: "Urine Sample", dateCreated: "Apr 4, 2001", status: 'In progress', analysis: [{title: 'pH', status: 'in progress'}]},
               {id: 3, title: "Fieces Sample", dateCreated: "Feb 29, 2010", status: 'In progress', analysis: [{title: 'pH', status: 'in progress'}]},]},
                {name: 'Linda Barett', gender: 'Female', location: 'Oyo State, Ifeyin Road', id: 1, samples: [{id: 1, title: "Blood Sample", dateCreated: "Aug 29, 2000", status: 'In progress', analysis: [{title: 'pH', status: 'in progress'}]},
               {id:2, title: "Urine Sample", dateCreated: "Apr 4, 2001", status: 'In progress', analysis: [{title: 'pH', status: 'in progress'}]},
               {id: 3, title: "Fieces Sample", dateCreated: "Feb 29, 2010", status: 'In progress', analysis: [{title: 'pH', status: 'in progress'}]},
               {id:4, title: "Soil Sample", dateCreated: "May 12, 2022", status: 'In progress', analysis: [{title: 'pH', status: 'in progress'}]}],}, 
                {name: 'Sanni Hammed', gender: 'Male', location: 'Lagos State, Bariga LCDA', id: 2, samples: []},
                {name: 'Micheal Sullivan', gender: 'Male', location: 'Lagos State, Ikeja LCDA' , id: 3, samples: [
               {id:4, title: "Soil Sample", dateCreated: "May 12, 2022", status: 'In progress', analysis: [{title: 'pH', status: 'in progress'}]}  
                ]},
                {name: 'Linda Barett', gender: 'Male', location: 'Oyo State, Ifeyin Road', id: 4, samples: []},
                {name: 'Sanni Hammed', gender: 'Female', location: 'Lagos State, Bariga LCDA', id: 5, samples:[ {title: "Urine Sample", dateCreated: "Apr 4, 2001", status: 'In progress', analysis: [{title: 'pH', status: 'in progress'}]},
               {id: 3, title: "Fieces Sample", dateCreated: "Feb 29, 2010", status: 'In progress', analysis: [{title: 'pH', status: 'in progress'}]},]},
                {name: 'Micheal Sullivan', gender: 'Female', location: 'Lagos State, Ikeja LCDA' , id: 6, samples:[]}
            ],
            drop: null,
            table: [
                {number: 1, name: "Balkis", id: "h557yi", sampleNumber: "2", dateCreated: "Aug 29 2022" },
                {number: 2, name: "Agba", id: "erfrti", sampleNumber: "5", dateCreated: "Sep 23 2023" },
                {number: 3, name: "Abdulhameed", id: "njksd5", sampleNumber: "1", dateCreated: "Aug 2 2021" },
                {number: 4, name: "Esther", id: "8nfocd", sampleNumber: "0", dateCreated: "Jan 29 2012" },
                {number: 5, name: "Emma", id: "we34rd", sampleNumber: "30", dateCreated: "May 9 2022" },
                {number: 6, name: "Fawas", id: "cdf4tg", sampleNumber: "25", dateCreated: "Jul 4 2023" },
                {number: 7, name: "Maruf", id: "43rfda", sampleNumber: "2", dateCreated: "Dec 29 2023" },
                {number: 8, name: "Taye", id: "vf45gf", sampleNumber: "2", dateCreated: "Aug 20 2023" },
                {number: 9, name: "Ibrahim", id: "sdfrg4", sampleNumber: "2", dateCreated: "Aug 9 2022" },
            ],
            store: useSampleStore(),
        }
    },
    methods: {
        dropDown(id) {
            this.drop = id
        },
        viewClient(prod) {
            this.store.$state.client = prod
            this.$router.push('/client')
        }
    }
})

</script>

<template>
    <div class="container mx-auto min-h-screen w-full pb-[100px] lg:pb-0">
        <div class="w-full h-fit xl:p-[30px] max-[1300px]:p-4">
            <div class="hidden md:flex flex-col md:flex-row md:flex gap-4 text-white xl:gap-12 mb-10">
                <div class="p-4 w-full rounded-md bg-gradient-to-r from-[#0000fe] to-[#d0edfe] h-[120px] relative">
                    <div class="flex flex-col justify-between h-full"> 
                        <p class="text-lg font-semibold">CLIENTS</p>
                        <p class="text-2xl">{{ store.$state.clientList.length }}</p>
                    </div>
                    <div>
                        <p class="bg-[#99ff00] w-fit px-6 flex items-center h-full rounded-l-[100%] rounded-r-[20%] absolute right-0 top-0"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.538T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 1.475.488 2.775T5.85 17.1ZM12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.012-2.488T12 6q1.475 0 2.488 1.012T15.5 9.5q0 1.475-1.012 2.488T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg></p>
                    </div>
                </div>
                <div class="p-4 w-full rounded-md bg-gradient-to-r from-[#0000fe] to-[#d0edfe] h-[120px] relative">
                    <div class="flex flex-col justify-between h-full"> 
                        <p class="text-lg font-semibold"> SAMPLES</p>
                        <p class="text-2xl">15</p>
                    </div>
                    <div>
                        <p class="bg-[#99ff00] w-fit px-6 flex items-center h-full rounded-l-[100%] rounded-r-[20%] absolute right-0 top-0"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 256 256"><path fill="currentColor" d="M222 67.34a33.81 33.81 0 0 0-10.64-24.25c-13.24-12.53-34.68-12.09-47.82 1.09L142.82 65l-.63-.63a22 22 0 0 0-31.11 0l-9 9a14 14 0 0 0 0 19.81l3.47 3.47l-52.41 52.45a37.81 37.81 0 0 0-9.84 36.73l-8.31 19a11.68 11.68 0 0 0 2.46 13a13.91 13.91 0 0 0 9.87 4.17a14.15 14.15 0 0 0 5.68-1.18l18-7.9a37.92 37.92 0 0 0 35.84-10.07l52.44-52.46l3.47 3.48a14 14 0 0 0 19.8 0l9-9a22.06 22.06 0 0 0 0-31.13l-.66-.65L212 91.85a33.76 33.76 0 0 0 10-24.51Zm-123.61 127a26 26 0 0 1-26 6.47a6 6 0 0 0-4.17.24l-20 8.75a2 2 0 0 1-2.09-.31l9.12-20.9a5.94 5.94 0 0 0 .19-4.31A25.91 25.91 0 0 1 56 166h70.78ZM138.78 154H65.24l48.83-48.84l36.76 36.78Zm64.77-70.59l-25.38 25.49a6 6 0 0 0 0 8.47l4.88 4.89a10 10 0 0 1 0 14.15l-9 9a2 2 0 0 1-2.82 0l-60.69-60.7a2 2 0 0 1 0-2.83l9-9a10 10 0 0 1 14.14 0l4.89 4.89a6 6 0 0 0 4.24 1.75a6 6 0 0 0 4.25-1.77L172 52.66c8.57-8.58 22.51-9 31.07-.85a22 22 0 0 1 .44 31.57Z"/></svg></p>
                    </div>
                </div>
                <div class="p-4 rounded-md bg-gradient-to-r from-[#0000fe] to-[#d0edfe] w-full h-[120px] relative">
                    <div class="flex flex-col justify-between h-full"> 
                        <p class="text-lg font-semibold">Analysis</p>
                        <p class="text-2xl">{{ store.$state.analysis.length }}</p>
                    </div>
                    <div>
                        <p class="bg-[#99ff00] w-fit px-6 flex items-center h-full rounded-l-[100%] rounded-r-[20%] absolute right-0 top-0"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4"><path stroke-linejoin="round" d="M44 5H4v12h40V5Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m4 41.03l12.176-12.3l6.579 6.3L30.798 27l4.48 4.368"/><path stroke-linecap="round" d="M44 16.172v26m-40-26v14M13.015 43H44M17 11h21m-28-.003h1"/></g></svg></p>
                    </div>
                </div>
            </div>
            <p class="md:my-4 mb-4 text-lg font-semibold">Client List</p>
            <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
                <div v-for="i in samples" :key="i.id">
                <div class="flex bg-white w-full justify-between p-4 gap-6 rounded-md shadow-md relative">
                    <div>
                        <p>{{ i.clientName }}</p>
                        <p class="mb-2 text-gray-600">{{ i.dateReceived }}</p>
                        <p class="w-full whitespace-nowrap">Number of samples: {{ i.samples.length }}</p>
                     </div>
                    <div @click="dropDown(i.clientId)">
                        <svg fill="currentColor" class="rotate-90" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="36px" height="32px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <path d="M256,224c-17.7,0-32,14.3-32,32s14.3,32,32,32c17.7,0,32-14.3,32-32S273.7,224,256,224L256,224z"/> <path d="M128.4,224c-17.7,0-32,14.3-32,32s14.3,32,32,32c17.7,0,32-14.3,32-32S146,224,128.4,224L128.4,224z"/> <path d="M384,224c-17.7,0-32,14.3-32,32s14.3,32,32,32s32-14.3,32-32S401.7,224,384,224L384,224z"/> </g> </svg>
                    </div>
                    <div v-if="drop === i.clientId" class="bg-white shadow-xl border-2 w-[165px] absolute py-2 z-20 rounded-md right-[1.2rem] top-[3rem]">
                        <div @click="viewClient(i)" class="hover:bg-gray-200 cursor-pointer"><p class="p-2">View Details</p></div>
                        <div class="hover:bg-gray-200 cursor-pointer"><p class="p-2">Edit</p></div>
                        <div class="hover:bg-gray-200 cursor-pointer "><p class="p-2">Delete</p></div>
                    </div>
                </div>
            </div>
            </div> -->

            <table class="w-full bg-gray-100">
                <thead class="bg-[#0000fe] text-white h-[8vh]">
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Number of sample</th>
                    <th>Date created</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr class="text-center h-[10vh] text-[17px] border border-gray-300" v-for="rows in table" :key="rows.id" :class=" table.indexOf(rows) % 2 === 0 ? 'bg-gray-200' : 'bg-gray-white'">
                        <td>{{ rows.number }}</td>
                        <td>{{ rows.name }}</td>
                        <td>{{ rows.id }}</td>
                        <td>{{ rows.sampleNumber }}</td>
                        <td>{{ rows.dateCreated }}</td>
                        <td>
                            <div class="flex justify-center items-center space-x-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0000fe] cursor-pointer active:text-red" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2L17.875 1.9L22.1 6.125l-2.8 2.8ZM3 21v-4.25l10.6-10.6l4.25 4.25L7.25 21H3Z"/></svg>
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
        <div v-if="drop !== null" @click="drop = null" class="h-full w-full absolute top-0 left-0 z-10"></div>
    </div>
</template>