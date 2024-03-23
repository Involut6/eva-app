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
      error: false
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
            sessionStorage.setItem('token', response.data.access_token)
            this.$router.push('/admin');
            this.success = true
          } else {
            alert('Fields cannot be empty')
          }
        })
        .catch((error) => {
          this.error = true
          setTimeout(() => {
            this.error = false
          }, 2000);
          console.log(error)
        }).finally(()  => {
          this.isLoading = false
        })
      
    },
  }
})
</script>

<template>
  <div class="bg-[url('../assets/bottle.jpg')] bg-no-repeat bg-cover w-full lg:h-screen p-8 flex items-center justify-center">
      <div class="w-full md:w-fit h-fit flex rounded-[15px] shadow-2xl">
        <div class="hidden lg:block h-[520px] w-[500px] bg-[#0000ff] rounded-s-[15px] bg-[url('../assets/lab.jpg')] bg-no-repeat bg-cover overflow-hidden">
          <!-- <div class="w-full h-full bg-[#0000ff] opacity-60"></div> -->
        </div>

        <div class="bg-[white] w-full h-[520px] md:w-[500px] md:rounded-[15px] lg:rounded-none lg:rounded-e-[15px] pt-[50px] px-[30px] md:px-[100px] text-center">
         <div class="w-fit mx-auto mb-8"> <img src="../assets/enva-logo.png" alt="" class="h-[50px]"></div>
         <p class="font-semibold text-2xl text-gray-800">Sign in</p>
         <form @submit.prevent="login" class="h-fit mt-5">  
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
        <button type="submit" @keydown.up="login" role="button" @click="login" class="bg-[#0000ff] w-full text-center py-[7px] h-fit rounded-[5px] text-white text-[16px] font-semibold">
          <div v-if="isLoading" class="w-full justify-center flex space-x-4 items-center">
            <span>Please wait</span>
            <div class="lds-dual-ring"></div>
          </div>
          <span v-else>Login</span>
        </button>
      </form>
        </div>
      </div>
  </div>
  <div class="bg-white px-8 md:px-16 py-8 mx-auto">
    <div class="md:grid grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-16 md:space-y-0 space-y-4 w-full justify-between items-start">
      <div class="">
        <img src="../assets/enva-logo.png" class="w-32" />
        <div class="flex space-x-4 text-[#0000ff] w-full mt-4">
          <a href="https://www.facebook.com/EnvAccordLtd" class="block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
            </svg>
          </a>
          <a href="https://twitter.com/EnvAccord" class="block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/envaccordng" class="block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 16">
              <path fill="currentColor"
                d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599c.28.28.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233c0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92c.28-.28.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
          <a href="https://ng.linkedin.com/company/environmental-accord-nigeria-limited?_l=en_US" class="block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M4.001 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm1 2v14h14V5h-14Zm2.5 4a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm-1 1h2v7.5h-2V10Zm5.5.43c.584-.565 1.266-.93 2-.93c2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 1 0-3.5 0v4.25h-2V10h2v.43Z" />
            </svg>
          </a>
        </div>
      </div>
      <div class="space-y-3">
        <a href="https://www.envaccord.com/about-us-2/" class="block text-[#0000ff]">About us</a>
        <a href="https://www.envaccord.com/services-2/" class="block text-[#0000ff]">Services</a>
        <a href="https://www.envaccord.com/careers/" class="block text-[#0000ff]">Careers</a>
        <a href="https://www.envaccord.com/careers/" class="block text-[#0000ff]">Contact us</a>
      </div>
      <div class="space-y-3 col-span-2">
        <div>
          <p class="text-[#0000ff] font-bold">Address:</p>
          <p>36B Oguntona Crescent, Gbagada Phase 1, Lagos State, Nigeria.</p>
        </div>
        <div>
          <p class="text-[#0000ff] font-bold">Email: <span class="font-normal text-black">lab@envaccord.com</span></p>
        </div>
        <div>
          <p class="text-[#0000ff] font-bold">Phone: <span class="font-normal text-black text-sm">+2348023609591, +2348136363762</span></p>
        </div>
      </div>
      <div class="space-y-3 col-span-2">
        <p class="text-[#0000ff] font-bold">Our Vision</p>
        <p>To be the preferred environmental and sustainability risk management advisor in Africa.</p>
      </div>
      <div class="space-y-3 col-span-2">
        <p class="text-[#0000ff] font-bold">Our Mision</p>
        <p>We provide superior sustainability solutions, helping to build long term value for our clients and assuring the
          confidence of our stakeholders.</p>
      </div>
    </div>
    <div class="flex text-xs w-full mt-8 text-center items-center justify-center gap-3">
      <p class="">Copyright © 2023 - Dervac - All Right Reserved.</p>
      <p class="">Version 1.0</p>
    </div>
  </div>
  <!-- Success -->
    <div class="absolute top-16 w-64 h-fit rounded-lg bg-[#F1FCE0] border border-[#9AFF01] text-green-600 shadow-lg px-4 py-2 transition-left duration-300 ease" :class="success ? 'left-16' : 'left-[-1000px]'">
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg>
        <div v-if="success">
          <p class="text-xl font-medium">Success</p>
          <p class="">Redirecting to dashboard</p>
        </div>
      </div>
    </div>
    <!-- Error -->
    <div class="absolute top-16 w-fit h-fit rounded-lg bg-red-100 border border-red-400 text-red-600 shadow-lg px-4 py-2 transition-left duration-300 ease" :class="error ? 'left-16' : 'left-[-1000px]'">
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg>
        <div v-if="error">
          <p class="text-xl font-medium">Error</p>
          <p class="">Username or Password incorrect!</p>
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
