<script setup lang="ts">
import AuthorComponent from '@/components/authors/AuthorComponent.vue'
import authorsData from '@/assets/data.json'
import { ref } from 'vue'
import BreadCrumb from '@/components/BreadCrumb.vue'

const authors = ref(authorsData.authors)
const breadcrumbs = ref([{ label: 'Tech Letter', link: '/' }, { label: 'Authors' }])
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
              <AuthorComponent v-for="author in authors" :key="author.id" :author="author" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
