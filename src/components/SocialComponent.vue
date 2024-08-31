<script setup lang="ts">
import SocialItem from './SocialItem.vue'
import TelegramIcon from './icons/social/TelegramIcon.vue'
import TiktokIcon from './icons/social/TiktokIcon.vue'
import YoutubeIcon from './icons/social/YoutubeIcon.vue'
import InstagramIcon from './icons/social/InstagramIcon.vue'
import DevtoIcon from './icons/social/DevtoIcon.vue'
import TwitterIcon from './icons/social/TwitterIcon.vue'
</script>
<template>
  <div class="space-y-2 flex flex-col">
    <p class="whitespace-nowrap text-xs font-semibold text-md font-regular font-helvetica">
      Connect
    </p>

    <div class="flex flex-wrap">
      <SocialItem>
        <template #icon>
          <div
            class="flex flex-wrap items-center justify-center gap-2 sm:items-start sm:justify-start"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/"
              aria-label="Twitter"
              class="relative p-2"
            >
              <div class="rounded-full bg-primary p-2 text-white">
                <TwitterIcon />
              </div>
            </a>
          </div>
        </template>
      </SocialItem>

      <SocialItem>
        <template #icon>
          <div
            class="flex flex-wrap items-center justify-center gap-2 sm:items-start sm:justify-start"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/"
              aria-label="Twitter"
              class="relative p-2"
            >
              <div class="rounded-full bg-primary p-2 text-white">
                <DevtoIcon />
              </div>
            </a>
          </div>
        </template>
      </SocialItem>

      <SocialItem>
        <template #icon>
          <div
            class="flex flex-wrap items-center justify-center gap-2 sm:items-start sm:justify-start"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/"
              aria-label="Twitter"
              class="relative p-2"
            >
              <div class="rounded-full bg-primary p-2 text-white">
                <TelegramIcon />
              </div>
            </a>
          </div>
        </template>
      </SocialItem>

      <SocialItem>
        <template #icon>
          <div
            class="flex flex-wrap items-center justify-center gap-2 sm:items-start sm:justify-start"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/"
              aria-label="Twitter"
              class="relative p-2"
            >
              <div class="rounded-full bg-primary p-2 text-white">
                <YoutubeIcon />
              </div>
            </a>
          </div>
        </template>
      </SocialItem>

      <SocialItem>
        <template #icon>
          <div
            class="flex flex-wrap items-center justify-center gap-2 sm:items-start sm:justify-start"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/"
              aria-label="Twitter"
              class="relative p-2"
            >
              <div class="rounded-full bg-primary p-2 text-white">
                <TiktokIcon />
              </div>
            </a>
          </div>
        </template>
      </SocialItem>

      <SocialItem>
        <template #icon>
          <div
            class="flex flex-wrap items-center justify-center gap-2 sm:items-start sm:justify-start"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/"
              aria-label="Twitter"
              class="relative p-2"
            >
              <div class="rounded-full bg-primary p-2 text-white">
                <InstagramIcon />
              </div>
            </a>
          </div>
        </template>
      </SocialItem>
    </div>
  </div>
</template>
