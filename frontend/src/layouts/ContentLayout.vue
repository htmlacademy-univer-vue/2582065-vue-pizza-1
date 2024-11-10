<template>
  <div class="content__wrapper">
    <h1 class="title title--big">{{ title }}</h1>

    <slot></slot>
  </div>
</template>

<script setup>
  import {defineProps} from 'vue';

  const props = defineProps({
    title: String,
  });
</script>