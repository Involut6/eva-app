<script>
import { defineComponent } from 'vue';
import { useSampleStore } from '../stores/sample';
import { getClients, deleteClient } from '../services/DataServices';


export default defineComponent({
    data() {
        return {
            isDeleteModal: false,
            isEditModal: false,
            totalSample: 207,
            drop: null,
            store: useSampleStore(),
            isDeleteModal: false,
            deleteId: '',
            isLoading: false,
            message: '',
            alert: false,
            currentPage: 1,
            total_pages: 10
        }
    },
    mounted() {
        this.isLoading = true
        getClients(this.currentPage).then((response) => {
            if (response.status === 200) {
                console.log(response.data.data.clients)
                useSampleStore().$state.clients = response.data.data.clients
                this.total_pages = response.data.data.pagination.total_pages
            }
        }).catch(error => {
            console.log(error);
        }).finally(() => this.isLoading = false)
        useSampleStore().fetchStat();
        
    },
    methods: {
        dropDown(id) {
            this.drop = id
        },
        viewClient(prod, client) {
            this.store.$state.client = client
            this.store.$state.clientID = prod
            this.$router.push(`/admin/client-details/${prod}`);
        },
        deleteModal(id) {
            this.isDeleteModal = true
            this.deleteId = id
        },
        deleteRow() {
            this.isLoading = true
            deleteClient(this.deleteId).then((response) => {
                console.log(response.data)
                this.message = response.data.message
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                this.isLoading = false
                this.alert = true
                setTimeout(() => {
                    this.alert = false
                }, 3000);
            })
            this.isDeleteModal = false
            useSampleStore().setClients();
            useSampleStore().fetchStat();
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--
                useSampleStore().setClients(this.currentPage)
            }
        },
        nextPage() {
            if (this.currentPage < this.total_pages) {
                this.currentPage++
                useSampleStore().setClients(this.currentPage)
            }
        },
        jump(page) {
            this.currentPage = page
            useSampleStore().setClients(this.currentPage);
        }
    },
})

</script>

