<script setup lang="ts"></script>
<template>
  <div id="reply" class="pb-5"></div>
  <div class="pb-8">
    <div class="mx-auto max-w-2xl" style="padding-left: 14px; padding-right: 14px">
      <div class="flex items-center justify-between gap-4 py-2">
        <h4 class="leading-none text-lg sm:text-xl font-bold">Reply</h4>
        <div class="">
          <div class="relative inline-block text-left" data-headlessui-state="">
            <div>
              <button
                class="inline-flex justify-center border px-4 py-1 text-sm font-medium"
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                data-headlessui-state=""
              >
                Newest first
                <i class="pi pi-angle-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-4">
        <div class="relative">
          <div
            class="overflow-hidden border border-gray-300 shadow-sm focus-within:border-wt-primary focus-within:ring-1 focus-within:ring-wt-primary"
          >
            <label for="comment" class="sr-only">Add your comment</label
            ><textarea
              rows="2"
              name="content"
              id="comment"
              class="block resize-none border-0 bg-transparent p-3 focus:outline-none text-sm focus:ring-0"
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
                Send
              </button>
            </div>
          </div>
        </div>
        <span class="opacity-75 wt-body-font text-xs sm:text-sm font-regular"
          ><button><span class="underline">Login</span></button> or
          <button><span class="underline">Subscribe</span></button> to participate.</span
        >
      </div>
    </div>
  </div>
</template>
