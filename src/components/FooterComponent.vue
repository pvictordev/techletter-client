<script setup lang="ts">
import TechIcon from './icons/TechIcon.vue'
import SocialComponent from '@/components/SocialComponent.vue'
</script>

<template>
  <footer class="px-4 sm:px-6 py-8" style="background-color: #ffffff">
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
                <a class="sm:max-w-36 sm:text-wrap" href="/"
                  ><p class="text-xs sm:text-sm font-regular font-ariel">Posts</p></a
                ><a class="sm:max-w-36 sm:text-wrap" href="/authors"
                  ><p class="text-xs sm:text-sm font-regular font-ariel">Authors</p></a
                >
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
              <form method="post" action="/create" class="group w-full rounded-wt bg-transparent">
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
            <SocialComponent />
          </div>
        </div>

        <!-- bottom part -->
        <div
          class="flex w-full flex-col items-center gap-y-4 sm:flex-row sm:justify-between sm:px-6"
        >
          <div class="w-full text-center sm:w-1/2 sm:text-left">
            <p style="color: #222222" class="!text-xs text-md font-light font-ariel">
              © 2024 Tech Letter.
            </p>
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
                style="color: #222222"
                ><p style="color: #222222" class="!text-xs text-md font-light font-ariel">
                  Privacy Policy
                </p></a
              ><a
                href="https://beehiiv.com/tou"
                target="_blank"
                class="whitespace-nowrap underline underline-offset-1 hover:opacity-80"
                rel="noreferrer"
                style="color: #222222"
                ><p style="color: #222222" class="!text-xs text-md font-light font-ariel">
                  Terms of Use
                </p></a
              >
            </div>
            <div>
              <span class="text-gray-700 text-md font-regular"
                ><a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.beehiiv.com/?utm_source=Dev Notes&amp;utm_medium=footer"
                  class="extra-light flex items-center rounded border border-gray-300 bg-white px-3 py-2 text-xs"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    class="mr-2 h-4 w-4"
                    viewBox="0 0 30 30"
                  >
                    <path
                      fill="#0B0D2A"
                      d="M25.692 13.168H3.866c-.556 0-1.01-.458-1.01-1.017V10.6c0-1.755 1.414-3.178 3.157-3.178H23.52c1.743 0 3.157 1.423 3.157 3.177v1.55a.98.98 0 0 1-.985 1.018ZM21.092 5.745H8.462a1.044 1.044 0 0 1-1.036-1.042C7.426 2.11 9.523 0 12.099 0h5.356c2.576 0 4.673 2.11 4.673 4.703 0 .584-.455 1.042-1.036 1.042ZM26.702 14.845H2.855C1.288 14.845 0 16.142 0 17.718c0 1.576 1.288 2.872 2.855 2.872h8.462c.303-1.627 1.718-2.872 3.436-2.872a3.532 3.532 0 0 1 3.46 2.872h8.463c1.567 0 2.855-1.296 2.855-2.872 0-1.576-1.263-2.873-2.83-2.873ZM25.663 22.268h-7.401v5.745h5.557c1.567 0 2.855-1.297 2.855-2.873v-1.83a1.006 1.006 0 0 0-1.01-1.042ZM3.864 22.268c-.556 0-1.036.457-1.036 1.042v1.83c0 1.576 1.288 2.873 2.855 2.873h5.557v-5.745H3.864Z"
                    ></path></svg
                  ><span class="text-gray-700 text-md font-regular">Powered by beehiiv</span></a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
