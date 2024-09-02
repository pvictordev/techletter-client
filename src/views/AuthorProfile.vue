<script setup lang="ts">
import { defineProps, onMounted } from 'vue'
import { ref, watch } from 'vue'

import BreadCrumb from '@/components/BreadCrumb.vue'
import CardComponent from '@/components/PostComponent.vue'
import cardsData from '@/assets/data.json'

const cards = ref(cardsData.cards)

const props = defineProps<{
  id: number
}>()

const author = ref<{
  id: number
  name: string
} | null>(null)

const fetchAuthorDetails = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch author details')
    }
    author.value = await response.json()
  } catch (error) {
    console.error(error)
  }
}

onMounted(fetchAuthorDetails)

const breadcrumbs = ref([
  { label: 'Tech Letter', link: '/' },
  { label: 'Authors', link: '/authors' }
])

// watching for breadcrumbs array changes
watch(author, (newAuthor) => {
  if (newAuthor) {
    breadcrumbs.value = [
      { label: 'Tech Letter', link: '/' },
      { label: 'Authors', link: '/authors' },
      {
        label: newAuthor.name,
        link: ''
      }
    ]
  }
})
</script>

<template>
  <div class="flex min-h-screen flex-col dark:bg-emerald-950 dark:text-white">
    <main class="flex-grow mt-14">
      <div class="px-4">
        <div class="mx-auto mt-8 max-w-6xl py-4">
          <BreadCrumb :breadcrumbs="breadcrumbs" />
        </div>

        <div class="mx-auto flex max-w-6xl pb-16 pt-8">
          <div class="flex flex-col space-y-10">
            <div>
              <div
                class="flex flex-col items-center space-x-0 space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0"
              >
                <div>
                  <div
                    class="z-10 col-span-1 h-40 min-h-40 w-40 min-w-40 overflow-hidden rounded-full"
                  >
                    <figure class="aspect-social relative h-full overflow-hidden w-full">
                      <img
                        loading="lazy"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/06/Ryan_Gosling_-_Cannes_Film_Festival_-_02.jpg"
                        alt="Victor Purice"
                        class="absolute inset-0 h-full w-full object-cover"
                      />
                    </figure>
                  </div>
                </div>
                <div class="max-w-2xl space-y-1">
                  <h1
                    v-if="author"
                    class="text-center font-semibold text-wt-text-on-background sm:text-left text-2xl sm:text-3xl font-regular"
                  >
                    {{ author.name }}
                  </h1>
                  <p
                    class="text-center text-wt-text-on-background sm:text-left wt-body-font text-gray-700 text-md font-regular"
                  ></p>
                  <div class="pt-4 sm:pt-2">
                    <div class="flex justify-center space-x-2 sm:justify-start"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- cards grid -->
            <div
              class="grid grid-cols-1 gap-4 pb-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8"
            >
              <CardComponent v-for="card in cards" :key="card.id" :card="card" />
            </div>

            <div class="mt-6 flex justify-center">
              <button
                class="border font-medium shadow-sm wt-button-font inline-flex items-center disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 justify-center rounded-wt px-4 py-2 text-sm transition-all group-hover:brightness-110"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
