<script setup lang="ts">
import CardComponent from '@/components/PostComponent.vue'
import Skeleton from 'primevue/skeleton'
import Button from 'primevue/button'
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
    return cards.value.slice(0, 6)
  }
  return cards.value
    .filter((card) => card.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    .slice(0, 6)
})

const handleSearchInput = (): void => {
  if (searchQuery.value.trim() === '') {
    loading.value = false
    return
  }

  loading.value = true

  setTimeout(() => {
    loading.value = false
  }, 1000)
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
      }, 1000)
    }
  },
  { immediate: true }
)

const clearFilter = () => {
  searchQuery.value = ''
}
</script>

<template>
  <!-- search -->
  <div class="mb-5">
    <div class="relative w-full pb-4">
      <div class="relative w-full transition-all">
        <i class="pi pi-search absolute left-2 top-1/2 -translate-y-1/2 transform"></i>
        <input
          id="search-input"
          @input="handleSearchInput"
          v-model="searchQuery"
          class="rounded-lg bg-slate-100 dark:bg-emerald-950 border focus:outline-none p-2 border-slate-100 w-full max-w-none pl-8"
          placeholder="Search posts..."
          type="text"
        />
      </div>
    </div>
  </div>

  <!-- loading && searchQuery !== '' -->
  <!-- skeleton -->
  <div
    v-if="loading && searchQuery !== ''"
    class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
  >
    <div
      class="rounded-xl border mb-3 border-surface-200 dark:border-surface-700 p-4 bg-surface-0 dark:bg-surface-900"
    >
      <div class="rounded-lg overflow-hidden" style="height: 10rem; margin-bottom: 1rem">
        <Skeleton width="100%" height="100%" />
      </div>

      <!-- Title -->
      <div style="margin-bottom: 1rem">
        <Skeleton width="90%" height="1rem" />
        <Skeleton width="70%" height="1rem" style="margin-top: 0.5rem" />
      </div>

      <div class="flex items-center">
        <Skeleton shape="circle" size="2rem" class="mr-3" />
        <div>
          <Skeleton width="8rem" height="0.75rem" style="margin-bottom: 0.25rem" />
          <Skeleton width="5rem" height="0.75rem" />
        </div>
      </div>
    </div>

    <div
      class="rounded-xl border mb-3 border-surface-200 dark:border-surface-700 p-4 bg-surface-0 dark:bg-surface-900"
    >
      <div class="rounded-lg overflow-hidden" style="height: 10rem; margin-bottom: 1rem">
        <Skeleton width="100%" height="100%" />
      </div>
      <div style="margin-bottom: 1rem">
        <Skeleton width="90%" height="1rem" />
        <Skeleton width="70%" height="1rem" style="margin-top: 0.5rem" />
      </div>
      <div class="flex items-center">
        <Skeleton shape="circle" size="2rem" class="mr-3" />
        <div>
          <Skeleton width="8rem" height="0.75rem" style="margin-bottom: 0.25rem" />
          <Skeleton width="5rem" height="0.75rem" />
        </div>
      </div>
    </div>

    <div
      class="rounded-xl border mb-3 border-surface-200 dark:border-surface-700 p-4 bg-surface-0 dark:bg-surface-900"
    >
      <div class="rounded-lg overflow-hidden" style="height: 10rem; margin-bottom: 1rem">
        <Skeleton width="100%" height="100%" />
      </div>
      <div style="margin-bottom: 1rem">
        <Skeleton width="90%" height="1rem" />
        <Skeleton width="70%" height="1rem" style="margin-top: 0.5rem" />
      </div>
      <div class="flex items-center">
        <Skeleton shape="circle" size="2rem" class="mr-3" />
        <div>
          <Skeleton width="8rem" height="0.75rem" style="margin-bottom: 0.25rem" />
          <Skeleton width="5rem" height="0.75rem" />
        </div>
      </div>
    </div>
  </div>

  <!-- cards grid -->
  <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    <CardComponent v-for="card in filteredCards" :key="card.id" :card="card" />
  </div>
  <!-- No results message -->
  <p
    v-if="!loading && filteredCards.length === 0"
    class="mt-12 flex flex-col items-center justify-center gap-4"
  >
    <i class="pi pi-search"></i>
    No Posts Found
    <Button @click="clearFilter">Clear Filter</Button>
  </p>
</template>
