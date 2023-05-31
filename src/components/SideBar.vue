<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {

        }
    }
})
</script>

<template>
    <div>
        <div class="bg-[#0000fe] hidden lg:block py-12 h-screen overflow-hidden">
            <!-- <div class="flex flex-col items-center mb-10">
                <div class="w-fit mb-[9px] rounded-[50%] p-[6px] border-[5px] border-b-[#99ff00] border-b-l-[#99ff00] border-t-[#0000fe] border-l-[#0000fe] border-r-[#99ff00]">
                    <div class="bg-black w-[80px] h-[80px] rounded-[50%]"></div>
                </div>
                <p class="text-white text-md">Admin</p>
            </div>  -->
            <div class="flex flex-col gap-2 text-lg">
                <router-link to="/" :class="$route.path === '/' ? 'bg-white text-[#0000fe]' : 'text-white'" class="flex gap-4 items-center cursor-pointer hover:bg-white hover:text-[#0000fe] px-[1.4rem] py-2">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"/></svg></div>
                    <p class="">Dashboard</p>
                </router-link>
                <router-link :to="{name: 'Add-sample'}" :class="$route.path === '/add-sample' ? 'bg-white text-[#0000fe]' : 'text-white'" class="flex gap-4 items-center cursor-pointer hover:bg-white hover:text-[#0000fe] px-[1.4rem] py-2">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 21h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Zm.5 2q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23ZM9 7V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Zm4 11v-2h2.075Q11 17.5 11 18t.075 1H9Zm0-6v-2h9q-1.425 0-2.675.537T13.125 13H9Z"/></svg></div>
                    <p>Add Clients</p>
                </router-link>
                <router-link :to="{name: 'Feedback'}" :class="$route.path === '/feedback' ? 'bg-white text-[#0000fe]' : 'text-white'" class="flex gap-4 items-center cursor-pointer hover:bg-white hover:text-[#0000fe] px-[1.4rem] py-2">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 21h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Zm.5 2q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23ZM9 7V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Zm4 11v-2h2.075Q11 17.5 11 18t.075 1H9Zm0-6v-2h9q-1.425 0-2.675.537T13.125 13H9Z"/></svg></div>
                    <p>Feedback</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped></style>