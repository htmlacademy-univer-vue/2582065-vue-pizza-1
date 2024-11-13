<template>
  <main class="content">
    <form action="#" method="post">

      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

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

        <div class="content__ingredients">
          <app-sheet title="Выберите ингредиенты"
                     extraContentClasses="diameter">
            <div class="ingredients__sauce">
              <p>Основной соус:</p>

                <label class="radio ingredients__input">
                <input type="radio" name="sauce" value="tomato" checked>
                <span>Томатный</span>
              </label>
              <label class="radio ingredients__input">
                <input type="radio" name="sauce" value="creamy">
                <span>Сливочный</span>
              </label>
            </div>

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

        <app-pizza v-model="pizzaName">
          <app-input type="text"
                     ariaText="Название пиццы"
                     placeholder="Введите название пиццы"
                     v-model="pizzaName"/>
        </app-pizza>
      </div>

    </form>
  </main>
</template>

<script setup>
  import {ref} from 'vue';

  import dough from '../mocks/dough.json';
  import ingredients from '../mocks/ingredients.json';
  import sizes from '../mocks/sizes.json';

  import AppIngredient from '../common/components/AppIngredient.vue';
  import AppInput from '../common/components/AppInput.vue';
  import AppRadio from '../common/components/AppRadio.vue';
  import AppSheet from '../common/components/AppSheet.vue';
  import AppPizza from '../modules/AppPizza/AppPizza.vue';
  
  const pizzaName = ref(''); 
  const selectedDough = ref(dough[0].id);
  const selectedSize = ref(sizes[0].id); 
</script>
