<script setup lang="ts">
import TechIcon from './icons/TechIcon.vue'
import BurgerIcon from './icons/BurgerIcon.vue'

import { computed, onMounted, ref } from 'vue'
import { useThemeStore } from '@/stores/theme'

// toggle dark mode
const isDarkMode = computed(() => themeStore.isDarkMode)
const themeStore = useThemeStore()
onMounted(() => {
  themeStore.initTheme()
})

// toggle burger menu
const isMenuVisible = ref(false)

const toggleMenu = () => {
  console.log(isMenuVisible.value)
  isMenuVisible.value = !isMenuVisible.value
}
</script>

<template>
  <nav
    class="px-4 sm:px-6 w-full transform transition-transform duration-500 ease-in-out py-2 dark:bg-emerald-950 dark:text-white"
  >
    <div class="mx-auto w-full max-w-6xl">
      <div class="mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <a class="transition:all px-2 py-1 rounded-md hover:bg-black/10" href="/"
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
        </div>
        <div class="flex items-center space-x-2">
          <div class="flex items-center space-x-2">
            <button class="border inline-flex items-center py-2 px-4 rounded-md">Login</button
            ><a
              class="border text-white inline-flex items-center py-2 px-4 rounded-md bg-primary"
              href="/subscribe"
              >Subscribe</a
            >
          </div>
          <div class="relative text-left z-20">
            <button
              aria-label="Menu"
              class="rounded-full transition-all"
              id="headlessui-menu-button-:Rd5al:"
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div @click="toggleMenu" class="relative mt-1.5 rounded hover:bg-black/10">
                <BurgerIcon />

                <div
                  class="absolute dark:bg-emerald-800 right-0 top-9 mt-2 w-48 border shadow-lg rounded-lg p-1"
                  v-if="isMenuVisible"
                >
                  <ul class="flex flex-col gap-2 py-1 px-2">
                    <li class="hover:bg-black/20 rounded-md p-1">
                      <a class="flex gap-2 items-center" href="/advertise">
                        <i class="pi pi-share-alt"></i>
                        Advertise
                      </a>
                    </li>
                    <li class="hover:bg-black/20 rounded-md p-1">
                      <a class="flex gap-2 items-center" href="/authors">
                        <i class="pi pi-user"></i>
                        Authors
                      </a>
                    </li>
                    <li
                      @click="themeStore.toggleDarkMode"
                      class="hover:bg-black/20 rounded-md p-1 flex items-center"
                    >
                      <span v-if="isDarkMode" class="dark-mode">
                        <i class="pi pi-moon"></i>
                        Dark
                      </span>
                      <span v-else class="light-mode">
                        <i class="pi pi-sun"></i>
                        Light
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