<template>
    <div class="container mx-auto min-h-screen w-full pb-[100px] lg:pb-0">
        <div class="w-full h-fit xl:p-[30px] max-[1300px]:p-4">
            <div class="hidden md:flex flex-col md:flex-row md:flex gap-4 text-white xl:gap-12 mb-10">
                <div class="p-4 w-full rounded-md bg-gradient-to-r from-[#0000fe] to-[#d0edfe] h-[120px] relative">
                    <div class="flex flex-col justify-between h-full"> 
                        <p class="text-lg font-semibold">CLIENTS</p>
                        <p class="text-2xl">{{ store.$state.stats.clients_count }}</p>
                    </div>
                    <div>
                        <p class="bg-[#99ff00] w-[100px] px-6 flex items-center h-full rounded-l-[100%] rounded-r-[20%] absolute right-0 top-0"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.538T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 1.475.488 2.775T5.85 17.1ZM12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.012-2.488T12 6q1.475 0 2.488 1.012T15.5 9.5q0 1.475-1.012 2.488T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg></p>
                    </div>
                </div>
                <div class="p-4 w-full rounded-md bg-gradient-to-r from-[#0000fe] to-[#d0edfe] h-[120px] relative">
                    <div class="flex flex-col justify-between h-full"> 
                        <p class="text-lg font-semibold"> SAMPLES</p>
                        <p class="text-2xl">{{ store.$state.stats.samples_count }}</p>
                    </div>
                    <div>
                        <p class="bg-[#99ff00] w-[100px] px-6 flex items-center h-full rounded-l-[100%] rounded-r-[20%] absolute right-0 top-0"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 256 256"><path fill="currentColor" d="M222 67.34a33.81 33.81 0 0 0-10.64-24.25c-13.24-12.53-34.68-12.09-47.82 1.09L142.82 65l-.63-.63a22 22 0 0 0-31.11 0l-9 9a14 14 0 0 0 0 19.81l3.47 3.47l-52.41 52.45a37.81 37.81 0 0 0-9.84 36.73l-8.31 19a11.68 11.68 0 0 0 2.46 13a13.91 13.91 0 0 0 9.87 4.17a14.15 14.15 0 0 0 5.68-1.18l18-7.9a37.92 37.92 0 0 0 35.84-10.07l52.44-52.46l3.47 3.48a14 14 0 0 0 19.8 0l9-9a22.06 22.06 0 0 0 0-31.13l-.66-.65L212 91.85a33.76 33.76 0 0 0 10-24.51Zm-123.61 127a26 26 0 0 1-26 6.47a6 6 0 0 0-4.17.24l-20 8.75a2 2 0 0 1-2.09-.31l9.12-20.9a5.94 5.94 0 0 0 .19-4.31A25.91 25.91 0 0 1 56 166h70.78ZM138.78 154H65.24l48.83-48.84l36.76 36.78Zm64.77-70.59l-25.38 25.49a6 6 0 0 0 0 8.47l4.88 4.89a10 10 0 0 1 0 14.15l-9 9a2 2 0 0 1-2.82 0l-60.69-60.7a2 2 0 0 1 0-2.83l9-9a10 10 0 0 1 14.14 0l4.89 4.89a6 6 0 0 0 4.24 1.75a6 6 0 0 0 4.25-1.77L172 52.66c8.57-8.58 22.51-9 31.07-.85a22 22 0 0 1 .44 31.57Z"/></svg></p>
                    </div>
                </div>
                <div class="p-4 rounded-md bg-gradient-to-r from-[#0000fe] to-[#d0edfe] w-full h-[120px] relative">
                    <div class="flex flex-col justify-between h-full"> 
                        <p class="text-lg font-semibold">ANALYSIS</p>
                        <p class="text-2xl">{{ store.$state.stats.analyses_count }}</p>
                    </div>
                    <div>
                        <p class="bg-[#99ff00] w-[100px] px-6 flex justify-center items-center h-full rounded-l-[100%] rounded-r-[20%] absolute right-0 top-0"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4"><path stroke-linejoin="round" d="M44 5H4v12h40V5Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m4 41.03l12.176-12.3l6.579 6.3L30.798 27l4.48 4.368"/><path stroke-linecap="round" d="M44 16.172v26m-40-26v14M13.015 43H44M17 11h21m-28-.003h1"/></g></svg></p>
                    </div>
                </div>
            </div>
            <p class="md:my-4 mb-4 text-lg font-semibold">Client List</p>
            
            <div v-if="isLoading" class="space-y-8">
                    <div class = "centered w-full md:w-[400px] h-[200px]">
                      <div class = "blob-1"></div>
                      <div class = "blob-2"></div>
                    </div>
                </div>
        <div v-else-if="store.$state.clients.length > 0" class="overflow-x-scroll">
            <div class="relative min-w-[700px]">
                <!-- Loading State -->
                <div>
                    <table class="w-full bg-gray-100">
                        <thead class="bg-[#0000fe] text-white h-[8vh]">
                            <th>S/N</th>
                            <th>Client Name</th>
                            <th>Id</th>
                            <th>Samples</th>
                            <th>Date</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr class="text-center h-[7vh] text-[17px] border border-gray-300" v-for="(rows, index) in store.$state.clients" :key="rows.id" :class="index % 2 === 0 ? 'bg-gray-200' : 'bg-white'">
                                <td>{{ index+1 }}</td>
                                <td class="hover:bg-gray-400 cursor-pointer">{{ rows.name }}</td>
                                <td>{{ rows.client_id }}</td>
                                <td>{{ rows?.samples_count }}</td>
                                <td>{{ rows.received_date.slice(0, 10) }}</td>
                                <td>
                                    <div class="flex justify-center relative z-1 top-0 items-center space-x-4">
                                        <div @click="deleteModal(rows.id)">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="text-red-600 cursor-pointer" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7Zm2-5q0 .425.288.713T10 17q.425 0 .713-.288T11 16V9q0-.425-.288-.713T10 8q-.425 0-.713.288T9 9v7Zm4 0q0 .425.288.713T14 17q.425 0 .713-.288T15 16V9q0-.425-.288-.713T14 8q-.425 0-.713.288T13 9v7Z"/></svg>
                                        </div>
                                        <div @click="viewClient((rows.id), rows)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0000fe" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"/></svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="w-full my-6">
                        <div class="w-fit flex items-center justify-center bg-white mx-auto border border-gray-300 rounded-lg">
                            <div @click="prevPage" class="px-4 py-2 border-e border-gray-300 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="" d="m6.8 13l2.9 2.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T3.426 12q0-.2.063-.375T3.7 11.3l4.6-4.6q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L6.8 11H20q.425 0 .713.288T21 12q0 .425-.288.713T20 13H6.8Z"/></svg>
                            </div>
                            <p class="px-4 py-2 cursor-pointer" @click="jump(page)" :class="page === currentPage? 'text-[#0000fe] font-bold': 'text-black'" v-for="page in total_pages" :key="page">{{ page }}</p>
                            <div @click="nextPage" class="px-4 py-2 border-s border-gray-300 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="w-fit mx-auto py-8 text-center">
            <div class="mb-4 p-4 bg-[#0000fe] rounded-full mx-auto w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><path fill="none" stroke="#9AFF01" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6A1.5 1.5 0 0 0 12 4.5H7l-1.44-3H2A1.5 1.5 0 0 0 .5 3v8A1.5 1.5 0 0 0 2 12.5h10a1.5 1.5 0 0 0 1.5-1.5Z"/></svg>
            </div>
            <p class="text-2xl font-medium">No Clients</p>
            <p class="w-60 mb-8">There are no clients to view. Click to add client.</p>
            <router-link to="/admin/add-client" class="bg-[#0000fe] text-white px-[35px] py-[10px] font-[600] rounded-lg">Add Clients</router-link>
        </div>
    
        <div v-if="drop !== null" @click="drop = null" class="h-full w-full absolute top-0 left-0 z-10"></div>

        <!-- Delete Modal -->
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
    </div>
    </div>
    <div class="fixed top-20 w-fit h-fit rounded-lg bg-[#F1FCE0] border border-[#9AFF01] text-green-600 shadow-lg px-4 py-2 transition-left duration-300 ease" :class="alert ? 'left-16' : 'left-[-1000px]'">
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg>
        <div>
          <p class="text-xl font-medium">Success</p>
          <p class="">{{ message }}</p>
        </div>
      </div>
    </div>
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
</style>