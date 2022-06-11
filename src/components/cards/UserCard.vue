<script setup lang="ts">
import type { User } from "../../types/User";
import StatEntry from "../StatEntry.vue";
import FieldEntry from "../FieldEntry.vue";

interface Props {
  user: User
}

defineProps<Props>();
</script>

<template>
  <div class="flex bg-card-light p-5 rounded-2xl shadow-2xl lg:p-8 dark:bg-card-dark">
    <div class="flex flex-1 gap-x-12">
      <!-- {/* Profile picture for lg screen */} -->
        <img 
          :src="user.avatar_url"
          alt="Default profile"
          width="150"
          height="150"
          class="rounded-full hidden self-start lg:block"
        />
      <div class="flex-1 flex flex-col gap-y-6">
        <!-- {/* Main info */} -->
        <div class="flex gap-x-6 lg:gap-none">
          <!-- {/* Profile picture for mobile screen */} -->
          <div class="min-w-fit flex items-center lg:hidden">
            <img 
              :src="user.avatar_url" 
              alt="Default profile" 
              width="100" 
              height="100" 
              class="rounded-full" 
            />
          </div>
          <div class="flex flex-col justify-center gap-y-1 lg:flex-row lg:justify-between lg:w-full">
            <div class="flex flex-col justify-center gap-y-1">
              <h2 class="font-bold text-xl">{{ user.name }}</h2>
              <a 
                class="text-blue-400" 
                :href="user.html_url"
              >
                @{{ user.login }}
              </a>
            </div>
            <!-- <p>Joined at <Moment format="MMMM DD, YYYY" date={Date.parse(userData.created_at)} /></p> -->
          </div>
        </div>

          <!-- {/* Description */} -->
        <p class="leading-8 whitespace-pre-line">
          <template v-if="user.bio">
            {{ user.bio }}
          </template>
          <span v-else class="opacity-60">
            This profile has no bio.
          </span>
        </p>

        <!-- {/* Profile stats */} -->
        <div class="grid grid-cols-3 justify-between py-4 bg-light rounded-xl md:px-8 dark:bg-dark">
          <StatEntry 
            title="Repos" 
            :value="user.public_repos" 
            :link="user.html_url + '?tab=repositories'" 
          />
          <StatEntry 
            title="Followers" 
            :value="user.followers" 
            :link="user.html_url + '?tab=followers'" 
          />
          <StatEntry 
            title="Following" 
            :value="user.following" 
            :link="user.html_url + '?tab=following'" 
          />
        </div>

        <!-- {/* Fields */} -->
        <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
          <FieldEntry 
            icon="ion:location" 
            :value="user.location!" 
          />
          <FieldEntry 
            icon="ion:link" 
            :value="user.blog!" 
            :href="user.blog ?? user.html_url"
          />
          <FieldEntry 
            icon="ion:logo-twitter" 
            :value="user.twitter_username ? `https://twitter.com/${user.twitter_username}` : undefined " 
          />
          <FieldEntry 
            icon="ion:business" 
            :value="user.company!" 
          />
        </div>
      </div>
    </div>
  </div>
</template>