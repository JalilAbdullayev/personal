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
    isMobile ? "text-xl justify-center" : "text-lg px-6"
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
      class: "text-xl px-6 capitalize hover:text-primary text-white",
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
const scrolled: Ref<boolean> = ref(false);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  scrolled.value = window.scrollY > 0;
};
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-10 transition-all duration-500"
    :class="{ 'bg-zinc-800 py-1': scrolled, 'py-3': !scrolled }"
  >
    <UNavigationMenu
      :items="items"
      class="container items-center justify-between max-md:hidden"
      variant="link"
    />
    <div class="container flex items-center justify-between md:hidden">
      <ULink to="/" class="text-xl text-white capitalize hover:text-primary">
        Jalil Abdullayev
      </ULink>
      <UDrawer
        v-model:open="open"
        direction="right"
        should-scale-background
        set-background-color-on-scale
        :ui="{
          header:
            'container flex items-center justify-between border-b-2 border-zinc-800 pb-4 gap-4',
        }"
      >
        <UButton color="neutral" variant="ghost" size="xl" class="rotate-180">
          <UIcon name="i-heroicons-solid-menu-alt-1" class="w-9 h-7" />
        </UButton>
        <template #header>
          <ULink
            to="/"
            class="text-xl text-white capitalize hover:text-primary"
          >
            Jalil Abdullayev
          </ULink>
          <UButton
            color="neutral"
            variant="ghost"
            icon="i-fa6-solid-xmark"
            size="xl"
            @click="open = false"
          />
        </template>
        <template #body>
          <UNavigationMenu
            :items="mobileItems"
            variant="link"
            orientation="vertical"
            class="h-[calc(100vh-10rem)] [&>ul]:p-4 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-4 [&>ul]:items-baseline"
          />
        </template>
      </UDrawer>
    </div>
  </header>
</template>
