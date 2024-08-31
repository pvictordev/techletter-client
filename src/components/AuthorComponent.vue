<script setup lang="ts">
defineProps<{
  author: {
    id: number
    name: string
    profile: string
  }
}>()
</script>

<template>
  <div class="transparent h-full cursor-pointer overflow-hidden rounded-2xl flex flex-col">
    <div class="relative w-full article-image">
      <a class="" href="">
        <div class="w-full">
          <figure class="relative h-full aspect-social overflow-hidden w-full">
            <img
              width="800"
              height="421"
              :src="author.profile"
              alt="article image"
              class="inset-0 h-full bg-slate-100 w-full object-cover"
            />
          </figure>
        </div>
      </a>
    </div>

    <h2 class="p-3 pl-0 text-xl font-medium">{{ author.name }}</h2>
  </div>
</template>
