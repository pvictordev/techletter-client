<script setup lang="ts">
import AuthorComponent from '@/components/authors/AuthorComponent.vue'
import { ref, onMounted } from 'vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import router from '@/router'

const breadcrumbs = ref([{ label: 'Tech Letter', link: '/' }, { label: 'Authors' }])

interface Author {
  id: number
  name: string
}

const authors = ref<Author[]>([])

const fetchAuthors = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    if (!response.ok) {
      throw new Error('Failed to fetch author data')
    }
    const userData = await response.json()

    authors.value = userData.slice(0, 4).map((user: Author) => ({
      id: user.id,
      name: user.name
    }))
  } catch (error) {
    console.error(error)
  }
}

onMounted(fetchAuthors)

const goToProfile = (id: number) => {
  router.push({ name: 'AuthorProfile', params: { id } })
}
</script>

<template>
  <div class="flex min-h-screen dark:bg-emerald-950 dark:text-white">
    <main class="flex-grow mt-14">
      <div class="px-4">
        <div class="mx-auto mt-8 max-w-6xl py-4">
          <!-- breadcrumb navigation -->
          <BreadCrumb :breadcrumbs="breadcrumbs" />
        </div>
        <div class="mx-auto flex max-w-6xl pb-16 pt-4">
          <div class="flex flex-col space-y-8">
            <div class="space-y-2">
              <h1 class="font-semibold wt-header-font text-4xl font-regular">Authors</h1>
              <p class="wt-body-font text-lg sm:text-xl font-regular">
                Meet the writers contributing to Tech Letter
              </p>
            </div>
            <!-- authors grid -->
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              <!-- author component -->
              <AuthorComponent
                v-for="author in authors"
                :key="author.id"
                @click="goToProfile(author.id)"
                :author="author"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
