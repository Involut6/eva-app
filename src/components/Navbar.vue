<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isLogout: false
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
})
</script>

<template>
    <div class="sticky top-0 z-10 bg-white w-full py-3 flex items-center justify-between px-4 md:px-[30px]">
      <div class="flex space-x-3 items-center">
        <img class="h-[50px]" src="../assets/enva-logo.png" alt="">
        <div class="">
          <p class="text-xl font-bold">EnvAccord</p>
          <p class="text-xl font-bold">Laboratory</p>
        </div>
        
      </div>
      <div class="flex gap-2 md:gap-8 items-center">
        <div class="flex gap-1">
         <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0000fe]" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M2 10q0-2.2.888-4.163T5.425 2.45l1.425 1.4Q5.5 5.025 4.75 6.613T4 10H2Zm18 0q0-1.8-.75-3.388t-2.1-2.762l1.425-1.4q1.65 1.425 2.538 3.388T22 10h-2ZM4 19v-2h2v-7q0-2.075 1.25-3.688T10.5 4.2v-.7q0-.625.438-1.063T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2H4Zm8 3q-.825 0-1.413-.588T10 20h4q0 .825-.588 1.413T12 22Z"/></svg>
        </div>
         <a href="#" class="hidden md:block text-[#0000fe] font-semibold">Notification</a>
       </div>
        <div @click="isLogout = true" class="flex gap-1 cursor-pointer">
          <div><svg xmlns="http://www.w3.org/2000/svg" class="text-[#0000fe]" width="25" height="25"  viewBox="0 0 20 20"><path fill="currentColor" d="M8.5 11.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM11 3.5a.5.5 0 0 0-.576-.494l-7 1.07A.5.5 0 0 0 3 4.57v10.86a.5.5 0 0 0 .424.494l7 1.071a.5.5 0 0 0 .576-.494V10h5.172l-.997.874a.5.5 0 0 0 .658.752l1.996-1.75a.5.5 0 0 0 0-.752l-1.996-1.75a.499.499 0 1 0-.658.752l.997.874H11V3.5Zm-1 .582V15.92L4 15V4.999l6-.917ZM12.5 16H12v-5h1v4.5a.5.5 0 0 1-.5.5ZM12 8V4h.5a.5.5 0 0 1 .5.5V8h-1Z"/></svg></div>
          <p class="text-[#0000fe] hidden md:block font-semibold">Logout</p>
        </div>
      </div>
      
    </div>
    <Teleport to="body">
        <div @click.self="logOutModal = true" v-if="isLogout" class="fixed top-0 left-0 h-screen w-screen z-20 flex justify-center items-center bg-opacity-75 bg-black">
        <div class="z-30 bg-white w-[343px] lg:w-[450px] h-fit rounded-lg shadow-lg p-5">
            <p class="text-xl font-semibold">Log Out</p>
            <p class="w-full">Are you sure you want to log out?</p>
            <div class="flex space-x-3 mt-8 w-fit ml-auto mr-0">
                <button class="bg-red-600 text-white px-3 py-2 rounded-lg font-medium"  @click="logout">Log out</button>
                <button class="bg-[#0000fe] text-white px-3 py-2 rounded-lg font-medium" @click="isLogout = false">Cancel</button>
            </div>
        </div>
    </div>
    </Teleport>
</template>