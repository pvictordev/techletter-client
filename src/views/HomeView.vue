<script setup lang="ts">
import TechIcon from '@/components/icons/TechIcon.vue'
import CardComponent from '@/components/CardComponent.vue'
import SocialComponent from '@/components/SocialComponent.vue'

import cardsData from '@/assets/data.json'
import { ref } from 'vue'

const cards = ref(cardsData.cards)
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <main class="flex-grow">
      <div class="min-h-screen overflow-x-hidden">
        <!-- top part -->
        <div class="relative py-8">
          <div class="relative left-0 top-0 h-full w-full">
            <div class="px-4 sm:px-6">
              <div class="mx-auto w-full max-w-6xl">
                <!-- subscribe -->
                <div class="mx-auto mb-10 w-full max-w-2xl p-0 rounded-lg border-none">
                  <div class="flex-start flex flex-col items-center py-2">
                    <div class="mb-4 overflow-hidden rounded h-24 w-24">
                      <figure class="aspect-square relative h-full overflow-hidden w-full">
                        <TechIcon size="h-24 w-24" />
                      </figure>
                    </div>
                    <div class="space-y-4">
                      <div class="mx-auto w-full max-w-xl">
                        <h1 class="w-full text-center text-4xl sm:text-5xl font-bold font-ariel">
                          <span>Tech Letter</span>
                        </h1>
                      </div>
                      <p class="w-full text-center text-lg sm:text-xl font-regular font-ariel">
                        <span
                          >Tech Letter is a newsletter made for tech enthusiast to get the most
                          significant news form tech world. Join the fastest growing community of
                          techies.👇
                        </span>
                      </p>
                    </div>
                  </div>

                  <div class="mx-auto mt-4 max-w-sm sm:max-w-lg">
                    <div class="flex w-full flex-col items-center">
                      <form
                        method="post"
                        action="/create"
                        class="group w-full rounded-wt bg-transparent"
                      >
                        <div class="flex flex-col">
                          <!-- input box -->
                          <div
                            class="flex w-full flex-col items-center border border-primary sm:flex-row overflow-hidden rounded-lg bg-gray-50"
                          >
                            <!-- input field -->
                            <div class="flex w-full items-center">
                              <input
                                autocomplete="email"
                                class="wt-button-font p-2 focus:outline-none z-10 w-full bg-transparent placeholder-shown:text-ellipsis text-lg focus:text-lg active:text-lg sm:text-lg"
                                placeholder="Enter your email"
                                type="email"
                                name="email"
                              />
                            </div>

                            <!-- input button -->
                            <input
                              class="cursor-pointer bg-primary text-white px-5 py-3 font-semibold w-full sm:w-auto text-lg focus:text-lg active:text-lg sm:text-lg rounded-lg rounded-none sm:rounded-lg-r"
                              type="submit"
                              value="Subscribe"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- links -->
                <div class="flex flex-wrap items-end justify-between gap-4">
                  <!-- newsletter update -->
                  <div class="space-y-2">
                    <span
                      class="whitespace-nowrap text-xs font-semibold text-md font-regular font-helvetica"
                      >Written By</span
                    ><a
                      class="group flex flex-col items-start space-x-0 space-y-1 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0"
                      href="/authors"
                      ><div class="flex items-center">
                        <span
                          class="group-hover:underline text-xs sm:text-sm font-semibold font-helvetica"
                          >Victor Purice, +1</span
                        >
                      </div></a
                    >
                  </div>
                  <!-- social -->
                  <SocialComponent></SocialComponent>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- spaces -->
        <div class="px-4 sm:px-6 mx-auto w-full max-w-6xl">
          <div class="mx-auto w-full max-w-6xl"><div id="header-ad-placement"></div></div>
        </div>
        <div class="px-4 sm:px-6">
          <div class="mx-auto w-full max-w-6xl"><div class="mb-0 lg:mb-16"></div></div>
        </div>

        <!-- bottom part -->
        <div class="px-4 sm:px-6 pt-0">
          <div class="mx-auto w-full max-w-6xl">
            <div class="grid w-full grid-cols-12">
              <div class="order-last col-span-12 pb-4 pt-2 lg:order-first mb-8">
                <div>
                  <!-- search -->
                  <div class="mb-8">
                    <div class="relative w-full pb-4">
                      <div class="group relative w-full transition-all">
                        <div class="absolute left-2 top-1/2 -translate-y-1/2 transform">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            class="h-4 w-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          id="q"
                          class="rounded-lg bg-slate-100 border focus:outline-none p-2 border-slate-100 w-full max-w-none pl-8"
                          placeholder="Search posts..."
                          type="text"
                          value=""
                          name=""
                        />
                      </div>
                    </div>
                    <div class="mb-2 flex flex-wrap gap-2"></div>
                  </div>

                  <!-- cards grid -->
                  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <CardComponent v-for="card in cards" :key="card.id" :card="card" />
                  </div>

                  <!-- pagination -->
                  <div
                    class="col-span-12 mx-auto mt-12 grid grid-cols-4 grid-rows-2 items-center gap-3 px-4 py-4 pb-8 sm:flex sm:justify-center"
                  >
                    <!-- first & back -->
                    <div class="wt-button-font order-2 col-span-2 flex justify-end gap-2">
                      <a
                        class="rounded-lg flex bg-slate-200 items-center gap-2 border border-transparent px-3 py-1 transition duration-150 ease-in-out hover:bg-primary"
                        href="/archive?page=1"
                        >First
                      </a>
                      <a
                        class="rounded-lg flex bg-slate-200 items-center gap-2 border border-transparent px-3 py-1 transition duration-150 ease-in-out hover:bg-primary"
                        href="/archive?page=0"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          class="rotate-180 transform"
                          height="16px"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          ></path></svg
                        >Back</a
                      >
                    </div>

                    <!-- page numbers -->
                    <div class="order-1 col-span-4 flex justify-center gap-3 sm:order-2">
                      <a
                        class="rounded-lg flex bg-slate-200 items-center gap-2 border border-transparent px-3 py-1 transition duration-150 ease-in-out hover:bg-primary"
                        href="/archive?page=1"
                        >1
                      </a>
                      <a
                        class="rounded-lg flex bg-slate-200 items-center gap-2 border border-transparent px-3 py-1 transition duration-150 ease-in-out hover:bg-primary"
                        href="/archive?page=2"
                        >2
                      </a>
                    </div>

                    <!-- last & next -->
                    <div class="wt-button-font order-2 col-span-2 flex items-center gap-2">
                      <a
                        class="rounded-lg flex bg-slate-200 items-center gap-2 border border-transparent px-3 py-1 transition duration-150 ease-in-out hover:bg-primary"
                        href="/archive?page=2"
                      >
                        Next
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          height="16px"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          ></path>
                        </svg>
                      </a>
                      <a
                        class="rounded-lg flex bg-slate-200 items-center gap-2 border border-transparent px-3 py-1 transition duration-150 ease-in-out hover:bg-primary"
                        href="/archive?page=13"
                      >
                        Last
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
