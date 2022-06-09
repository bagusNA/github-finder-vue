<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

import UserCard from "./components/UserCard.vue";
import SearchBar from "./components/SearchBar.vue";
import { defaultData } from "./defaultData";

const searchValue = ref('');
const darkMode = ref(true);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;

  const rootHtml = document.getElementById("html-root");

  if (darkMode.value && !rootHtml?.classList.contains("dark")) {
    document.documentElement.classList.add("dark");
  } else if (!darkMode.value && rootHtml?.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
  }
};
</script>

<template>
  <main
    class="min-h-screen flex justify-center bg-light text-sm text-dark font-mono transition lg:text-base dark:bg-dark dark:text-light"
  >
    <div
      class="min-h-screen min-w-full flex flex-col gap-y-6 p-6 md:justify-center sm:container sm:min-w-0 lg:max-w-screen-lg"
    >
      <!-- Header -->
      <div
        class="flex justify-between items-center px-2 hover:cursor-pointer"
      >
        <h1 class="text-xl font-bold md:text-2xl">
          <a href="/">GitHub-finder</a>
        </h1>
        <div
          class="flex items-center gap-x-2 opacity-80 select-none transition hover:opacity-100 hover:cursor-pointer"
          @click="toggleDarkMode"
        >
          <template v-if="darkMode">
            <p class="tracking-widest text-sm">DARK</p>
            <Icon icon="ion:moon" />
          </template>
          <template v-else>
            <p class="tracking-widest text-sm">Light</p>
            <Icon icon="ion:sunny" />
          </template>
        </div>
      </div>

      <SearchBar :value="searchValue" action="() => return"/>

      <UserCard :user="defaultData" />
    </div>
  </main>
</template>
