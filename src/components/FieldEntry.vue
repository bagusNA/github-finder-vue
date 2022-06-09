<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { Icon } from "@iconify/vue";

interface Props {
  icon: HTMLImageElement | string,
  value?: string,
  href?: string
}

const props = defineProps<Props>();

const value = computed(() => props.value ?? "Not available");

const fieldTextClass = computed(() => ({
  'opacity-60' : !props.value
}));
</script>

<template>
  <div class="flex items-center gap-x-3">
    <span class="text-3xl">
      <Icon :icon="icon"/>
    </span>
    <span class="truncate" :class="fieldTextClass">
      <a v-if="href" :href="href">
        {{ value }}
      </a>
      <p v-else>
        {{ value }}
      </p>
    </span>
  </div>
</template>