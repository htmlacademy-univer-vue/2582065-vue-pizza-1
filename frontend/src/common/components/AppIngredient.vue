<template>
  <app-drag>
    <span class="filling filling--mushrooms">
      {{ ingredient.name }}
    </span>
  </app-drag>
  <app-counter></app-counter>
</template>

<script setup>
  import {toRefs} from 'vue';

  import AppDrag from './AppDrag.vue';
  import AppCounter from './AppCounter.vue';

  const props = defineProps({
    ingredient: Object,
  });

  const {ingredient} = toRefs(props);
</script>
