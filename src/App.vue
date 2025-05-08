<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-2">
          <img src="@/assets/logo.svg" alt="Vue Logo" class="h-10 w-auto" />
          <span class="font-semibold text-xl text-slate-800">MyApp</span>
        </RouterLink>

        <!-- Navigation -->
        <nav class="flex space-x-6">
          <RouterLink
            to="/"
            class="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            active-class="font-bold text-blue-600"
            exact
          >
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            active-class="font-bold text-blue-600"
          >
            About
          </RouterLink>
          <RouterLink
            to="/learn"
            class="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            active-class="font-bold text-blue-600"
          >
            Learn
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <!-- Push content below the fixed header -->
  <main class="pt-20 px-4">
    <RouterView />
  </main>
</template>
