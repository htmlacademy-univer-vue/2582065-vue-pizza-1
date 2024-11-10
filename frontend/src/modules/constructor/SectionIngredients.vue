<template>
  <div class="content__ingredients">
    <app-sheet title="Выберите ингредиенты"
               extraContentClasses="diameter">
      <slot></slot>

      <div class="ingredients__filling">
        <p>Начинка:</p>

        <ul class="ingredients__list">
          <li class="ingredients__item"
              v-for="ingredient in ingredients">
            <app-ingredient :ingredient="ingredient"/>
          </li>
        </ul>
      </div>
    </app-sheet>
  </div>
</template>

<script setup>
  import ingredients from '../../mocks/ingredients.json';

  import AppSheet from '../../common/components/AppSheet.vue';
  import AppIngredient from '../../common/components/AppIngredient.vue';
</script>
