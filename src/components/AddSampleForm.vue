<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            analysis: [
                {
                    title: 'Temperature',
                    status: ''
                },

            ]
        }
    }
})
</script>

<template>
    <div class="container mx-auto h-min-screen w-full">
        <div class="w-[100%] h-[100vh] p-[30px]">
             <div class="flex space-x-2 items-center">
                <p>Home</p>

                <p class="text-[#009efb]">Add samples</p>
             </div>

            <div class="my-[20px] bg-[white] py-[10px] shadow-xl">
                <div class="py-[20px] border-b flex justify-between px-[30px] ">
                    <h1 class="font-[600] text-[18px]">Add Sample</h1>
                </div>            
                <section class="px-[30px] py-[20px]">
                    <div class="sm:flex gap-[10%] ">
                <div>
                    <h1 class="font-[400]">Sample name</h1>
                    <input class="w-[230px] md:w-[300px] border border-gray-300 border-1 p-[4px] rounded-[5px]" type="text">
                </div>
                <div>
                    <h1 class="font-[400]">Sample status</h1>
                    <select class="border  border-solid border-gray-300 border-1 p-[5px] rounded-[5px]">
                        <option>Samples Received</option>
                        <option>Samples in Preparation</option>
                        <option>Sample Analysis in progress</option>
                        <option>Sample Analysis Completed</option>
                    </select>
                </div>
               </div>
           
               <div class=" w-fit h-[200px] pt-[3px] px-[10px]  overflow-hidden  overflow-y-scroll  border border-gray-300 border-1  mt-[50px]">
                 <table>
                    <tr v-for="item in analysis">
                    <td class="pe-[20px] py-[5px]">
                        <div class="flex gap-[5px] justify-start item-center ">
                            <input type="checkbox">
                            <p>{{item.title}}</p>
                        </div>
                    </td>
                    <td class="ps-[20px]"> 
                        <select class="outline-none" >
                            <option value="">Ongoing</option>
                            <option value="">Completed</option>
                        </select>
                    </td>
                 </tr>
                 </table>

               </div>
               <div class="flex justify-end items-end  my-[15px]">
                <button class="bg-black text-white px-[35px] py-[10px] font-[600] rounded-[15px]">Submit</button>
               </div>  
                </section>
            </div>
        
        
        </div>
    </div>

</template>

<style scoped></style>