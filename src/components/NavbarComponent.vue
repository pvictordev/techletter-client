<script setup lang="ts">
import TechIcon from './icons/TechIcon.vue'
</script>

<template>
  <nav class="px-4 sm:px-6 w-full py-2">
    <div class="mx-auto w-full max-w-6xl">
      <div class="mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <a class="rounded-lg transition:all px-2 py-1 hover:bg-black/5" href="/"
            ><div class="flex items-center space-x-2">
              <div class="h-8 w-8 overflow-hidden rounded-wt">
                <figure class="aspect-square relative h-full overflow-hidden w-full">
                  <TechIcon size="w-8 h-8" />
                </figure>
              </div>
              <span
                class="sm:text-md wt-text-primary hidden text-sm md:block text-md font-regular font-ariel"
                >Tech Letter</span
              >
            </div></a
          >
          <div class="block">
            <div class="z-20 flex gap-1">
              <a class="transition:all rounded-wt px-2 py-2 hover:bg-black/5" href="/c/advertise"
                ><span class="whitespace-nowrap text-xs sm:block text-md font-regular font-ariel"
                  >Advertise</span
                ></a
              >
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <div class="flex items-center space-x-2">
            <button class="border inline-flex items-center py-2 px-4 rounded-md">Login</button
            ><a
              class="border inline-flex items-center py-2 px-4 rounded-md bg-primary"
              href="/subscribe"
              >Subscribe</a
            >
          </div>
          <div class="relative inline-block text-left">
            <button
              aria-label="Menu"
              class="rounded-full transition-all"
              id="headlessui-menu-button-:Rd5al:"
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div class="mt-1.5 rounded hover:bg-black/5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
