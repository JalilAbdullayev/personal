<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
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
