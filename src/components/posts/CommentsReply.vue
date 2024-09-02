<script setup lang="ts"></script>
<template>
  <div class="pb-8">
    <div class="mx-auto max-w-2xl" style="padding-left: 14px; padding-right: 14px">
      <div class="flex items-center justify-between gap-4 py-2">
        <h4 class="leading-none text-wt-text-on-background text-lg sm:text-xl font-bold">Reply</h4>
        <div class="">
          <div class="relative inline-block text-left" data-headlessui-state="">
            <div>
              <button
                class="inline-flex w-full justify-center whitespace-nowrap rounded-wt border px-4 py-1 text-sm font-medium text-wt-text-on-background"
                id="headlessui-menu-button-:r15:"
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                data-headlessui-state=""
              >
                Newest first<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="-mr-1 ml-2 h-5 w-5 text-wt-text-on-background"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-4">
        <div class="relative">
          <div
            class="overflow-hidden rounded-wt border border-gray-300 shadow-sm focus-within:border-wt-primary focus-within:ring-1 focus-within:ring-wt-primary"
          >
            <label for="comment" class="sr-only">Add your comment</label
            ><textarea
              rows="2"
              name="content"
              id="comment"
              class="block w-full resize-none border-0 bg-transparent py-3 text-sm focus:ring-0"
              placeholder="Add your comment..."
            ></textarea>
            <div class="py-2" aria-hidden="true">
              <div class="py-px"><div class="h-6"></div></div>
            </div>
          </div>
          <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div class="flex items-center space-x-5"><div class="flex-shrink-0"></div></div>
            <div class="flex-shrink-0 pr-1">
              <button
                type="button"
                class="border font-medium shadow-sm wt-button-font inline-flex items-center disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 justify-center transition-colors rounded-wt px-2 py-1 text-sm border-wt-primary text-wt-text-on-primary bg-wt-primary disabled:border-gray-500 focus:ring-wt-primary"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <span
          class="opacity-75 wt-body-font text-wt-text-on-background text-xs sm:text-sm font-regular"
          ><button><span class="underline">Login</span></button> or
          <button><span class="underline">Subscribe</span></button> to participate.</span
        >
      </div>
    </div>
  </div>
</template>
