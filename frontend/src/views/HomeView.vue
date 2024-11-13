<template>
  <main class="content">
    <form action="#" method="post">
      <content-layout title="Конструктор пиццы">
        <section-dough></section-dough>

        <section-size></section-size>

        <section-ingredients>
          <section-sauce></section-sauce>
        </section-ingredients>

        <section-pizza></section-pizza>
      </content-layout>
    </form>
  </main>
</template>

<script setup>
  import {ContentLayout} from '../layouts';
  import {
    SectionDough,
    SectionIngredients,
    SectionPizza,
    SectionSauce,
    SectionSize,
  } from '../modules/constructor';
</script>
