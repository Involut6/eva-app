<script>
import { defineComponent } from 'vue';
import { getClientById } from '../services/DataServices';
import router from '../router';

export default defineComponent({
    data() {
        return {
            showSample: false,
            id: '',
            client: [],
            show: false,
            isLoading: false,
            status: false,
            message: ''
        }
    },
    methods: {
        async proceed() {
          this.isLoading = true
          getClientById(this.id).then(response => {
            console.log(response);
            if (response.status === 200) {
              this.client = response.data.data.client;
              this.status = true
              this.message = 'success'
              this.$router.push(`/client/${this.id}`)
              console.log(response.data.data)
            }
          }).catch(error => {
            console.log(error)
              this.status = false
              this.message = 'error'
          }).finally(() => {
            this.isLoading = false
          })
        },

    }
})
</script>

<template>
    <div class="h-screen w-screen flex items-center bg-gray-300">
        <div class="w-fit h-fit mx-auto items-center flex md:shadow-2xl">
        <div class="hidden lg:block relative h-[520px] w-[500px] bg-black rounded-s-[15px] overflow-hidden">
          <div class="w-full h-full bg-black opacity-60 absolute">
            <img src="../assets/Kinetic-Labs-access-to-lab-space-and-facilities.jpg" alt="" class="w-full h-full">
          </div>
          <div class="absolute  bottom-[8%] text-center p-4">
            <h1 class="font-semibold text-[30px] font-[700] text-white mb-2">Welcome to EnvAccord</h1>
            <p class="text-xl text-white">We are a leading provider of specialised environmental and sustainability risk management advisory services in Africa.</p></div> 
        </div>

        <div class="bg-[white] md:h-[520px] md:w-[500px] md:rounded-e-[15px] pt-[50px] p-10 md:px-[100px] text-center">
          <div class="border border-black border-1 w-fit mx-auto rounded-full p-[7px] bg-gray-100 mb-[10px]"> <img src="../assets/download-removebg-preview.png" alt="" class="w-[80px] "></div>
           <div class="">
            <p class="text-xl font-semibold py-3">Enter Client ID</p>
            <p class="text-sm">Enter the Client Id to check the status and result of your sample</p>
            <form @submit.prevent="proceed">
             <label class="flex justify-start mt-[20px]">Sample ID</label>
             <input placeholder="Enter client Id" class="block focus:outline-none w-full px-3 py-2 border mt-2 mb-4 rounded-lg" v-model="id" />
              <button type="submit" @keydown.up="proceed" role="button" @click="proceed" class="bg-[#0000ff] w-full text-center py-[7px] h-fit rounded-[5px] text-white text-[16px] font-semibold">
                <div v-if="isLoading" class="w-full justify-center flex space-x-4 items-center">
                  <span>Please wait</span>
                  <div class="lds-dual-ring"></div>
                </div>
                <span v-else>Proceed</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute top-16 w-64 h-fit rounded-lg  shadow-lg px-4 py-2 transition-left duration-300 ease" :class="status && message === 'success' ? 'left-16 bg-[#F1FCE0] border border-[#9AFF01] text-green-600' : !status && message === 'error' ? 'left-16 bg-red-100 border border-red-400 text-red-600' : 'left-[-1000px]'">
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg>
        <div v-if="status">
          <p class="text-xl font-medium">Success</p>
          <p class="">Redirecting to dashboard</p>
        </div>
        <div v-else>
          <p class="text-xl font-medium">Error</p>
          <p class="">Client ID incorrect!</p>
        </div>
      </div>
    </div>
</template>

<style scoped>
table, th, td {
  border: 1px solid;
}
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