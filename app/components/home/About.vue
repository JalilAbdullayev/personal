<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";

const items: TabsItem[] = [
  {
    label: "Experience",
    items: [
      {
        title: "Full Stack Web Developer",
        subtitle: "Arenda.az",
        start_date: " 11/04/2025",
        end_date: "Now",
      },
    ],
  },
  {
    label: "Education",
    items: [
      {
        title: "Test",
        subtitle: "Test",
        start_date: "06/2024",
        end_date: "09/2024",
      },
    ],
  },
];
</script>

<template>
  <UTabs
    :items="items"
    class="w-full"
    :ui="{
      list: 'gap-2.5 rounded-4xl max-w-4xl',
      indicator: 'rounded-[100px]',
      trigger:
        'text-base font-semibold data-[state=active]:text-zinc-900 p-4.5 uppercase',
    }"
  >
    <template #content="{ item }">
      <div class="grid gap-10 mt-10 sm:grid-cols-2">
        <UCard
          v-for="(data, index) in item.items"
          :key="index"
          variant="subtle"
          :ui="{
            header: 'border-0 py-0 flex items-center gap-1.5',
            body: 'border-0 py-0!',
            footer: 'py-0',
          }"
          class="hover:bg-zinc-800 transition-all duration-500 ring-0 flex flex-col gap-2.5 p-9"
        >
          <template #header>
            <UIcon
              name="i-fa6-regular-calendar-days"
              class="text-sm text-primary"
            />
            <h4 class="text-sm text-primary font-estedad">
              {{ data.start_date }} - {{ data.end_date }}
            </h4>
          </template>
          <h2 class="text-xl font-semibold text-white font-estedad">
            {{ data.title }}
          </h2>
          <template #footer>
            <h3 class="text-base font-medium text-neutral-300 font-estedad">
              {{ data.subtitle }}
            </h3>
          </template>
        </UCard>
      </div>
    </template>
  </UTabs>
</template>
