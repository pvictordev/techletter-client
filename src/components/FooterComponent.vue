<script setup lang="ts">
import TechIcon from './icons/TechIcon.vue'
import BehiivIcon from './icons/BehiivIcon.vue'
import SocialComponent from '@/components/SocialComponent.vue'
import FormComponent from './home/FormComponent.vue'
</script>

<template>
  <footer class="px-4 sm:px-6 py-8 dark:bg-emerald-950 dark:text-white">
    <div class="mx-auto w-full max-w-6xl">
      <div class="flex flex-col gap-y-6">
        <!-- top part -->
        <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-3">
          <div class="sm:px-6">
            <div class="flex w-full flex-col items-center sm:items-start">
              <div class="flex items-center gap-x-2 py-4">
                <TechIcon size="w-12 h-12" />
                <p class="text-md font-semibold font-ariel">Tech Letter</p>
              </div>
              <div class="text-center sm:text-left">
                <p class="text-sm font-regular font-ariel">
                  Get the most significant news in tech. Join the fastest growing tech newsletter.👨‍💻
                </p>
              </div>
            </div>
          </div>

          <!-- anchors -->
          <div class="mx-auto hidden sm:flex sm:flex-row w-10/12">
            <div class="flex grow basis-0 flex-col gap-y-3">
              <p class="text-xs sm:text-sm font-semibold font-ariel">Home</p>
              <div class="flex flex-col gap-y-2">
                <a class="sm:max-w-36 sm:text-wrap" href="/">
                  <p class="text-xs sm:text-sm font-regular font-ariel">Posts</p>
                </a>
                <router-link class="sm:max-w-36 sm:text-wrap" to="/authors">
                  <p class="text-xs sm:text-sm font-regular font-ariel">Authors</p>
                </router-link>
              </div>
            </div>

            <div class="flex grow basis-0 flex-col gap-y-3">
              <p class="text-xs sm:text-sm font-semibold font-ariel">Advertise</p>
              <div class="flex flex-col gap-y-2">
                <a class="sm:max-w-36 sm:text-wrap" href="/c/advertise"
                  ><p class="text-xs sm:text-sm font-regular font-ariel">Advertise</p></a
                >
              </div>
            </div>
          </div>
          <!-- subscribe -->
          <div class="flex flex-col items-center gap-y-4 sm:items-start sm:px-6">
            <div class="flex w-full flex-col items-center">
              <FormComponent />
            </div>
            <SocialComponent />
          </div>
        </div>

        <!-- bottom part -->
        <div
          class="flex w-full flex-col items-center gap-y-4 sm:flex-row sm:justify-between sm:px-6"
        >
          <div class="w-full text-center sm:w-1/2 sm:text-left">
            <p class="text-xs text-slate-400 font-light font-ariel">© 2024 Tech Letter.</p>
          </div>
          <div
            class="flex w-full flex-col items-center gap-y-4 sm:w-1/2 sm:flex-row sm:justify-end sm:gap-x-4"
          >
            <div class="flex gap-x-2 sm:gap-x-5">
              <a
                href="https://beehiiv.com/privacy"
                target="_blank"
                class="whitespace-nowrap underline underline-offset-1 hover:opacity-80"
                rel="noreferrer"
                ><p class="!text-xs text-md font-light font-ariel">Privacy Policy</p></a
              >
              <a
                href="https://beehiiv.com/tou"
                target="_blank"
                class="whitespace-nowrap underline underline-offset-1 hover:opacity-80"
                rel="noreferrer"
                ><p class="!text-xs text-md font-light font-ariel">Terms of Use</p></a
              >
            </div>
            <div class="">
              <span class="text-gray-700 text-md font-regular">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.beehiiv.com/?utm_source=Dev Notes&amp;utm_medium=footer"
                  class="extra-light flex items-center rounded border border-gray-300 px-3 py-2 text-xs"
                >
                  <BehiivIcon />
                  <span class="text-slate-400 text-md font-regular"> Powered by beehiiv </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
