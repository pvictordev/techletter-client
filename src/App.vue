<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  root page
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView />
</template>
