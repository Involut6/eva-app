<script setup></script>

<template>
<div class="w-[100%] h-[100vh] bg-[#009efb]">
     <p>this is sample</p>
    <div class="mx-auto my-[50px] w-fit">
       <div class="sm:flex gap-[10%] ">
        <div>
            <h1 class="text-[20px] font-[600]">Sample name</h1>
            <input type="text">
        </div>
        <div>
            <h1 class="text-[20px] font-[600]">Sample status</h1>
            <select>
                <option>Samples Received</option>
                <option>Samples in Preparation</option>
                <option>Sample Analysis in progress</option>
                <option>Sample Analysis Completed</option>
            </select>
        </div>
       </div>

       <div class="test">
        <!-- <select>
            <option>Test</option>
            <option>ph test</option>
            <option>Temperature</option>
            <option>Appearance</option>
            <option>Colour</option>
            <option>Conductivity</option>
            <option>TDS</option>
        </select> -->
        <div class="flex bg-[white] w-[190px] border border-solid border-black border-2 px-[10px] mt-[20px]"><p>Test</p> <p></p></div>
        <div class="bg-[white] w-[190px] h-[200px] pt-[3px] px-[10px] overflow-hidden  overflow-y-scroll">
            <div class="flex  justify-between"><p>Temperature </p> <input type="checkbox"></div>
            <div class="flex  justify-between"><p>Appearance </p> <input type="checkbox"></div>
            <div class="flex  justify-between"><p>Colour </p> <input type="checkbox"></div>
            <div class="flex  justify-between"><p>Conductivity </p> <input type="checkbox"></div>
            <div class="flex  justify-between"><p>TDS </p> <input type="checkbox"></div>
            <div class="flex  justify-between"><p>TSS</p> <input type="checkbox"></div>
            <div class="flex  justify-between"><p>Turbidity </p> <input type="checkbox"></div>
            <div class="flex  justify-between"><p>Salinity </p> <input type="checkbox"></div>
            <div class="flex  justify-between"><p>Dissolved Oxygen </p> <input type="checkbox"></div>
            <div class="flex  justify-between"><p>BOD 5 </p> <input type="checkbox"></div>
            <div class="flex  justify-between"><p>COD </p> <input type="checkbox"></div>
            <div class="flex  justify-between"><p>Alkalinity</p> <input type="checkbox"></div>
            <div class="flex  justify-between"><p>Hardness </p> <input type="checkbox"></div>  
            <div class="flex  justify-between"><p>Chloride </p> <input type="checkbox"></div> 
            <div class="flex  justify-between"><p>Nitrate </p> <input type="checkbox"></div> 
            <div class="flex  justify-between"><p>Sulphate </p> <input type="checkbox"></div> 
            <div class="flex  justify-between"><p>Total Phosphorus </p> <input type="checkbox"></div> 
            <div class="flex  justify-between"><p>Ammonia </p> <input type="checkbox"></div> 
            <div class="flex  justify-between"><p>Total Nitrogen </p> <input type="checkbox"></div> 
            <div class="flex  justify-between"><p>Sulphide </p> <input type="checkbox"></div> 
            <div class="flex  justify-between"><p>Heavy metals </p> <input type="checkbox"></div> 
        </div>
       </div>
    </div>
    <button class="bg-black text-white px-[35px] py-[10px] font-[600] rounded-[15px] absolute end-0 bottom-0 ">Submit</button>

</div>
</template>

<style scoped></style>