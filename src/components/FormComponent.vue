<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { ref } from 'vue'

const toast = useToast()
const email = ref('')
const errorMessage = ref('')

const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

const handleSubmit = () => {
  if (validateEmail(email.value)) {
    errorMessage.value = ''
    email.value = ''
    showSuccess()
  } else {
    showFailure()
    errorMessage.value = 'Please enter a valid email address.'
  }
}

const showSuccess = () => {
  toast.success('Successfully subscribed !')
}

const showFailure = () => {
  toast.error('Enter a valid email address')
}
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
          class="cursor-pointer bg-primary text-white px-5 py-3 font-semibold w-full sm:w-auto text-lg focus:text-lg active:text-lg sm:text-lg rounded-lg sm:rounded-lg-r"
          type="submit"
          value="Subscribe"
        />
      </div>
      <!-- <p v-if="errorMessage" class="text-red-500 text-sm mt-2">
                            {{ errorMessage }}
                          </p> -->
    </div>
  </form>
</template>
