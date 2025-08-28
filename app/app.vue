<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>
<template>
  <UApp>
    <Header />
    <NuxtPage />
    <Footer />
  </UApp>
  <Analytics />
  <SpeedInsights />
</template>
