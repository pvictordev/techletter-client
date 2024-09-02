<script setup lang="ts"></script>

<template>
  <main class="flex-grow dark:bg-emerald-950 dark:text-white">
    <div>
      <div class="sticky top-0 z-50 w-full">
        <div
          aria-valuemax="100"
          aria-valuemin="0"
          aria-valuenow="0"
          aria-valuetext="0%"
          role="progressbar"
          data-state="loading"
          data-value="0"
          data-max="100"
          class="relative overflow-hidden h-1.5 bg-transparent w-full"
        >
          <div
            data-state="loading"
            data-value="0"
            data-max="100"
            class="h-full w-full bg-wt-primary"
            style="width: 0%"
          ></div>
        </div>
      </div>

      <div class="mx-auto max-w-6xl px-4">
        <!-- actions buttons -->
        <div
          class="fixed bottom-0 left-0 top-auto z-20 w-full rounded shadow-xl transition-all duration-300 ease-in-out md:bottom-auto md:z-auto md:w-fit md:border-none md:shadow-none opacity-100 md:top-20"
        >
          <div
            class="absolute left-0 top-0 w-full border border-t border-wt-text-on-background opacity-10 md:hidden"
          ></div>
          <div class="mx-auto w-full max-w-6xl px-0 lg:px-4">
            <div class="flex flex-col gap-8 md:h-40">
              <div class="">
                <div
                  class="grid grid-cols-3 glass-effect p-4 px-8 sm:p-2 sm:px-2 md:grid-cols-1 md:gap-2"
                >
                  <div class="flex flex-col justify-center md:left-1">
                    <div
                      class="flex h-7 w-7 items-center justify-center rounded-wt transition-all hover:bg-black/5"
                    >
                      <button class="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          class="h-6 w-6 stroke-1 text-wt-text-on-background opacity-50"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-center gap-3 md:flex-col md:items-start md:gap-1"
                  >
                    <button class="group" type="button">
                      <div
                        class="text-wt-text-on-background opacity-50 group-hover:opacity-100 flex items-center"
                      >
                        <div class="rounded-full p-1 hover:bg-[#f3f4f6]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-7 w-7 outline-none h-4 w-4 stroke-1"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            ></path>
                          </svg>
                        </div>
                        <span
                          class="text-[#6B7280] text-wt-text-on-background text-sm font-medium group-hover:opacity-100"
                          >1</span
                        >
                      </div></button
                    ><button
                      class="group relative top-[1px] flex items-center outline-none md:pt-0"
                    >
                      <div class="rounded-full p-1 hover:bg-[#f3f4f6]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-7 w-7 stroke-1 text-wt-text-on-background opacity-50 group-hover:opacity-100"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                          ></path>
                        </svg>
                      </div>
                      <span
                        class="hidden relative -top-[1px] text-sm font-medium group-hover:opacity-100 md:top-0"
                        >0</span
                      >
                    </button>
                    <div
                      class="relative z-20 inline-block text-left md:z-0"
                      data-headlessui-state=""
                    >
                      <button
                        class="relative right-[2px] top-[1.5px] outline-none md:right-[0px]"
                        id="headlessui-menu-button-:r13:"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-headlessui-state=""
                      >
                        <div class="flex items-center rounded-full p-1 hover:bg-[#f3f4f6]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="text-wt-text-on-background opacity-50 hover:opacity-100 h-7 w-7 stroke-1 text-gray-400"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- heading -->
        <div class="">
          <div class="mx-auto flex max-w-2xl flex-col pb-4">
            <!-- top bar -->
            <div class="mt-8" style="padding-left: 14px; padding-right: 14px">
              <ul class="flex flex-wrap items-center gap-2 text-xs font-semibold mb-7">
                <li class="flex items-center gap-2 text-wt-text-on-background">
                  <a href="../" class="opacity-70">Tech Letter</a
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    height="14px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </li>
                <li class="flex items-center gap-2 text-wt-text-on-background">
                  <span class="opacity-70">Posts</span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    height="14px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </li>
                <li class="flex items-center gap-2 text-wt-text-on-background">
                  <span class="!opacity-100">Telegram's CEO Arrested: What You Need to Know</span>
                </li>
              </ul>
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
        <div class="pb-8">
          <div class="mx-auto max-w-2xl" style="padding-left: 14px; padding-right: 14px">
            <div class="flex items-center justify-between gap-4 py-2">
              <h4 class="leading-none text-wt-text-on-background text-lg sm:text-xl font-bold">
                Reply
              </h4>
              <div class="">
                <div class="relative inline-block text-left" data-headlessui-state="">
                  <div>
                    <button
                      class="inline-flex w-full justify-center whitespace-nowrap rounded-wt border px-4 py-1 text-sm font-medium text-wt-text-on-background"
                      id="headlessui-menu-button-:r15:"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      Newest first<svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="-mr-1 ml-2 h-5 w-5 text-wt-text-on-background"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="pb-4">
              <div class="relative">
                <div
                  class="overflow-hidden rounded-wt border border-gray-300 shadow-sm focus-within:border-wt-primary focus-within:ring-1 focus-within:ring-wt-primary"
                >
                  <label for="comment" class="sr-only">Add your comment</label
                  ><textarea
                    rows="2"
                    name="content"
                    id="comment"
                    class="block w-full resize-none border-0 bg-transparent py-3 text-sm focus:ring-0"
                    placeholder="Add your comment..."
                  ></textarea>
                  <div class="py-2" aria-hidden="true">
                    <div class="py-px"><div class="h-6"></div></div>
                  </div>
                </div>
                <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                  <div class="flex items-center space-x-5"><div class="flex-shrink-0"></div></div>
                  <div class="flex-shrink-0 pr-1">
                    <button
                      type="button"
                      class="border font-medium shadow-sm wt-button-font inline-flex items-center disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 justify-center transition-colors rounded-wt px-2 py-1 text-sm border-wt-primary text-wt-text-on-primary bg-wt-primary disabled:border-gray-500 focus:ring-wt-primary"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
              <span
                class="opacity-75 wt-body-font text-wt-text-on-background text-xs sm:text-sm font-regular"
                ><button><span class="underline">Login</span></button> or
                <button><span class="underline">Subscribe</span></button> to participate.</span
              >
            </div>
          </div>
        </div>

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

<style scoped>
.glass-effect {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
