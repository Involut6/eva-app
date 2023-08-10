<script>
import axios from 'axios';
import { defineComponent } from 'vue';
import { UserLogin } from '../services/DataServices.js';

export default defineComponent({
  data() {
    return {
      username: '',
      password: '',
      isLoading: false,
      validate: false,
      success: false,
    }
  },
  watch: {
    validate() {
      if (this.username !== '' && this.password !== '') {
        this.validate = true;
      }
    }
  },
  methods: {
    async login() {
        this.isLoading = true
        await UserLogin(this.username, this.password)
        .then((response) => {
          console.log(response);
          if (response.status = 200) {
            localStorage.setItem('token', response.data.access_token);
            this.$router.push('/');
            this.isLoading = false,
            this.success = true
          } else {
            alert('Fields cannot be empty')
          }
        })
        .catch((error) => {
          this.isLoading = false
          alert(error)
        })
      
    },
  }
})
</script>

<template>
  <div class="bg-gray-300 w-full h-screen flex items-center justify-center">
      <div class="w-full md:w-fit h-fit flex rounded-[15px] shadow-2xl">
        <div class="hidden lg:block h-[520px] w-[500px] bg-[#0000ff] rounded-s-[15px] bg-[url('../assets/Lab-1.jpg')] bg-no-repeat bg-cover overflow-hidden">
          <!-- <div class="w-full h-full bg-[#0000ff] opacity-60"></div> -->
        </div>

        <div class="bg-[white] w-full h-[520px] md:w-[500px] md:rounded-[15px] lg:rounded-e-[15px] pt-[50px] px-[30px] md:px-[100px] text-center">
         <div class="border border-black border-1 w-fit mx-auto rounded-full p-[7px] bg-gray-100 mb-[15px]"> <img src="../assets/download-removebg-preview.png" alt="" class="w-[80px] "></div>
         <p class="font-semibold text-2xl text-gray-800">Sign in</p>
         <div class="h-fit mt-5">  
        <div class="mb-4">
          <p class="text-gray-800 flex justify-start">Username</p>
         <input placeholder="Enter your username" class="block focus:outline-none w-full px-3 py-2 border mt-2 mb-4 rounded-lg" v-model="username" />
        </div>
        
        <div class="mb-4">
          <p class="text-gray-800 flex justify-start">Password</p>
          <div class="flex border mt-2 justify-between rounded-[5px] px-3 py-2 items-center">
            <input placeholder="Enter your password" type="password" class="block focus:outline-none w-full rounded-lg" v-model="password" />        
            <!-- <div class="flex" id="eye-icons">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
                  <path fill="currentColor" d="M243.66 126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87 72.22 170.7 52 128 52S56.13 72.22 39.17 89.18c-18.31 18.31-26.49 36.44-26.83 37.2a4.08 4.08 0 0 0 0 3.25c.34.77 8.52 18.89 26.83 37.2c17 17 46.14 37.17 88.83 37.17s71.87-20.21 88.83-37.17c18.31-18.31 26.49-36.43 26.83-37.2a4.08 4.08 0 0 0 0-3.25Zm-32.7 35c-23.07 23-51 34.62-83 34.62s-59.89-11.65-83-34.62A135.71 135.71 0 0 1 20.44 128A135.69 135.69 0 0 1 45 94.62C68.11 71.65 96 60 128 60s59.89 11.65 83 34.62A135.79 135.79 0 0 1 235.56 128A135.71 135.71 0 0 1 211 161.38ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44Zm0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36Z"/>
                </svg>
              </div>

              <div class="hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
                  <path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38L67.59 67.5C29.34 89 13 124.81 12.34 126.38a4.08 4.08 0 0 0 0 3.25c.34.77 8.52 18.89 26.83 37.2c17 17 46.14 37.17 88.83 37.17a122.59 122.59 0 0 0 53.06-11.69l24 26.38a4 4 0 1 0 5.92-5.38Zm98.1 119.85a36 36 0 0 1-48.1-52.94ZM128 196c-32 0-59.89-11.65-83-34.62A135.81 135.81 0 0 1 20.44 128c3.65-7.23 20.09-36.81 52.68-54.43l22.45 24.7a44 44 0 0 0 59 64.83l20.89 23A114.94 114.94 0 0 1 128 196Zm6.78-103.36a4 4 0 0 1 1.49-7.86a44.15 44.15 0 0 1 35.54 39.09a4 4 0 0 1-3.61 4.35h-.38a4 4 0 0 1-4-3.63a36.1 36.1 0 0 0-29.04-31.95Zm108.88 37c-.41.91-10.2 22.58-32.38 42.45a4 4 0 0 1-2.67 1a4 4 0 0 1-2.67-7A136.71 136.71 0 0 0 235.56 128A136.07 136.07 0 0 0 211 94.62C187.89 71.65 160 60 128 60a122 122 0 0 0-20 1.63a4 4 0 0 1-1.32-7.89A129.3 129.3 0 0 1 128 52c42.7 0 71.87 20.22 88.83 37.18c18.31 18.31 26.49 36.44 26.83 37.2a4.08 4.08 0 0 1 0 3.25Z"/>
                </svg>
              </div>
            </div> -->
          </div>
        </div>
        <button @keydown.up="login" role="button" @click="login" class="bg-[#0000ff] w-full text-center py-[7px] h-fit rounded-[5px] text-white text-[16px] font-semibold">
          <div v-if="isLoading" class="w-full justify-center flex space-x-4 items-center">
            <span>Please wait</span>
            <div class="lds-dual-ring"></div>
          </div>
          <span v-else>Login</span>
        </button>
      </div>
        </div>
      </div>
  </div>
    <div class="absolute top-16 w-64 h-fit rounded-lg bg-[#F1FCE0] border border-[#9AFF01] text-green-600 shadow-lg px-4 py-2 transition-left duration-300 ease" :class="success ? 'left-16' : 'left-[-1000px]'">
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg>
        <div>
          <p class="text-xl font-medium">Success</p>
          <p class="">Redirecting to dashboard</p>
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
