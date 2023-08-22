<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['open'],
    emits: ['close'],
    data() {
        return {

        }
    }
})
</script>

<template>
    <div @click.self="$emit('close')"  v-if="open" class="h-screen w-screen fixed top-0 left-0 flex justify-center z-10 items-center bg-opacity-60 bg-black">
        <div class="container mx-auto p-5 rounded-lg bg-white w-[370px] md:w-[90vw] lg:w-[800px] relative z-80 h-[70vh] lg:h-fit overflow-scroll">
           <div class="flex justify-between md:justify-end">
            <svg @click="$emit('close')" class="md:hidden" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"/></svg>
            <img src="../assets/enva-logo.png" alt="" class="h-[60px]">
        </div> 
          <div class="md:px-[60px]">
             <p class="text-xl font-bold py-3">Customer Satisfaction Survey</p>
             
             <p class="text font-semibold py-3">Overall level of satisfaction.</p>
             <div class="mb-2">
                <p class="text-[17px]">1. What is your overall level of satisfaction with our laboratory services?</p>
                <div class="md:flex justify-between">
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Very pleased</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">pleased</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Adequate</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Dissatisfied</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Strongly dissatisfied</label>
                   </div>
                </div>
             </div>

             <div class="mb-2">
                <p class="text-[17px]">2. Will you use our service again?</p>
                <div class="md:flex gap-[7%]">
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Yes</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Maybe</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">NO</label>
                   </div>
                </div>
             </div>

             <div class="mb-2">
                <p class="text-[17px]">3. Did you receive value for the fees charged?</p>
                <div class="md:flex gap-[7%]">
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Yes</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">Maybe</label>
                   </div>
                   <div class="flex gap-[7px] justify-start item-center ">
                       <input type="checkbox">
                       <label class="w-fit">NO</label>
                   </div>
                </div>
             </div>
             <p class="text-[17px]">4. What can we do to serve you better?</p>
             <textarea rows="6" type="text" class="w-full my-2 border border-black p-2 rounded-lg" />
          </div>
          <div class="flex justify-end items-center space-x-8 mt-[15px] px-[30px]">
                <p @click="$emit('close')" class="font-bold cursor-pointer text-xl text-red-600">Close</p>
                <button class="bg-[#0000fe] text-white px-[35px] py-[10px] font-[600] rounded-lg">Submit</button>
               </div>
        </div>
    </div>
</template>