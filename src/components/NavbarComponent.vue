<script setup lang="ts">
import TechIcon from './icons/TechIcon.vue'
import BurgerIcon from './icons/BurgerIcon.vue'

import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

import { computed, onMounted, onUnmounted, ref } from 'vue'
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
  isMenuVisible.value = !isMenuVisible.value
}

const handleClickOutside = (event: MouseEvent) => {
  const menuElement = document.getElementById('headlessui-menu-button-:Rd5al:')
  if (menuElement && !menuElement.contains(event.target as Node)) {
    isMenuVisible.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// dialog toggle
const visible = ref(false)
</script>

<template>
  <nav
    class="px-4 sm:px-6 w-full transform transition-transform duration-500 ease-in-out py-2 dark:bg-emerald-950 dark:text-white"
  >
    <div class="mx-auto w-full max-w-6xl">
      <div class="mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <router-link class="transition:all px-2 py-1 rounded-md hover:bg-black/10" to="/"
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
            </div></router-link
          >
        </div>
        <div class="flex items-center space-x-2">
          <div class="flex items-center space-x-2">
            <button class="border inline-flex items-center py-2 px-4 rounded-md">Login</button>
            <button
              @click="visible = true"
              class="border text-white inline-flex items-center py-2 px-4 rounded-md bg-primary"
            >
              Subscribe
            </button>
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
                  class="absolute bg-white dark:bg-emerald-800 right-0 top-9 mt-2 w-48 border shadow-lg rounded-lg p-1"
                  v-if="isMenuVisible"
                >
                  <ul class="flex flex-col gap-1 py-1 px-2">
                    <li class="hover:bg-black/20 rounded-md p-2">
                      <router-link to="/authors" class="flex gap-2 items-center">
                        <i class="pi pi-users"></i>
                        Authors
                      </router-link>
                    </li>
                    <li
                      @click="themeStore.toggleDarkMode"
                      class="hover:bg-black/20 rounded-md p-2 flex items-center"
                    >
                      <span v-if="isDarkMode" class="dark-mode flex items-center gap-2">
                        <i class="pi pi-moon"></i>
                        Dark
                      </span>
                      <span v-else class="light-mode flex items-center gap-2">
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
  <!-- dialog subscribe -->
  <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
    <template #header>
      <div class="inline-flex items-center justify-center gap-2">
        <TechIcon size="w-8 h-8" />
        <span class="font-bold whitespace-nowrap">Subscribe to Tech Letter !</span>
      </div>
    </template>
    <div class="flex items-center gap-2 mb-4">
      <InputText id="username" class="flex-auto" autocomplete="off" />
      <Button @click="visible = false">Subscribe</Button>
    </div>
  </Dialog>
</template>
