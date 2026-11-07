<script setup lang="ts">
import { award, education, jobs, skillGroups, summary } from '~/data/resume';

useHead({ title: 'Resume' });
useSeoMeta({
  description: 'Resume of Crystal Fetterman, web developer and designer: experience, skills and education.',
});
</script>

<template>
  <div>
    <header class="max-w-3xl">
      <p class="text-sm uppercase tracking-[0.2em] text-accent">Resume</p>
      <h1 class="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">Crystal Fetterman</h1>
      <p class="mt-2 text-lg text-ink/60">Web Developer &amp; Designer · Bremerton, WA</p>
      <p class="mt-6 text-lg leading-relaxed text-ink/70">{{ summary }}</p>
      <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm print:hidden">
        <NuxtLink to="/contact" class="rounded-sm bg-ink px-6 py-3 text-paper hover:bg-accent">Get in touch</NuxtLink>
        <a
          href="https://www.linkedin.com/in/crystal-fetterman-b737"
          target="_blank"
          rel="noopener"
          class="py-3 underline underline-offset-4 hover:text-accent">
          LinkedIn
        </a>
      </div>
    </header>

    <div class="mt-16 grid gap-16 border-t border-ink/10 pt-16 lg:grid-cols-[2fr_1fr]">
      <section aria-labelledby="experience">
        <h2 id="experience" class="text-2xl font-medium tracking-tight">Experience</h2>
        <ol class="mt-10 space-y-14">
          <li v-for="job in jobs" :key="job.company" class="relative border-l border-ink/10 pl-8">
            <span class="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
            <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 class="text-xl font-medium">{{ job.title }}</h3>
              <p class="text-sm text-ink/50">{{ job.start }} – {{ job.end }}</p>
            </div>
            <p class="mt-1 text-ink/70">
              {{ job.company }} <span class="text-ink/40">· {{ job.location }}</span>
            </p>
            <ul class="mt-5 space-y-2.5 text-ink/80">
              <li v-for="(point, i) in job.points" :key="i" class="flex gap-3">
                <span class="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink/40" aria-hidden="true" />
                <span>{{ point }}</span>
              </li>
            </ul>
            <ul v-if="job.tags?.length" class="mt-5 flex flex-wrap gap-2" aria-label="Tools used">
              <li v-for="tag in job.tags" :key="tag" class="rounded-sm border border-ink/10 px-2.5 py-1 text-xs text-ink/60">{{ tag }}</li>
            </ul>
          </li>
        </ol>
      </section>

      <aside class="space-y-12">
        <section aria-labelledby="skills">
          <h2 id="skills" class="text-2xl font-medium tracking-tight">Skills</h2>
          <div class="mt-8 space-y-7">
            <div v-for="group in skillGroups" :key="group.name">
              <h3 class="text-sm uppercase tracking-[0.15em] text-ink/50">{{ group.name }}</h3>
              <ul class="mt-3 space-y-1.5 text-ink/80">
                <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="education">
          <h2 id="education" class="text-2xl font-medium tracking-tight">Education</h2>
          <p class="mt-6 font-medium">{{ education.school }}</p>
          <p class="mt-1 text-ink/70">{{ education.credential }}</p>
          <p class="mt-1 text-sm text-ink/50">{{ education.location }}</p>
        </section>

        <section aria-labelledby="recognition">
          <h2 id="recognition" class="text-2xl font-medium tracking-tight">Recognition</h2>
          <p class="mt-6 font-medium">{{ award.name }}</p>
          <p class="mt-1 text-ink/70">{{ award.from }}</p>
          <NuxtLink :to="`/work/${award.slug}`" class="mt-2 inline-block text-sm text-accent hover:underline">
            {{ award.project }} &rarr;
          </NuxtLink>
        </section>
      </aside>
    </div>
  </div>
</template>
