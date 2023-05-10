<template>
  <div class="">
    <div class="bg-blue-300 py-[50px]">
      <div class="bg-white flex flex-col w-fit gap-y-[20px] mx-auto px-[20px] py-[30px] rounded-[10px]">
        <p class="font-bold text-[24px]">Sign in</p>

        <div class="flex flex-col border border-gray-200 border-solid px-[7px] py-[5px] rounded-[5px]">
          <p class="text-gray-400">Email address</p>

          <input type="Email" placeholder="Enter your Email" class="outline-none">
        </div>

        <div class="flex border border-gray-200 border-solid px-[10px] py-[5px] rounded-[5px] items-center">
          <div class="flex flex-col px-[7px] py-[5px] rounded-[5px]">
            <p class="text-gray-400">Password</p>
            <input type="Password" class="outline-none">
          </div>

          <button class="text-green-500 font-medium text-[18px]">SHOW</button>
        </div>

        <div class="bg-green-600 w-full text-center py-[5px] rounded-[5px] text-white text-[20px]">Sign in</div>

        <p class="text-center text-gray-500">Forgot Password? <button class="text-green-500">Recover here</button></p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
