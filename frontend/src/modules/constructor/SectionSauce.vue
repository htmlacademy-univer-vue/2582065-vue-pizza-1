<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>

    <app-radio v-for="sauce in sauces"
               labelClasses="radio ingredients__input"
               inputClasses="radio"
               name="sauce"
               :key="sauce.id"
               :text="sauce.name"
               :value="sauce.value"
               v-model="selectedSauce" />
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  
  import AppRadio from '../../common/components/AppRadio.vue';

  const sauces = [
    {id: 1, name: "Томатный", value: "tomato"},
    {id: 2, name: "Сливочный", value: "creamy"},
  ];

  const selectedSauce = ref(sauces[0].id);
</script>
