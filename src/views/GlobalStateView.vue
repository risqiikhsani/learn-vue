<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="flex flex-col gap-2 items-center">
    <h1>Global State use pinia</h1>
    {{ counter.count }}
    <button @click="counter.increment()" class="border border-black p-2 rounded-2xl">
      Increment
    </button>
    <button @click="counter.decrement()" class="border border-black p-2 rounded-2xl">
      Decrement
    </button>
    <button>{{ counter.doubleCount }}</button>
  </div>
</template>
