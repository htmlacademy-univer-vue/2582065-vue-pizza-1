<template>
  <app-drag :data="ingredient">
    <span class="filling filling--mushrooms">
      {{ ingredient.name }}
    </span>
  </app-drag>
  <app-counter @increment="onIncrement"
               @decrement="onDecrement"></app-counter>
</template>

<script setup>
  import {toRefs} from 'vue';

  import {events} from '../events';
  import {eventEmitter} from '../services/event-bus';

  import AppDrag from './AppDrag.vue';
  import AppCounter from './AppCounter.vue';

  const props = defineProps({
    ingredient: Object,
  });

  const onIncrement = () => {
    eventEmitter.emit(events.ADD_FILLING, {data: ingredient.value});
  }

  const onDecrement = () => {
    eventEmitter.emit(events.REMOVE_FILLING, {data: ingredient.value});
  }

  const {ingredient} = toRefs(props);
</script>
