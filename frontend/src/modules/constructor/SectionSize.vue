<template>
  <div class="content__diameter">
    <app-sheet title="Выберите размер"
               extraContentClasses="diameter">
      <app-radio v-for="size in sizes"
                 name="dought"
                 labelClasses="diameter__input diameter__input--small"
                 inputClasses="visually-hidden"
                 :key="size.id"
                 :value="size.id"
                 :text="size.name"
                 v-model="selectedSize" />
    </app-sheet>
  </div>
</template>

<script setup>
  import {ref} from 'vue';

  import sizes from '../../mocks/sizes.json';

  import AppRadio from '../../common/components/AppRadio.vue';
  import AppSheet from '../../common/components/AppSheet.vue';

  const selectedSize = ref(sizes[0].id);
</script>
