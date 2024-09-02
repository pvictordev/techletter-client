<script setup lang="ts">
defineProps<{
  card: {
    id: number
    title: string
    image: string
    link: string
    author: string
    date: string
  }
}>()
</script>

<template>
  <router-link to="/posts/:id">
    <div class="transparent h-full cursor-pointer overflow-hidden rounded-2xl flex flex-col border">
      <div class="relative w-full">
        <div>
          <figure class="relative h-full overflow-hidden w-full">
            <img
              loading="lazy"
              :src="card.image"
              alt="article image"
              class="inset-0 h-full object-cover"
            />
          </figure>
        </div>
      </div>

      <div class="p-3">
        <div class="space-y-3">
          <div class="space-y-2">
            <div class="flex flex-wrap-reverse items-center justify-between">
              <div class="flex items-center space-x-1">
                <span class="text-slate-400 text-xs sm:text-sm font-light font-helvetica">
                  <time datetime="2024-08-30T12:00:00.000Z">{{ card.date }}</time>
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <span class="flex items-center space-x-0.5 text-sm font-regular font-ariel">
                  <i class="pi pi-heart"></i>
                </span>
                <span class="flex items-center space-x-0.5 text-sm font-regular font-ariel">
                  <i class="pi pi-comments"></i>
                </span>
              </div>
            </div>
            <div class="cursor-pointer space-y-1">
              <h2 class="hover:underline sm:line-clamp-3 text-lg sm:text-xl font-semibold">
                {{ card.title }}
              </h2>
            </div>
          </div>
          <a
            class="flex flex-col items-start space-x-0 space-y-1 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0"
            href="/authors"
          >
            <div class="flex -space-x-1.5 overflow-hidden">
              <div class="h-7 w-7 rounded-full">
                <img
                  loading="lazy"
                  class="inline-block h-7 w-7 rounded-full"
                  src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
                  alt="Victor Purice"
                />
              </div>
            </div>
            <div class="flex items-center">
              <span class="group-hover:underline text-xs sm:text-sm text-primary font-semibold">{{
                card.author
              }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </router-link>
</template>
