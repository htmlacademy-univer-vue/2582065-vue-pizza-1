<template>
  <div :draggable="true"
       @dragstart="onDragStart">
    <slot></slot>
  </div>
</template>

<script setup>
import {toRefs} from 'vue';

const props = defineProps({
  data: {
    type: [String, Object],
    required: true,
  },
});

const {data} = toRefs(props);

const onDragStart = (event) => {
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('application/json', JSON.stringify(data.value));
};
</script>
