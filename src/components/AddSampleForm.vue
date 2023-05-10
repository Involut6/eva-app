<script setup></script>

<template>
<div class="w-[100%] h-[100vh] px-[40px] ">
     <p class="text-[20px]">Home / Add samples</p>

    <div class="my-[20px]  bg-[white] py-[10px] shadow-xl">
        <div class="py-[20px] flex justify-between px-[30px] ">
            <h1 class="font-[600] text-[18px]">ADD SAMPLE</h1>
            <p class="text-[#009efb] text-[18px]">ID:002</p>
        </div>

        <div class="bg-gray-300 w-[100%] h-[1px] mx-0"></div>

        <section class="px-[30px] py-[20px]">
            <div class="sm:flex gap-[10%] ">
        <div>
            <h1 class="text-[20px] font-[400]">Sample name</h1>
            <input class="w-[230px] md:w-[300px] lg:w-[400px] border  border-solid border-gray-300 border-1 p-[4px] rounded-[5px]" type="text">
        </div>
        <div>
            <h1 class="text-[20px] font-[400]">Sample status</h1>
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
            <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Temperature </p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none" >
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>
          
         <tr>
             <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Appearance </p> </div></td>
             <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Colour </p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Conductivity </p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>TDS </p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>TSS</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Turbidity</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Salinity</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Dissolved Oxygen</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>BOD 5</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>COD</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Alkalinity</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Hardness</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Chloride</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Nitrate</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Sulphate</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Total Phosphorus</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Ammonia</p></div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Total Nitrogen</p></div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>
         
         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Sulphide</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Heavy metals</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Total Petroleum Hydrocarbon</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Polycyclic Aromatic Hydrocarbon</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>BTEX</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Oil/Grease</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>Total Coliform Count</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>E.Coli</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>THUB</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>THUF</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>THB</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
                    <option value="">Ongoing</option>
                    <option value="">Completed</option>
                </select>
            </td>
         </tr>

         <tr>
            <td class="pe-[20px] py-[5px]"><div class="flex gap-[5px] justify-start item-center "><input type="checkbox"><p>THF</p> </div></td>
            <td class="ps-[20px]"> 
                <select class="outline-none">
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
</template>

<style scoped></style>