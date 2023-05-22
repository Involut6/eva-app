<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['modelValue'],
    emits: ['update:modelValue']
})
</script>

<template>
    <div class="w-full">
      <h1 class="text-lg font-[400]">Client Name</h1>
      <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="w-full border  border-solid border-gray-300 border-1 p-2 rounded-[5px] focus:outline-none" type="text" placeholder="Enter client Name">
    </div>
</template>