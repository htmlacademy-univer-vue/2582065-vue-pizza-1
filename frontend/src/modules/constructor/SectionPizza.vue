<template>
  <div class="content__pizza">
    <app-input type="text"
               ariaText="Название пиццы"
               placeholder="Введите название пиццы"
               v-model="pizzaName"/>

    <div class="content__constructor">
      <div class="pizza pizza--foundation--big-tomato">
        <div class="pizza__wrapper">
          <div class="pizza__filling pizza__filling--ananas"></div>
          <div class="pizza__filling pizza__filling--bacon"></div>
          <div class="pizza__filling pizza__filling--cheddar"></div>
        </div>
      </div>
    </div>

    <div class="content__result">
      <p>Итого: 0 ₽</p>
      <button type="button" class="button" disabled>Готовьте!</button>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';

  import AppInput from '../../common/components/AppInput.vue';

  const pizzaName = ref(''); 
</script>
