<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

type Item = {
  label: string;
  path: string;
};

type NavItem = {
  label: string;
  to: string;
  class: string;
};

type CreateNavItemParams = {
  label: string;
  path: string;
  isMobile?: boolean;
};

type CreateNavItemType = (params: CreateNavItemParams) => NavItem;

const createNavItem: CreateNavItemType = ({
  label,
  path,
  isMobile = false,
}: CreateNavItemParams): NavItem => ({
  label,
  to: path,
  class: `${
    isMobile ? "text-xl justify-center" : "text-lg py-7.5 px-6"
  } capitalize hover:text-primary ${
    useRoute().path === path ? "text-primary" : "text-white"
  }`,
});

const navItems: Item[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const items = ref<NavigationMenuItem[]>([
  [
    {
      label: "Jalil Abdullayev",
      to: "/",
      class:
        "text-xl py-7.5 px-6 capitalize hover:text-primary text-white duration-150",
    },
  ],
  navItems.map(
    (item: Item): NavItem =>
      createNavItem({ label: item.label, path: item.path })
  ),
]);

const mobileItems = ref<NavigationMenuItem[]>([
  navItems.map(
    (item: Item): NavItem =>
      createNavItem({ label: item.label, path: item.path, isMobile: true })
  ),
]);

const open: Ref<boolean> = ref(false);
</script>

<template>
  <UNavigationMenu
    :items="items"
    class="container items-center justify-between max-md:hidden"
    variant="link"
  />
  <nav class="container flex items-center justify-between md:hidden py-7.5">
    <NuxtLink
      to="/"
      class="text-xl text-white capitalize duration-150 hover:text-primary"
    >
      Jalil Abdullayev
    </NuxtLink>
    <UDrawer
      v-model:open="open"
      direction="top"
      should-scale-background
      set-background-color-on-scale
      :ui="{
        header:
          'flex items-center justify-between border-b-2 border-zinc-800 pb-4',
      }"
    >
      <UButton color="neutral" variant="ghost" size="xl" class="rotate-180">
        <UIcon name="i-heroicons-solid-menu-alt-1" class="w-9 h-7" />
      </UButton>
      <template #header>
        <NuxtLink
          to="/"
          class="text-xl text-white capitalize duration-150 hover:text-primary"
        >
          Jalil Abdullayev
        </NuxtLink>
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-x"
          size="xl"
          @click="open = false"
        />
      </template>
      <template #body>
        <UNavigationMenu
          :items="mobileItems"
          variant="link"
          orientation="vertical"
          class="h-[calc(100vh-10rem)] [&>ul]:p-4 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-4"
        />
      </template>
    </UDrawer>
  </nav>
</template>
