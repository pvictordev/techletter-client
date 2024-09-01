<script setup lang="ts"></script>

<template>
  <div
    class="col-span-12 mx-auto mt-12 grid grid-cols-4 grid-rows-2 items-center gap-3 px-4 py-4 pb-8 sm:flex sm:justify-center"
  >
    <div class="order-2 col-span-2 flex justify-end gap-2">
      <a
        class="rounded-lg flex bg-slate-200 dark:bg-emerald-800 items-center gap-2 border border-transparent px-3 py-1 transition duration-150 ease-in-out hover:bg-primary"
        href="/archive?page=1"
        >First
      </a>

      <a
        class="rounded-lg flex bg-slate-200 dark:bg-emerald-800 items-center gap-2 border border-transparent px-3 py-1 transition duration-150 ease-in-out hover:bg-primary"
        href="/archive?page=0"
      >
        <i class="pi pi-chevron-left"></i>
        Back
      </a>
    </div>

    <div class="order-1 col-span-4 flex justify-center gap-3 sm:order-2">
      <a
        class="rounded-lg flex bg-slate-200 dark:bg-emerald-800 items-center gap-2 border border-transparent px-3 py-1 transition duration-150 ease-in-out hover:bg-primary"
        href="/archive?page=1"
        >1
      </a>
      <a
        class="rounded-lg flex bg-slate-200 dark:bg-emerald-800 items-center gap-2 border border-transparent px-3 py-1 transition duration-150 ease-in-out hover:bg-primary"
        href="/archive?page=2"
        >2
      </a>
    </div>

    <div class="wt-button-font order-2 col-span-2 flex items-center gap-2">
      <a
        class="rounded-lg flex bg-slate-200 dark:bg-emerald-800 items-center gap-2 border border-transparent px-3 py-1 transition duration-150 ease-in-out hover:bg-primary"
        href="/archive?page=2"
      >
        Next
        <i class="pi pi-chevron-right"></i>
      </a>
      <a
        class="rounded-lg flex bg-slate-200 dark:bg-emerald-800 items-center gap-2 border border-transparent px-3 py-1 transition duration-150 ease-in-out hover:bg-primary"
        href="/archive?page=13"
      >
        Last
      </a>
    </div>
  </div>
</template>
