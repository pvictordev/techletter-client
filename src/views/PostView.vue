<script setup lang="ts">
import { ref } from 'vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import ActionButtons from '@/components/posts/ActionButtons.vue'
import CommentsReply from '@/components/posts/CommentsReply.vue'
import ArticleComponent from '@/components/posts/ArticleComponent.vue'

const breadcrumbs = ref([
  { label: 'Tech Letter', link: '/' },
  { label: 'Posts', link: '/' },
  { label: "Telegram's CEO Arrested: What You Need to Know" }
])
</script>

<template>
  <span id="top"></span>
  <main class="flex-grow dark:bg-emerald-950 dark:text-white">
    <div>
      <div class="sticky top-0 z-50 w-full">
        <div class="relative overflow-hidden h-1.5 bg-transparent w-full">
          <div class="h-full"></div>
        </div>
      </div>

      <div class="mx-auto max-w-6xl px-4 mt-14">
        <!-- actions buttons -->
        <ActionButtons />
        <!-- heading -->
        <div>
          <div class="mx-auto flex max-w-2xl flex-col pb-4">
            <!-- breadcrumb nav -->
            <div class="mt-8 mb-6 px-3">
              <BreadCrumb :breadcrumbs="breadcrumbs" />
            </div>

            <!-- top part -->
            <div class="flex">
              <div class="pt-0 p-3">
                <h1 class="text-4xl pb-8 font-bold">
                  Telegram's CEO Arrested: What You Need to Know
                </h1>
                <div class="line-wrapper">
                  <div>
                    <div class="flex">
                      <div class="flex flex-start">
                        <div class="flex">
                          <!-- profile pic -->
                          <img
                            alt="Author"
                            class="w-12 h-12 rounded-full bg-cover object-cover"
                            src="https://upload.wikimedia.org/wikipedia/commons/0/06/Ryan_Gosling_-_Cannes_Film_Festival_-_02.jpg"
                          />
                        </div>
                        <div class="flex items-center gap-2">
                          <a
                            href="https://www.devnotesdaily.com/authors/bcf5db93-2b19-4bae-9513-5ac18880757b"
                            target="_blank"
                          >
                          </a>

                          <p class="flex flex-col">
                            <span class="underline">Victor Purice</span>
                            <span class="text-slate-500">August 28, 2024</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- content -->
            <div class="content p-3 flex flex-col gap-3">
              <img
                class="rounded-lg"
                src="https://tsh.io/wp-content/uploads/2020/10/vue-new-features-304_.png"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto eos voluptas
                magni sequi alias odio ex impedit, ipsam quisquam nobis, vel nostrum possimus
                temporibus dolores facilis fuga, ipsum excepturi deserunt. Nisi suscipit
                reprehenderit culpa vel quod ipsum, corporis officia ut cum, aperiam facilis natus
                soluta error magni! Quidem repellendus inventore, natus sunt maxime magnam,
                laboriosam minus eius perferendis ipsa pariatur alias voluptates voluptate
                consectetur! Excepturi fugit iste, in, officiis accusamus nesciunt maiores unde
                adipisci quam quibusdam ipsam nam. Esse similique praesentium sunt in, odio,
                mollitia voluptatibus tenetur natus ab. Excepturi fugit iste, in, officiis accusamus
                nesciunt maiores unde adipisci quam quibusdam ipsam nam. Esse similique praesentium
                sunt in, odio, mollitia voluptatibus tenetur natus ab. Excepturi fugit iste, in,
                officiis accusamus nesciunt maiores unde adipisci quam quibusdam ipsam nam. Esse
                similique praesentium sunt in, odio, mollitia voluptatibus tenetur natus ab.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- bottom part -->
      <div class="px-4"></div>
      <div id="comments" class="space-y-8 px-4">
        <!-- comments reply -->
        <CommentsReply />

        <!-- additional articles -->
        <div class="mx-auto max-w-2xl pb-8 px-3">
          <h4 class="pb-6 sm:pb-2 text-lg sm:text-xl font-bold">Keep reading</h4>
          <div class="space-y-6">
            <!-- particular article -->
            <ArticleComponent />

            <!-- view more button -->
            <button
              type="button"
              class="flex items-center text-sm transition-all hover:font-medium"
            >
              <span>View more <i class="pi pi-arrow-right"></i></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
