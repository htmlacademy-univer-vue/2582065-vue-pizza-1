<template>
  <label :class="labelClasses">
    <input type="radio"
           :name="name"
           :value="value"
           :class="inputClasses"
           :checked="modelValue == value"
           @change="onChange" />
    <b v-if="!!highlightedText">{{ highlightedText }}</b>
    <span v-if="!!text">{{ text }}</span>
  </label>
</template>

<script setup>
  import {defineEmits, defineProps} from 'vue';

  const props = defineProps({
    name: String,
    value: [String, Number],
    checked: Boolean,
    modelValue: [String, Number],
    text: String,
    inputClasses: [String, Object],
    labelClasses: [String, Object],
    highlightedText: String,
  });

  const emits = defineEmits(['update:modelValue']);

  const onChange = () => {
    emits('update:modelValue', props.value);
  };
</script>