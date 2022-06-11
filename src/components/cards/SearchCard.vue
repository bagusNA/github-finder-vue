<script setup lang="ts">
import type { User } from '@/types/User';

interface Props {
  user: User,
  action?: any
}

defineProps<Props>();
</script>

<template>
  <div 
    className="flex bg-card-light rounded-2xl shadow-2xl overflow-hidden transition select-none dark:bg-card-dark hover:bg-card-light-hover dark:hover:bg-card-dark-hover hover:cursor-pointer"
    @click="action(user.login)"
  >
    <img 
      :src="user.avatar_url" 
      alt="Default profile" 
      className="h-auto w-16 lg:w-32" 
    />
    <div className="flex flex-col justify-center pl-4 lg:pl-8 py-4">
      <p className="md:text-lg lg:text-2xl">/{{ user.login }}</p>
    </div>
  </div>
</template>
