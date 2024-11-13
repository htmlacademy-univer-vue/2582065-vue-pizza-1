<template>
  <label class="input">
    <span class="visually-hidden">{{ ariaText }}</span>
    <input :type="name"
           :name="name"
           :placeholder="placeholder"
           @input="onInput" />
  </label>
</template>

<script setup>
  import {defineEmits, defineProps} from 'vue';

  const props = defineProps({
    type: String,
    name: String,
    value: [String, Number],
    placeholder: String,
    ariaText: String,
    modelValue: [String, Number],
  });

  const emits = defineEmits(['update:modelValue']);

  const onInput = () => {
    emits('update:modelValue', props.value);
  };
</script>