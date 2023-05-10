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
                {
                    title: 'Appearance',
                    status: ''
                },
                {
                    title: 'Colour',
                    status: ''
                },
                {
                    title: 'Conductivity',
                    status: ''
                },
                {
                    title: 'TDS',
                    status: ''
                },
                {
                    title: 'TSS',
                    status: ''
                },
                {
                    title: 'Turbidity',
                    status: ''
                },
                {
                    title: 'Salinity',
                    status: ''
                },
                {
                    title: 'Dissolved Oxygen',
                    status: ''
                },
                {
                    title: 'BOD 5',
                    status: ''
                },
                {
                    title: 'COD',
                    status: ''
                },
                {
                    title: 'Alkalinity',
                    status: ''
                },
                {
                    title: 'Hardness',
                    status: ''
                },
                {
                    title: 'Chloride',
                    status: ''
                },
                {
                    title: 'Nitrate',
                    status: ''
                },
                {
                    title: 'Sulphate',
                    status: ''
                },
                {
                    title: 'Total Phosphorus',
                    status: ''
                },
                {
                    title: 'Ammonia',
                    status: ''
                },
                {
                    title: 'Total Nitrogen',
                    status: ''
                },
                {
                    title: 'Sulphide',
                    status: ''
                },
                {
                    title: 'Heavy metals',
                    status: ''
                },
                {
                    title: 'Total Petroleum Hydrocarbon',
                    status: ''
                },
                {
                    title: 'Polycyclic Aromatic Hydrocarbon',
                    status: ''
                },
                {
                    title: 'BTEX',
                    status: ''
                },
                {
                    title: 'Oil/Grease',
                    status: ''
                },
                {
                    title: 'Total Coliform Count',
                    status: ''
                },
                {
                    title: 'E.Coli',
                    status: ''
                },
                {
                    title: 'THUB',
                    status: ''
                },
                {
                    title: 'THUF',
                    status: ''
                },
                {
                    title: 'THB',
                    status: ''
                },
                {
                    title: 'THF',
                    status: ''
                },
                {
                    title: 'Odour',
                    status: ''
                }

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
                      <div class="py-[10px] sm:py-[20px]">
                        <h1 class="text-[20px] font-[400]">First Name</h1>
                        <input class="w-[230px] md:w-[300px] lg:w-[400px] border  border-solid border-gray-300 border-1 p-[4px] rounded-[5px] focus:outline-none" type="text" placeholder="Enter First Name">
                      </div>

                      <div class="py-[10px] sm:py-[20px]">
                        <h1 class="text-[20px] font-[400]">Last Name</h1>
                        <input class="w-[230px] md:w-[300px] lg:w-[400px] border  border-solid border-gray-300 border-1 p-[4px] rounded-[5px] focus:outline-none" type="text" placeholder="Enter Last Name">
                      </div>
                    </div>

                    <div class="sm:flex gap-[10%] ">
                <div class="py-[10px]">
                    <h1 class="text-[20px] font-[400]">Sample name</h1>
                    <input class="w-[230px] md:w-[300px] lg:w-[400px] border  border-solid border-gray-300 border-1 p-[4px] rounded-[5px] focus:outline-none" type="text">
                </div>
                <div class="py-[10px]">
                    <h1 class="text-[20px] font-[400]">Sample status</h1>
                    <select class="border  border-solid border-gray-300 border-1 p-[5px] rounded-[5px]">
                        <option>Received</option>
                        <option>Preparation</option>
                        <option>Analysis in progress</option>
                        <option>Analysis Completed</option>
                    </select>
                </div>
               </div>
                
               <section class="relative w-[300px] ">
                <h1 class="text-[20px] font-[400] pt-[10px]">List of Analysis</h1>
               <div class="w-[240px] h-[200px] pt-[3px] px-[10px]  overflow-hidden  overflow-scroll  border border-gray-300 border-1 sm:w-fit overflow-y-scroll">
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
                 <!-- <button class="bg-black text-white my-[10px] px-[35px] py-[10px] font-[600] rounded-[15px] absolute right-[0]">Add Analysis</button>  -->
               </section>
               
               <div class="flex justify-end items-end  my-[15px]">
                <button class="bg-black text-white px-[35px] py-[10px] font-[600] rounded-[15px]">Submit</button>
               </div>  
                </section>
            </div>
        
        
        </div>
    </div>

</template>

<style scoped></style>