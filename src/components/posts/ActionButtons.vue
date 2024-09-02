<script setup lang="ts"></script>

<template>
  <div
    class="fixed bottom-0 left-0 top-auto z-20 w-full rounded shadow-xl transition-all duration-300 ease-in-out md:bottom-auto md:z-auto md:w-fit md:border-none md:shadow-none opacity-100 md:top-20"
  >
    <div
      class="absolute left-0 top-0 w-full border border-t border-wt-text-on-background opacity-10 md:hidden"
    ></div>

    <div class="mx-auto w-full max-w-6xl px-0 lg:px-4">
      <div class="flex flex-col gap-8 md:h-40">
        <div>
          <!-- action box -->
          <div
            class="grid grid-cols-3 glass-effect items-center p-4 px-8 sm:p-2 sm:px-2 md:grid-cols-1 md:gap-2"
          >
            <!-- action button -->
            <div class="flex items-center justify-center gap-3 md:flex-col md:items-start md:gap-1">
              <button class="group" type="button">
                <div
                  class="flex items-center hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-1 gap-2"
                >
                  <i class="pi pi-arrow-left p-2"></i>
                </div>
              </button>
            </div>

            <!-- action button group  -->
            <div class="flex items-center justify-center gap-3 md:flex-col md:items-start md:gap-1">
              <button class="group" type="button">
                <div
                  class="flex items-center hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-1 gap-1"
                >
                  <i class="pi pi-heart p-2"></i>
                  <span class="text-sm font-medium group-hover:opacity-100">1</span>
                </div>
              </button>

              <a href="#reply" class="group" type="button">
                <div
                  class="flex items-center hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-1 gap-2"
                >
                  <i class="pi pi-comments p-2"></i>
                </div>
              </a>

              <button class="group" type="button">
                <div
                  class="flex items-center hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-1 gap-2"
                >
                  <i class="pi pi-share-alt p-2"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass-effect {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
