<script setup lang="ts">
import { projects } from '~/data/projects';
import { award, jobs } from '~/data/resume';

const featured = projects.slice(0, 4);

const highlights = [
  { value: '15+ years', label: 'building for the web' },
  { value: 'Lead Developer', label: 'promoted from intern at a Seattle-area agency' },
  { value: 'Award winner', label: `${award.name}, ${award.from}` },
  { value: 'Since 2021', label: 'running my own studio' },
];
</script>

<template>
  <div>
    <section class="max-w-3xl py-12 sm:py-20">
      <h1 class="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">Web developer and designer.</h1>
      <p class="mt-6 text-lg text-ink/70">
        I'm Crystal Fetterman, a web developer and designer in Bremerton, Washington. I build modern front ends in Nuxt and Vue, custom
        WordPress and e-commerce sites, and the APIs and databases behind them, with 15+ years of experience from agency work to running
        my own studio, Prizm Studio.
      </p>
      <div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 whitespace-nowrap text-sm">
        <NuxtLink to="/work" class="rounded-sm bg-ink px-6 py-3 text-paper hover:bg-accent">See my work</NuxtLink>
        <NuxtLink to="/resume" class="py-3 underline underline-offset-4 hover:text-accent">View resume</NuxtLink>
        <NuxtLink to="/contact" class="py-3 underline underline-offset-4 hover:text-accent">Get in touch</NuxtLink>
      </div>
    </section>

    <section aria-label="Highlights" class="border-t border-ink/10 py-12">
      <dl class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="item in highlights" :key="item.value">
          <dt class="text-2xl font-medium tracking-tight">{{ item.value }}</dt>
          <dd class="mt-1 text-sm text-ink/60">{{ item.label }}</dd>
        </div>
      </dl>
    </section>

    <section class="grid gap-10 border-t border-ink/10 py-16 sm:grid-cols-2">
      <div>
        <h2 class="text-xl font-medium">Web development</h2>
        <p class="mt-3 text-ink/70">Websites, online stores and web apps built with Nuxt, Vue, WordPress, WooCommerce and Tailwind, plus the APIs and databases (GraphQL, PostgreSQL, Prisma, MySQL) that power them.</p>
      </div>
      <div>
        <h2 class="text-xl font-medium">Graphic design</h2>
        <p class="mt-3 text-ink/70">Logos, brand identities, print pieces and HTML email campaigns, designed in Adobe InDesign, Affinity and Canva.</p>
      </div>
    </section>

    <section class="border-t border-ink/10 py-16">
      <div class="mb-10 flex items-baseline justify-between">
        <h2 class="text-2xl font-medium tracking-tight">Selected work</h2>
        <NuxtLink to="/work" class="text-sm hover:text-accent">All work &rarr;</NuxtLink>
      </div>
      <div class="grid gap-x-8 gap-y-14 sm:grid-cols-2">
        <ProjectCard v-for="project in featured" :key="project.slug" :project="project" />
      </div>
    </section>

    <section class="border-t border-ink/10 py-16">
      <div class="mb-10 flex items-baseline justify-between">
        <h2 class="text-2xl font-medium tracking-tight">Experience</h2>
        <NuxtLink to="/resume" class="text-sm hover:text-accent">Full resume &rarr;</NuxtLink>
      </div>
      <ol class="divide-y divide-ink/10">
        <li v-for="job in jobs" :key="job.company" class="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-6">
          <div>
            <p class="font-medium">{{ job.title }}</p>
            <p class="text-ink/60">{{ job.company }} · {{ job.location }}</p>
          </div>
          <p class="text-sm text-ink/50 sm:pt-1">{{ job.start }} – {{ job.end }}</p>
        </li>
      </ol>
    </section>
  </div>
</template>
