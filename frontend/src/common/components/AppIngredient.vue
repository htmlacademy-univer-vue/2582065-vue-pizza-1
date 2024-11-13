<template>
  <span class="filling filling--mushrooms">
    {{ ingredient.name }}
  </span>
  <app-counter></app-counter>
</template>

<script setup>
  import {toRefs} from 'vue';

  import AppCounter from './AppCounter.vue';

  const props = defineProps({
    ingredient: {
      type: [Object],
      required: true,
    },
  });

  const {ingredient} = toRefs(props);
</script>
