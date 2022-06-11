<script setup lang="ts">
import { ref } from "vue";
import type { User } from '@/types/User';

interface Props {
  user: User,
  action?: any
}

defineProps<Props>();
const loaded = ref(false);
</script>

<template>
  <div 
    :class="{ 'blur-lg' : !loaded }"
    class="flex bg-card-light rounded-2xl shadow-2xl overflow-hidden transition select-none dark:bg-card-dark hover:bg-card-light-hover dark:hover:bg-card-dark-hover hover:cursor-pointer"
    @click="action(user.login)"
  >
    <img 
      :src="user.avatar_url" 
      alt="Default profile" 
      class="h-auto w-16 lg:w-32"
      @load="loaded = true;"
    />
    <div class="flex flex-col justify-center pl-4 lg:pl-8 py-4">
      <p class="md:text-lg lg:text-2xl">/{{ user.login }}</p>
    </div>
  </div>
</template>
