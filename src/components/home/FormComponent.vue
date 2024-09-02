<script setup lang="ts">
import { toastComposable } from '@/composables/toastComposable'

const { email, handleSubmit } = toastComposable()
</script>

<template>
  <form @submit.prevent="handleSubmit" class="group w-full rounded-wt bg-transparent">
    <div class="flex flex-col">
      <!-- input box -->
      <div
        class="flex w-full flex-col items-center border border-primary sm:flex-row overflow-hidden rounded-lg bg-gray-50"
      >
        <!-- input field -->
        <div class="flex w-full items-center">
          <input
            v-model="email"
            autocomplete="email"
            class="text-black p-2 focus:outline-none z-10 w-full bg-transparent placeholder-shown:text-ellipsis text-lg focus:text-lg active:text-lg sm:text-lg"
            placeholder="Enter your email"
            type="email"
            name="email"
          />
        </div>

        <!-- input button -->
        <input
          class="cursor-pointer bg-primary hover:bg-emerald-700 text-white px-5 py-3 font-semibold w-full sm:w-auto text-lg focus:text-lg active:text-lg sm:text-lg rounded-lg sm:rounded-lg-r"
          type="submit"
          value="Subscribe"
        />
      </div>
    </div>
  </form>
</template>
