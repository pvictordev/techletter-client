<script setup lang="ts">
import TechIcon from '@/components/icons/TechIcon.vue'
import SocialComponent from '@/components/SocialComponent.vue'
import SearchComponent from '@/components/home/SearchComponent.vue'
import FormComponent from '@/components/home/FormComponent.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col dark:bg-emerald-950 dark:text-white">
    <main class="flex-grow">
      <div class="min-h-screen overflow-x-hidden">
        <!-- top part -->
        <div class="py-12 pt-28 pb-20">
          <div class="left-0 top-0 h-full">
            <div class="px-4 sm:px-6">
              <div class="mx-auto max-w-6xl">
                <!-- subscribe -->
                <div class="mx-auto mb-10 max-w-2xl p-0 rounded-lg border-none">
                  <div class="flex-start flex flex-col items-center py-2">
                    <div class="mb-4 overflow-hidden rounded h-24 w-24">
                      <figure class="aspect-square relative h-full overflow-hidden">
                        <TechIcon size="h-24 w-24" />
                      </figure>
                    </div>
                    <div class="space-y-4">
                      <div class="mx-auto max-w-xl">
                        <h1 class="text-center text-4xl sm:text-5xl font-bold font-ariel">
                          <span>Tech Letter</span>
                        </h1>
                      </div>
                      <p class="text-center text-lg sm:text-xl font-regular font-ariel">
                        <span
                          >Tech Letter is a newsletter made for tech enthusiast to get the most
                          significant news form tech world. Join the fastest growing community of
                          techies.👇
                        </span>
                      </p>
                    </div>
                  </div>

                  <div class="mx-auto mt-4 max-w-sm sm:max-w-lg">
                    <div class="flex flex-col items-center">
                      <FormComponent />
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap items-end justify-between gap-4">
                  <!-- written by -->
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
                  <div class="space-y-2 flex flex-col">
                    <p
                      class="whitespace-nowrap text-xs font-semibold text-md font-regular font-helvetica"
                    >
                      Connect
                    </p>
                    <!-- social component -->
                    <SocialComponent></SocialComponent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- bottom part -->
        <div class="px-4 sm:px-6 pt-0">
          <div class="mx-auto max-w-6xl">
            <div class="grid grid-cols-12">
              <div class="order-last col-span-12 pb-4 pt-2 lg:order-first mb-14">
                <div>
                  <SearchComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
