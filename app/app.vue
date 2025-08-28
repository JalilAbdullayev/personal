<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
</script>
<template>
  <UApp>
    <Header />
    <NuxtPage />
    <Footer />
  </UApp>
  <Analytics />
</template>
