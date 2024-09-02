<script setup lang="ts">
defineProps<{
  card: {
    id: number
    title: string
    image: string
    link: string
    author: string
    date: string
  }
}>()
</script>

<template>
  <div class="transparent h-full cursor-pointer overflow-hidden rounded-2xl flex flex-col border">
    <div class="relative w-full article-image">
      <router-link to="/posts/:id" class="">
        <div class="w-full">
          <figure class="relative h-full aspect-social overflow-hidden w-full">
            <img
              width="800"
              height="421"
              :src="card.image"
              alt="article image"
              class="inset-0 h-full w-full object-cover"
            />
          </figure>
        </div>
      </router-link>
    </div>

    <div class="w-full p-3">
      <div class="space-y-3">
        <a class="top" href="/">
          <div class="space-y-2">
            <div class="flex flex-wrap-reverse items-center justify-between">
              <div class="flex items-center space-x-1">
                <span class="text-slate-400 text-xs sm:text-sm font-light font-helvetica">
                  <time datetime="2024-08-30T12:00:00.000Z">{{ card.date }}</time></span
                >
              </div>
              <div class="flex items-center space-x-3">
                <span class="flex items-center space-x-0.5 text-sm font-regular font-ariel"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="h-4 w-4"
                  >
                    <path
                      d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
                    ></path></svg></span
                ><span class="flex items-center space-x-0.5 text-sm font-regular font-ariel"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="h-4 w-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                      clip-rule="evenodd"
                    ></path></svg
                ></span>
              </div>
            </div>
            <div class="cursor-pointer space-y-1">
              <h2
                class="line-clamp-2 hover:underline sm:line-clamp-3 text-lg sm:text-xl font-semibold font-helvetica"
              >
                {{ card.title }}
              </h2>
            </div>
          </div>
        </a>
        <a
          class="group flex flex-col items-start space-x-0 space-y-1 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0"
          href="/authors"
        >
          <div class="flex -space-x-1.5 overflow-hidden">
            <div class="h-7 w-7 rounded-full">
              <img
                class="inline-block h-7 w-7 rounded-full"
                src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
                alt="Victor Purice"
              />
            </div>
          </div>
          <div class="flex items-center">
            <span
              class="group-hover:underline text-xs sm:text-sm text-primary font-semibold font-helvetica"
              >{{ card.author }}</span
            >
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
