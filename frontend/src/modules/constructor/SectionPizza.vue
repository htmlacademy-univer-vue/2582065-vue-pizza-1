<template>
  <div class="content__pizza">
    <app-input type="text"
               ariaText="Название пиццы"
               placeholder="Введите название пиццы"
               v-model="pizzaName"/>

    <div class="content__constructor">
      <div class="pizza pizza--foundation--big-tomato">
        <app-drop>
          <div class="pizza__wrapper">
            <div v-for="filling in fillings"
                 :class="`pizza__filling ${filling}`"></div>
          </div>
        </app-drop>
      </div>
    </div>

    <div class="content__result">
      <p>Итого: 0 ₽</p>
      <button type="button" class="button" disabled>Готовьте!</button>
    </div>
  </div>
</template>

<script setup>
  import {ref, onMounted, onBeforeUnmount, computed} from 'vue';

  import {events} from '../../common/events';
  import {eventEmitter} from '../../common/services/event-bus';

  import AppDrop from '../../common/components/AppDrop.vue';
  import AppInput from '../../common/components/AppInput.vue';

  const fillingsCountMap = {
    0: 'first',
    1: 'second',
    2: 'third',
  };

  const fillingMap = {
    1: 'mushrooms',
    2: 'cheddar',
    3: 'salami',
    4: 'ham',
    5: 'ananas',
    6: 'bacon',
    7: 'onion',
    8: 'chile',
    9: 'jalapeno',
    10: 'olives',
    11: 'tomatoes',
    12: 'salmon',
    13: 'mozzarella',
    14: 'parmesan',
    15: 'blue_cheese',
  };

  const fillingsCount = ref({});
  const pizzaName = ref(''); 

  const fillings = computed(() => {
    return Object.entries(fillingsCount.value).flatMap(([filling, amount]) =>
        Array.from({length: amount}, (_, index) =>
            `pizza__filling--${fillingMap[filling]}` +
                ` pizza__filling--${fillingsCountMap[index]}`));
  });

  const onFillingAdded = (event) => {
    if (event.data) {
      const filling = event.data.id;
      fillingsCount.value[filling] = (fillingsCount.value[filling] || 0) + 1;
    }
  }

  const onFillingRemoved = (event) => {
    if (event.data) {
      const filling = event.data.id;
      fillingsCount.value[filling] = (fillingsCount.value[filling] || 0) - 1;
    }
  }

  onMounted(() => {
    eventEmitter.on(events.DROP, onFillingAdded);
    eventEmitter.on(events.ADD_FILLING, onFillingAdded);
    eventEmitter.on(events.REMOVE_FILLING, onFillingRemoved);
  });

  onBeforeUnmount(() => {
    eventEmitter.off(events.DROP, onFillingAdded);
    eventEmitter.off(events.ADD_FILLING, onFillingAdded);
    eventEmitter.off(events.REMOVE_FILLING, onFillingRemoved);
  });
</script>
