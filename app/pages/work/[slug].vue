<script setup lang="ts">
import { findProject } from '~/data/projects';

const route = useRoute();
const project = findProject(String(route.params.slug));

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true });
}

useHead({ title: project.title });
useSeoMeta({ description: project.summary });
</script>

<template>
  <article v-if="project">
    <NuxtLink to="/work" class="text-sm text-ink/50 hover:text-accent">&larr; All work</NuxtLink>

    <header class="mt-6 grid gap-8 md:grid-cols-[2fr_1fr]">
      <div>
        <h1 class="text-4xl font-medium tracking-tight">{{ project.title }}</h1>
        <p class="mt-4 text-lg text-ink/70">{{ project.summary }}</p>
        <p v-if="project.award" class="mt-6 inline-block rounded-sm border border-accent/30 px-4 py-2 text-sm text-accent">
          Award: {{ project.award }}
        </p>
      </div>
      <dl class="space-y-3 text-sm">
        <div v-if="project.client">
          <dt class="text-ink/50">Client</dt>
          <dd>{{ project.client }}</dd>
        </div>
        <div v-if="project.role">
          <dt class="text-ink/50">Role</dt>
          <dd>{{ project.role }}</dd>
        </div>
        <div v-if="project.year">
          <dt class="text-ink/50">Year</dt>
          <dd>{{ project.year }}</dd>
        </div>
        <div>
          <dt class="text-ink/50">Tools</dt>
          <dd>{{ project.services.join(', ') }}</dd>
        </div>
        <div v-if="project.url">
          <dt class="text-ink/50">Website</dt>
          <dd>
            <a :href="project.url" target="_blank" rel="noopener" class="underline underline-offset-4 hover:text-accent">
              {{ project.url.replace(/^https?:\/\//, '') }}
            </a>
          </dd>
        </div>
      </dl>
    </header>

    <NuxtImg
      v-if="project.image"
      :src="project.image"
      :alt="project.imageAlt || project.title"
      width="1600"
      class="mt-12 w-full rounded-sm" />

    <div v-if="project.description?.length" class="prose prose-lg mt-12 max-w-2xl">
      <p v-for="(paragraph, i) in project.description" :key="i">{{ paragraph }}</p>
    </div>

    <section v-if="project.highlights?.length" class="mt-12 max-w-2xl">
      <h2 class="text-2xl font-medium tracking-tight">What I built</h2>
      <ul class="mt-6 space-y-3 text-lg text-ink/80">
        <li v-for="(item, i) in project.highlights" :key="i" class="flex gap-3">
          <span class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{{ item }}</span>
        </li>
      </ul>
    </section>
  </article>
</template>
