<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
  modelValue: string,
  action: any,
}

const props = defineProps<Props>();
defineEmits(['update:modelValue']);

function enterKeyAction(e: KeyboardEvent) {
  if (e.key === "Enter") {
    props.action();
  }
}

</script>

<template>
  <div class="relative flex justify-between px-2 py-2  rounded-2xl shadow-lg md:text-lg bg-card-light dark:bg-card-dark dark:text-light">
    <label htmlFor="searchInput" class="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-4">
      <Icon 
        icon="ion:search"
        class="text-blue-500 text-2xl md:text-4xl"
      />
    </label>
    <input
      type="text" 
      placeholder="Search GitHub username" 
      id="searchInput"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @keydown="enterKeyAction"
      class="pl-9 flex-1 bg-transparent appearance-none outline-none truncate md:pl-14"
    />
    <button 
      @click="action"
      class="bg-blue-600 text-light px-4 py-3 font-bold rounded-lg transition shadow-xl hover:bg-blue-500"
    >
      Search
    </button>
  </div>
</template>