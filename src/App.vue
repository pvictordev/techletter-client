<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

import 'primeicons/primeicons.css'
</script>

<template>
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
</template>
