<template>
  <div @dragover.prevent="onDragOver"
       @drop.prevent="onDrop">
    <slot :items="items"></slot>
  </div>
</template>

<script setup>
  import {reactive} from 'vue';

  import {events} from '../events';
  import {eventEmitter} from '../services/event-bus';

  const items = reactive([]);

  const onDragOver = (event) => {
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    const data = event.dataTransfer.getData('application/json');
    if (data) {
      eventEmitter.emit(events.DROP, {data: JSON.parse(data)});
    }
  };
</script>
