<script setup lang="ts">
useHead({
  title: "Home",
});
</script>

<template>
  <main class="container flex flex-col gap-30 pt-29 md:pt-32 pb-15">
    <HomeHero />
    <HomeSkills />
    <HomeAbout />
  </main>
</template>
