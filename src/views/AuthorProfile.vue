<script setup lang="ts">
import CardComponent from '@/components/PostComponent.vue'
import cardsData from '@/assets/data.json'
import { ref } from 'vue'

const cards = ref(cardsData.cards)
</script>

<template>
  <div class="flex min-h-screen flex-col dark:bg-emerald-950 dark:text-white">
    <main class="flex-grow">
      <div class="px-4">
        <!-- make it reusable  -->
        <div class="mx-auto mt-8 max-w-6xl py-4">
          <ul class="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <li class="flex items-center gap-2 text-wt-text-on-background">
              <router-link to="/" class="opacity-70">Tech Letter</router-link>
              <svg
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
            <li class="flex items-center gap-2 text-wt-text-on-background">
              <router-link to="/authors" class="opacity-70">Authors</router-link
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
            <li class="flex items-center gap-2 text-wt-text-on-background">
              <span class="opacity-100">Victor Purice</span>
            </li>
          </ul>
        </div>

        <div class="mx-auto flex w-full max-w-6xl pb-16 pt-8">
          <div class="flex w-full flex-col space-y-10">
            <div>
              <div
                class="flex w-full flex-col items-center space-x-0 space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0"
              >
                <div>
                  <div
                    class="z-10 col-span-1 h-40 min-h-40 w-40 min-w-40 overflow-hidden rounded-full"
                  >
                    <figure class="aspect-social relative h-full overflow-hidden w-full">
                      <img
                        loading="lazy"
                        width="400"
                        height="211"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/06/Ryan_Gosling_-_Cannes_Film_Festival_-_02.jpg"
                        alt="Victor Purice"
                        class="absolute inset-0 h-full w-full object-cover"
                      />
                    </figure>
                  </div>
                </div>
                <div class="w-full max-w-2xl space-y-1">
                  <h1
                    class="w-full text-center font-semibold text-wt-text-on-background sm:text-left text-2xl sm:text-3xl font-regular"
                  >
                    Victor Purice
                  </h1>
                  <p
                    class="w-full text-center text-wt-text-on-background sm:text-left wt-body-font text-gray-700 text-md font-regular"
                  ></p>
                  <div class="pt-4 sm:pt-2">
                    <div class="flex justify-center space-x-2 sm:justify-start"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- cards grid -->
            <div
              class="grid grid-cols-1 gap-4 pb-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8"
            >
              <CardComponent v-for="card in cards" :key="card.id" :card="card" />
            </div>

            <div class="mt-6 flex w-full justify-center">
              <button
                class="border font-medium shadow-sm wt-button-font inline-flex items-center disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 justify-center rounded-wt px-4 py-2 text-sm transition-all group-hover:brightness-110"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
