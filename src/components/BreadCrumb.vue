<script setup lang="ts">
interface Breadcrumb {
  label: string
  link?: string
  isCurrent?: boolean
}

defineProps<{
  breadcrumbs: Breadcrumb[]
}>()
</script>

<template>
  <ul class="flex flex-wrap items-center gap-2 text-xs font-semibold">
    <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center gap-2">
      <span v-if="crumb.link" class="flex items-center gap-2">
        <router-link :to="crumb.link" class="opacity-70">{{ crumb.label }}</router-link>
        <i class="opacity-70 pi pi-angle-right"></i>
      </span>

      <span v-else :class="{ 'opacity-100': crumb.isCurrent }">
        {{ crumb.label }}
      </span>
    </li>
  </ul>
</template>
