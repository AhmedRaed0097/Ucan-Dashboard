<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
const primary = ref("rgb(var(--v-theme-primary))");
const secondary = ref("rgb(var(--v-theme-secondary))");
</script>
<template>
  <div class="logo d-flex justify-center">
    <NuxtLink to="/">
        <img width="150" src="/images/logos/logo.svg" alt="logo">
    </NuxtLink>
  </div>
</template>
