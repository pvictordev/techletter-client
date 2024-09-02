<script setup lang="ts">
import { ref } from 'vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import ActionButtons from '@/components/ActionButtons.vue'

const breadcrumbs = ref([
  { label: 'Tech Letter', link: '/' },
  { label: 'Posts', link: '/' },
  { label: "Telegram's CEO Arrested: What You Need to Know" }
])
</script>

<template>
  <main class="flex-grow dark:bg-emerald-950 dark:text-white">
    <div>
      <div class="sticky top-0 z-50 w-full">
        <div class="relative overflow-hidden h-1.5 bg-transparent w-full">
          <div class="h-full w-full bg-wt-primary"></div>
        </div>
      </div>

      <div class="mx-auto max-w-6xl px-4">
        <!-- actions buttons -->
        <ActionButtons />
        <!-- heading -->
        <div class="">
          <div class="mx-auto flex max-w-2xl flex-col pb-4">
            <!-- top bar -->
            <div class="mt-8 mb-6" style="padding-left: 14px; padding-right: 14px">
              <BreadCrumb :breadcrumbs="breadcrumbs" />
            </div>
            <!-- title -->
            <div class="flex">
              <div class="web-header pt-0 p-3">
                <h1 class="text-4xl pb-8 font-bold">
                  Telegram's CEO Arrested: What You Need to Know
                </h1>
                <div class="line-wrapper">
                  <div>
                    <div style="display: flex">
                      <div style="display: flex; flex-direction: row; justify-content: flex-start">
                        <div style="display: flex">
                          <img
                            alt="Author"
                            height="40"
                            src="https://upload.wikimedia.org/wikipedia/commons/0/06/Ryan_Gosling_-_Cannes_Film_Festival_-_02.jpg"
                            style="
                              height: 40px;
                              width: 40px;
                              border: 4px solid rgba(0, 0, 0, 0);
                              left: -4px;
                              z-index: 10;
                              box-sizing: content-box;
                              position: relative;
                              border-radius: 9999px;
                            "
                            width="40"
                          />
                        </div>
                        <div style="display: flex; align-items: center">
                          <p
                            style="
                              left: 8px;
                              position: relative;
                              font-family: 'Helvetica', Arial, sans-serif;
                              font-weight: normal;
                              font-size: 14px;
                              color: var(--wt-text-on-background-color);
                              margin: 0px;
                              line-height: 20px;
                            "
                          >
                            <span
                              ><a
                                href="https://www.devnotesdaily.com/authors/bcf5db93-2b19-4bae-9513-5ac18880757b"
                                target="_blank"
                                >Victor Purice</a
                              ></span
                            ><br /><span class="text-wt-text-on-background" style="opacity: 0.75">
                              August 28, 2024
                            </span>
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
                mollitia voluptatibus tenetur natus ab, velit possimus totam? Assumenda excepturi
                impedit totam, quidem dolor natus quas placeat quasi! Praesentium excepturi sed hic
                officiis laudantium eligendi provident, ut sequi quod necessitatibus autem adipisci
                tempore. Cumque eius ut mollitia. Voluptate exercitationem nisi omnis! Itaque,
                nesciunt nulla fugiat hic, esse a tempora maxime rerum dolorum eos ut quod velit
                optio recusandae voluptatibus deserunt sunt soluta natus suscipit? Quod ut quidem
                minima ipsam eveniet fugit repellat, iste quos saepe dolores nesciunt numquam itaque
                optio? Ut rem beatae et tempore, debitis modi, cumque magnam soluta cupiditate
                voluptas doloribus, porro assumenda commodi quae ea fuga officia voluptatum dolore!
                Excepturi nisi voluptate aut, amet illum error molestias in dolore deleniti
                obcaecati quas ad.
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
        <div class="mx-auto w-full max-w-2xl pb-8" style="padding-left: 14px; padding-right: 14px">
          <h4
            class="pb-6 leading-none sm:pb-2 text-wt-text-on-background text-lg sm:text-xl font-bold"
          >
            Keep reading
          </h4>
          <div class="space-y-6">
            <div class="flex flex-col">
              <!-- particular article -->
              <a
                class="group relative flex rounded-wt w-full grid-cols-1 transition-all hover:bg-opacity-25 sm:my-6 sm:grid-cols-2 flex-row mb-6 gap-y-0 sm:mb-0 hover:bg-slate-100/50"
                href="/p/googles-search-monopoly-hammer-falls"
                ><div
                  class="z-10 col-span-1 w-full overflow-hidden rounded-wt border bg-slate-100/50"
                >
                  <figure class="aspect-social relative h-full overflow-hidden w-full">
                    <img
                      loading="lazy"
                      width="800"
                      height="421"
                      src="https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/5a99538a-d9b7-41d3-9ee1-dd6667d27ca8/google.png"
                      alt="Google's Search Monopoly: The Hammer Falls"
                      class="absolute inset-0 h-full w-full object-cover"
                    />
                  </figure>
                </div>
                <div class="z-10 col-span-1 p-4">
                  <h2
                    class="line-clamp-2 text-wt-text-on-background wt-header-font text-wt-text-on-background text-md font-bold"
                  >
                    Google's Search Monopoly: The Hammer Falls
                  </h2>
                  <p
                    class="font-regular mb-2 text-wt-text-on-background opacity-75 wt-header-font line-clamp-4 text-wt-text-on-background text-sm font-regular"
                  ></p>
                  <p
                    class="mb-4 text-wt-text-on-background no-underline opacity-75 wt-header-font text-wt-text-on-background text-xs sm:text-sm font-regular"
                  >
                    <span></span><time datetime="2024-08-07T12:00:00.000Z"></time>
                  </p></div
              ></a>
            </div>

            <!-- view more button -->
            <button
              type="button"
              class="hover flex items-center text-sm text-wt-primary transition-all hover:font-medium"
            >
              <span>View more</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                class="ml-0.5 h-3 w-3 pt-0.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
