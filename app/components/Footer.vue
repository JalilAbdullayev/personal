<script setup lang="ts">
const year =
  new Date().getFullYear() === 2025
    ? "2025"
    : `2025 - ${new Date().getFullYear()}`;
type Social = {
  icon: string;
  link: string;
};

const socials = ref<Social[]>([
  {
    icon: "i-fa7-brands:whatsapp",
    link: "https://wa.me/994104154315",
  },
  {
    icon: "i-fa7-brands:telegram",
    link: "https://t.me/Jalil02",
  },
  {
    icon: "i-fa7-brands:github",
    link: "https://github.com/JalilAbdullayev",
  },
  {
    icon: "i-fa7-brands:linkedin-in",
    link: "https://linkedin.com/in/jalil-abdullayev",
  },
  {
    icon: "i-fa7-brands:instagram",
    link: "https://instagram.com/jalil_abdullayev_",
  },
  {
    icon: "i-fa7-brands:facebook",
    link: "https://fb.com/calil.abdullayev00",
  },
  {
    icon: "i-fa7-brands:x-twitter",
    link: "https://x.com/jalilabdullayev",
  },
  {
    icon: "i-fa7-brands:threads",
    link: "https://threads.com/@jalil_abdullayev_",
  },
]);
</script>

<template>
  <footer class="container">
    <section
      class="flex lg:items-center justify-between max-lg:flex-col max-lg:gap-8 py-17.5"
    >
      <div class="flex flex-col gap-2.5">
        <h3>Əlaqə</h3>
        <ULink to="tel:+994104154315" class="text-lg font-medium text-white">
          +994 10 415 43 15
        </ULink>
      </div>
      <div class="flex flex-col gap-2.5">
        <h3>E-mail</h3>
        <ULink
          to="mailto:abdullacelil00@gmail.com"
          class="text-lg font-medium text-white"
        >
          abdullacelil00@gmail.com
        </ULink>
      </div>
      <div class="flex flex-col gap-2.5">
        <h3>Sosial media</h3>
        <div class="flex items-center gap-4">
          <UButton
            v-for="social in socials"
            :key="social.icon"
            variant="link"
            :to="social.link"
            target="_blank"
            :icon="social.icon"
            size="lg"
            class="text-neutral-300 hover:scale-110"
          />
        </div>
      </div>
    </section>
    <section
      class="py-7.5 border-t border-zinc-800 text-center text-neutral-300"
    >
      <p>
        &copy; {{ year }}
        <ULink to="/" class="text-white"> Jalil Abdullayev </ULink>
      </p>
    </section>
  </footer>
</template>
