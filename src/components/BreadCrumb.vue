<script setup lang="ts">
interface Breadcrumb {
  label: string
  link?: string
  isCurrent?: boolean
}

const props = defineProps<{
  breadcrumbs: Breadcrumb[]
}>()

const isValidBreadcrumb = (value: Breadcrumb[]): boolean => {
  return value.every((crumb) => 'label' in crumb && ('link' in crumb || 'isCurrent' in crumb))
}

if (!isValidBreadcrumb(props.breadcrumbs)) {
  console.error('Invalid breadcrumb structure.')
}
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
