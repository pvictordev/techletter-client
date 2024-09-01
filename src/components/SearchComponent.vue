<script setup lang="ts">
import CardComponent from '@/components/PostComponent.vue'
import Skeleton from 'primevue/skeleton'
import { computed, ref, watch } from 'vue'
import cardsData from '@/assets/data.json'

interface Card {
  id: number
  title: string
  image: string
  link: string
  author: string
  date: string
}

const searchQuery = ref<string>('')
const cards = ref<Card[]>(cardsData.cards)
const loading = ref<boolean>(false)

const filteredCards = computed(() => {
  if (searchQuery.value.trim() === '') {
    return cards.value
  }
  return cards.value.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const handleSearchInput = (): void => {
  if (searchQuery.value.trim() === '') {
    loading.value = false
    return
  }

  loading.value = true

  setTimeout(() => {
    loading.value = false
  }, 500)
}

watch(
  searchQuery,
  () => {
    if (searchQuery.value.trim() === '') {
      loading.value = false
    } else {
      loading.value = true
      setTimeout(() => {
        loading.value = false
      }, 500)
    }
  },
  { immediate: true }
)
</script>

<template>
  <!-- search -->
  <div class="mb-5">
    <div class="relative w-full pb-4">
      <div class="group relative w-full transition-all">
        <i class="pi pi-search absolute left-2 top-1/2 -translate-y-1/2 transform"></i>
        <input
          id="search-input"
          @input="handleSearchInput"
          v-model="searchQuery"
          class="rounded-lg bg-slate-100 dark:bg-emerald-950 border focus:outline-none p-2 border-slate-100 w-full max-w-none pl-8"
          placeholder="Search posts..."
          type="text"
          name=""
        />
      </div>
    </div>
  </div>
  <!-- skeleton -->
  <div
    v-if="loading && searchQuery !== ''"
    class="rounded border mb-3 border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900"
  >
    <div class="flex mb-4">
      <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
      <div>
        <Skeleton width="10rem" class="mb-2"></Skeleton>
        <Skeleton width="5rem" class="mb-2"></Skeleton>
        <Skeleton height=".5rem"></Skeleton>
      </div>
    </div>
    <Skeleton width="100%" height="150px"></Skeleton>
    <div class="flex justify-between mt-4">
      <Skeleton width="4rem" height="2rem"></Skeleton>
      <Skeleton width="4rem" height="2rem"></Skeleton>
    </div>
  </div>
  <!-- cards grid -->
  <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    <CardComponent v-for="card in filteredCards" :key="card.id" :card="card" />
  </div>
</template>
