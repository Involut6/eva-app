<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { postClient } from '../services/DataServices';
const { analysis } = storeToRefs(useSampleStore());

const newSample = ref({
    title: '',
    status: '',
    sampleAnalysis: []
})

const drop = ref(false);
const sample = ref(1)

</script>
<script>
import { useSampleStore } from '../stores/sample';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            id: '',
            name: '',
            type: '',
            date: '',
            sampleName:'',
            selected: [],
            isLoading: false,
            alert: false,
            message: '',
            error: false
        }
    },
    methods: {
        async addClient() {
            const [next, text] = this.date.split('T');
            const [year, month, day] = next.split('-')
            const formattedDate =`${day}-${month}-${year}`
            this.isLoading = true
            postClient({
                name: this.name,
                type: this.type,
                received_date: formattedDate,
                client_id: this.id,
                sample: {
                    name: this.sampleName,
                    analyses: this.selected
                }
            }).then((response) => {
                    console.log(response)
                    this.message = response.data.message;
                    console.log(this.message)
            }).catch(error => {
              this.error = true
              if (error.message === "Cannot read properties of undefined (reading 'data')")
              {
                this.message = 'All fields are required!'
              } else {
                this.message = 'Please refresh and try again!'
              }
            }).finally(() =>{
                this.isLoading = false
                this.alert = true
                setTimeout(() => {
                    this.alert = false
                }, 3000);
                this.name = ''
                this.type = ''
                this.id = ''
                this.sampleName = ''
                this.selected = []
            })
        },
    },

})
</script>

<template>
    <div class="container mx-auto h-min-screen w-full">
        <div class="w-[100%] h-[100vh] p-4 md:p-[30px] mb-[150px]">
             <div class="flex space-x-2 items-center">
                <router-link to="/"><p class="text-[#0000fe]">Home</p></router-link>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"/></svg>
                <p>Add Clients</p>
             </div>
            <div class="my-[20px] bg-[white] py-[10px] shadow-xl">
                <div class="py-[20px] border-b flex justify-between md:px-[30px] px-4">
                    <h1 class="font-[600] text-[18px]">Add Client</h1>
                </div>
                <section class="px-4 md:px-[30px] py-[20px]">
                    <div class="grid w-full gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        
                      <div class="w-full">
                        <h1 class="text-lg font-[400]">Client ID</h1>
                        <input class="w-full border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" type="text" placeholder="Enter client ID" v-model="id">
                      </div>

                      <div class="w-full">
                        <h1 class="text-lg font-[400]">Client Name</h1>
                        <input class="w-full border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" type="text" placeholder="Enter client Name" v-model="name">
                      </div>

                      <div class="">
                        <h1 class="text-lg font-[400]">Type of project</h1>
                        <input class="w-full border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" type="text" placeholder="Project type" v-model="type">
                      </div>
                      <div class="">
                        <h1 class="text-lg font-[400]">Date Received</h1>
                        <input class="w-full border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" type="date" v-model="date" placeholder="dd-mm-yyyy">
                      </div>
                      <div class="">
                        <h1 class="text-lg font-[400]">Sample Type</h1>
                        <input class="w-full border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" v-model="sampleName" type="text">
                    </div>
                    <!-- <div class="">
                        <h1 class="text-lg font-[400]">Sample status</h1>
                        <select class="border w-full focus:outline-none border-solid border-gray-300 border-1 p-2 pr-2 rounded-[5px]" v-model="newSample.status">
                            <option disabled value="">Status</option>
                            <option>Received</option>
                            <option>Analysis in progress</option>
                            <option>Analysis Completed</option>
                            <option>QA/QC in progress</option>
                            <option>Sample preparation in progress</option>
                            <option>QA/QC in completed</option>
                            <option>Result ready to download</option>
                        </select>
                    </div> -->
                    <section class="relative">
                        <h1 class="text-lg font-[400]">List of Analysis</h1>
                        <div @click="() => drop = !drop" class="flex w-full items-center justify-between py-1 pl-3 rounded border border-gray-300 w-[200px]">
                            <p class="">Analysis</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414L12 15.001Z"/></svg>
                        </div>
                        <div v-if="drop" class="absolute top-[80px] right-0 z-10 bg-white w-[300px] h-[250px] py-2 shadow rounded-lg px-[10px] space-y-2 border-1 sm:w-fit overflow-y-scroll">
                            <div v-for="item in analysis" :key="item.name" class="flex w-full justify-between items-center">
                                <div class="flex gap-[5px] justify-start item-center ">
                                    <input type="checkbox" :id="item.name" :value="item.name" v-model="selected">
                                    <label :for="item.name" class="w-fit">{{item.name}}</label>
                                </div>
                                <!-- <select class="focus:outline-none" v-model="item.status">
                                    <option value="" disabled>Status</option>
                                    <option v-for="option in item.analysisStatus" :value="option">{{ option }}</option>
                                </select> -->
                            </div>
                         </div>
                    </section>
                </div>
            </section>
                <!-- <div class="flex justify-start items-end w-fit  my-[15px] px-[30px] mr-0 ml-auto">
                    <button class="bg-black text-white px-[35px] py-[10px] font-[600] rounded-lg">Add more</button>
               </div> -->
            <div @click="addClient" class="flex justify-start items-end  my-[15px] px-[30px]">
                <button class="bg-black text-white px-[35px] py-[10px] font-[600] rounded-lg">
                    <div v-if="isLoading" class="w-full justify-center flex space-x-4 items-center">
                      <span>Please wait</span>
                      <div class="lds-dual-ring"></div>
                    </div>
                    <span v-else>Add Client</span>
                </button>
                
               </div>
            </div>
        
        
        </div>
    </div>
    <div v-if="drop" @click="drop = false" class="w-[79vw] h-screen z-1 absolute top-0 left-0"></div>
    <div v-if="error" class="fixed top-20 w-fit h-fit rounded-lg bg-red-100 border border-red-400 text-red-600 shadow-lg px-4 py-2 transition-left duration-500 ease-in" :class="alert ? 'left-16' : 'left-[-1000px]'">
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.713T12 15q-.425 0-.713.288T11 16q0 .425.288.713T12 17Zm-1-4h2V7h-2v6Zm1 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
        <div>
          <p class="text-xl font-medium">Error</p>
          <p class="">{{ message }}</p>
        </div>
      </div>
    </div>
    <div v-else class="fixed top-20 w-fit h-fit rounded-lg bg-[#F1FCE0] border border-[#9AFF01] text-green-600 shadow-lg px-4 py-2 transition-left duration-500 ease-in" :class="alert ? 'left-16' : 'left-[-1000px]'">
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
.lds-dual-ring {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>