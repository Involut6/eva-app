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
    <div class="fixed bottom-0 bg-[#009efb] w-[100%] py-3 lg:hidden">
        <div class="flex justify-around">
            <router-link to="/" class="text-white flex flex-col items-center hover:cursor-pointer">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"/></svg></div>
                <div :class="$route.path === '/' ? 'border-b-2 border-white' : ''">Home</div>
            </router-link>
            <router-link :to="{name: 'Add-sample'}" class="text-white flex flex-col items-center hover:cursor-pointer">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 21h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Zm.5 2q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23ZM9 7V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Zm4 11v-2h2.075Q11 17.5 11 18t.075 1H9Zm0-6v-2h9q-1.425 0-2.675.537T13.125 13H9Z"/></svg></div>
                <div :class="$route.name === 'Add-sample' ? 'border-b-2 border-white' : ''">Add</div>
            </router-link>
        </div>
    </div>
</template>
