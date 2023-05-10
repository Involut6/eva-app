<script setup></script>

<template>
    <div>
        <div class="bg-[#009efb] py-8 fixed h-[100%] top-0 left-0 w-[295px] overflow-auto">
            <h1 class="mb-6 text-white text-center text-3xl font-semibold">EnvaAccord</h1>
        <div class="flex flex-col items-center mb-10">
            <div class="w-fit mb-[9px] rounded-[50%] p-[6px] border-[5px] border-b-white border-b-l-white border-t-[#009efb] border-l-[#009efb] border-r-white">
                <div class="bg-black w-[80px] h-[80px] rounded-[50%]"></div>
            </div>
            <p class="text-white text-2xl">Dr. Samuel</p>
            <p class="text-white text-md">Admin</p>
        </div> 
        <div class="px-[1.4rem] flex flex-col gap-4">
            <div class="flex gap-4 items-center cursor-pointer">
                <div><svg width="24px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19V12Z" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"></path> <path d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V12C10 12.5523 9.55228 13 9 13H5C4.44772 13 4 12.5523 4 12V5Z" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"></path> <path d="M4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V17Z" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"></path> <path d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H14C13.4477 8 13 7.55228 13 7V5Z" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"></path> </g></svg></div>
                <router-link to="/"><p class="text-white">Dashboard</p></router-link>
            </div>
            <div class="flex gap-4 items-center cursor-pointer">
                <div><svg width="24px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19V12Z" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"></path> <path d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V12C10 12.5523 9.55228 13 9 13H5C4.44772 13 4 12.5523 4 12V5Z" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"></path> <path d="M4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V17Z" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"></path> <path d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H14C13.4477 8 13 7.55228 13 7V5Z" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"></path> </g></svg></div>
                <router-link :to="{name: 'Add-sample'}"><p class="text-white">Add Samples</p></router-link>
            </div>
        </div>
        </div>
    </div>
</template>

<style scoped></style>