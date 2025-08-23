<template>
  <section class="flex flex-col gap-15">
    <h3
      class="text-3xl font-semibold text-center text-white uppercase font-estedad"
    >
      My Tech Stack
    </h3>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-7.5"
    >
      <UCard
        variant="subtle"
        :ui="{
          root: 'hover:bg-zinc-800 transition-all duration-500 rounded-[100px] ring-0 flex flex-col gap-10 px-5 pt-18 pb-16 group',
          header: 'p-0!',
          footer: 'flex flex-col gap-1.5 p-0! text-center',
        }"
      >
        <template #header>
          <NuxtImg
            src="https://jalilabdullayev.free.nf/public/storage/image/sta-je-html_23-03-2024-21-56-34.jpg"
            alt=""
            class="transition-all duration-500 grayscale group-hover:grayscale-0"
          />
        </template>
        <template #footer>
          <h4 class="text-4xl text-white">92%</h4>
          <h5 class="text-sm font-medium uppercase text-neutral-300">HTML</h5>
        </template>
      </UCard>
      <UCard
        variant="subtle"
        :ui="{
          root: 'hover:bg-zinc-800 transition-all duration-500 rounded-[100px] ring-0 flex flex-col gap-10 px-5 pt-18 pb-16 group',
          header: 'p-0!',
          footer: 'flex flex-col gap-1.5 p-0! text-center',
        }"
      >
        <template #header>
          <NuxtImg
            src="https://jalilabdullayev.free.nf/public/storage/image/sta-je-css_23-03-2024-21-04-27.png"
            alt=""
            class="transition-all duration-500 grayscale group-hover:grayscale-0"
          />
        </template>
        <template #footer>
          <h4 class="text-4xl text-white">85%</h4>
          <h5 class="text-sm font-medium uppercase text-neutral-300">CSS</h5>
        </template>
      </UCard>
    </div>
  </section>
</template>
