<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  author: {
    id: number
    name: string
  }
}>()

const emit = defineEmits<{ (e: 'click'): void }>()
const emitClick = () => {
  emit('click')
}
</script>

<template>
  <div class="transparent h-full cursor-pointer border overflow-hidden rounded-2xl flex flex-col">
    <div class="relative w-full article-image">
      <div @click="emitClick">
        <figure class="relative h-full aspect-social overflow-hidden w-full">
          <img
            width="800"
            height="421"
            src="https://upload.wikimedia.org/wikipedia/commons/0/06/Ryan_Gosling_-_Cannes_Film_Festival_-_02.jpg"
            alt="article image"
            class="inset-0 h-full bg-slate-100 w-full object-cover"
          />
        </figure>
      </div>
    </div>

    <h2 class="p-3 text-xl font-medium">{{ author.name }}</h2>
  </div>
</template>
