<script setup lang="ts">
interface Props {
  title: string,
  value: number,
  link?: string 
}

defineProps<Props>();
</script>

<template>
  <a :href="link ?? '#'" target="_blank" rel='noreferrer'>
    <div class="flex flex-col justify-between gap-y-2 text-center md:text-left md:text-lg">
      <p>{{ title }}</p>
      <p class="font-bold text-lg md:text-2xl">{{ value }}</p>
    </div>
  </a>
</template>