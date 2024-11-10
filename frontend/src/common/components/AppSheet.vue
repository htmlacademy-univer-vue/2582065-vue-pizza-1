<template>
  <div class="sheet">
    <h2 class="title title--small sheet__title">{{ title }}</h2>
    <div :class="`sheet__content ${extraContentClasses}`">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import {defineProps} from 'vue';

  const props = defineProps({
    title: String,
    extraContentClasses: String,
  });
</script>