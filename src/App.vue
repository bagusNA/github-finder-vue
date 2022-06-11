<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

import type { User } from "./types/User";
import { defaultData } from "./defaultData";
import { searchUser, getUserData } from "./api/user";

import SearchBar from "./components/SearchBar.vue";
import UserCard from "./components/cards/UserCard.vue";
import SearchCard from "./components/cards/SearchCard.vue";
import SkeletonCard from "./components/cards/SkeletonCard.vue";
import NotFoundCard from "./components/cards/NotFoundCard.vue";

const darkMode = ref(true);
const isLoading = ref(false);
const isNotFound = ref(false);
const searchValue = ref('');
const searchResults = ref<User[]>([]);
const userData = ref<User>({} as User);

function toggleDarkMode() {
  darkMode.value = !darkMode.value;

  const rootHtml = document.getElementById("html-root");

  if (darkMode.value && !rootHtml?.classList.contains("dark")) {
    document.documentElement.classList.add("dark");
  } else if (!darkMode.value && rootHtml?.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
  }
};

async function handleSearch() {
  isLoading.value = true;

  isNotFound.value = false;
  userData.value = {} as User;

  let data: User[] = (searchValue.value !== '') 
                      ? await searchUser(searchValue.value, 10) 
                      : [];

  (data.length === 0) 
    ? isNotFound.value = true 
    : searchResults.value = data;
  
  isLoading.value = false;
}

async function searchCardAction(userLogin: string) {
  isLoading.value = true;
  let data = await getUserData(userLogin);
  isLoading.value = false;

  if (data.message === 'Not Found') return isNotFound.value = true;
  userData.value = data;
}
</script>

<template>
  <main class="min-h-screen flex justify-center bg-light text-sm text-dark font-mono transition lg:text-base dark:bg-dark dark:text-light">
    <div class="min-h-screen min-w-full flex flex-col gap-y-6 p-6 md:justify-center sm:container sm:min-w-0 lg:max-w-screen-lg">
      <!-- Header -->
      <div class="flex justify-between items-center px-2">
        <h1 class="text-xl font-bold md:text-2xl select-none hover:cursor-pointer">
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
            <p class="tracking-widest text-sm">LIGHT</p>
            <Icon icon="ion:sunny" />
          </template>
        </div>
      </div>

      <SearchBar v-model="searchValue" :action="handleSearch" />

      <SkeletonCard v-if="isLoading" />
      <NotFoundCard v-else-if="isNotFound" />
      <UserCard v-else-if="Object.keys(userData as Object).length !== 0" 
        :user="userData" 
      />
      <div v-else-if="searchResults.length !== 0" 
        class="grid grid-cols-2 gap-6 lg:gap-8"
      >
        <SearchCard v-for="user in searchResults" 
          :key="user.id" 
          :user="user"
          :action="searchCardAction"
        />
      </div>
      <UserCard v-else :user="defaultData" />
    </div>
  </main>
</template>
