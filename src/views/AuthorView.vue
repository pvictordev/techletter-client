<script setup lang="ts">
import AuthorComponent from '@/components/AuthorComponent.vue'

import authorsData from '@/assets/data.json'
import { ref } from 'vue'

const authors = ref(authorsData.authors)
</script>

<template>
  <div class="flex min-h-screen dark:bg-emerald-950 dark:text-white">
    <main class="flex-grow">
      <div class="px-4">
        <div class="mx-auto mt-8 max-w-6xl py-4">
          <ul class="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <li class="flex items-center gap-2">
              <a href="../" class="opacity-70">Tech Letter</a
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                height="14px"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                ></path>
              </svg>
            </li>
            <li class="flex items-center gap-2">
              <span class="!opacity-100">Authors</span>
            </li>
          </ul>
        </div>
        <div class="mx-auto flex w-full max-w-6xl pb-16 pt-4">
          <div class="flex w-full flex-col space-y-8">
            <div class="w-full space-y-2">
              <h1 class="font-semibold wt-header-font text-4xl font-regular">Authors</h1>
              <p class="wt-body-font text-lg sm:text-xl font-regular">
                Meet the writers contributing to Tech Letter
              </p>
            </div>
            <!-- authors grid -->
            <div class="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              <!-- author component -->
              <AuthorComponent v-for="author in authors" :key="author.id" :author="author" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
