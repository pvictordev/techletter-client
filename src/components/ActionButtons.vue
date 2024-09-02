<script setup lang="ts"></script>

<template>
  <div
    class="fixed bottom-0 left-0 top-auto z-20 w-full rounded shadow-xl transition-all duration-300 ease-in-out md:bottom-auto md:z-auto md:w-fit md:border-none md:shadow-none opacity-100 md:top-20"
  >
    <div
      class="absolute left-0 top-0 w-full border border-t border-wt-text-on-background opacity-10 md:hidden"
    ></div>
    <div class="mx-auto w-full max-w-6xl px-0 lg:px-4">
      <div class="flex flex-col gap-8 md:h-40">
        <div class="">
          <div
            class="grid grid-cols-3 glass-effect p-4 px-8 sm:p-2 sm:px-2 md:grid-cols-1 md:gap-2"
          >
            <div class="flex flex-col justify-center md:left-1">
              <div
                class="flex h-7 w-7 items-center justify-center rounded-wt transition-all hover:bg-black/5"
              >
                <button class="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="h-6 w-6 stroke-1 text-wt-text-on-background opacity-50"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex items-center justify-center gap-3 md:flex-col md:items-start md:gap-1">
              <button class="group" type="button">
                <div
                  class="text-wt-text-on-background opacity-50 group-hover:opacity-100 flex items-center"
                >
                  <div class="rounded-full p-1 hover:bg-[#f3f4f6]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-7 w-7 outline-none stroke-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      ></path>
                    </svg>
                  </div>
                  <span
                    class="text-[#6B7280] text-wt-text-on-background text-sm font-medium group-hover:opacity-100"
                    >1</span
                  >
                </div></button
              ><button class="group relative top-[1px] flex items-center outline-none md:pt-0">
                <div class="rounded-full p-1 hover:bg-[#f3f4f6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-7 w-7 stroke-1 text-wt-text-on-background opacity-50 group-hover:opacity-100"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    ></path>
                  </svg>
                </div>
                <span
                  class="hidden relative -top-[1px] text-sm font-medium group-hover:opacity-100 md:top-0"
                  >0</span
                >
              </button>
              <div class="relative z-20 inline-block text-left md:z-0" data-headlessui-state="">
                <button
                  class="relative right-[2px] top-[1.5px] outline-none md:right-[0px]"
                  id="headlessui-menu-button-:r13:"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <div class="flex items-center rounded-full p-1 hover:bg-[#f3f4f6]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="text-wt-text-on-background opacity-50 hover:opacity-100 h-7 w-7 stroke-1 text-gray-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass-effect {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
