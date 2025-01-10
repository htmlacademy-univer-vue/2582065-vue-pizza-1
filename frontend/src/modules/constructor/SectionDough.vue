<template>
  <div class="content__dough">
    <app-sheet title="Выберите тесто"
               extraContentClasses="dough">
      <app-radio v-for="item in dough"
                   name="dought"
                   inputClasses="visually-hidden"
                   :key="item.id"
                   :value="item.id"
                   :text="item.description"
                   :highlightedText="item.name"
                   v-model="selectedDough" />
    </app-sheet>
  </div>
</template>

<script setup>
  import {ref} from 'vue';

  import dough from '../../mocks/dough.json';

  import AppRadio from '../../common/components/AppRadio.vue';
  import AppSheet from '../../common/components/AppSheet.vue';

  const selectedDough = ref(dough[0].id);
</script>
