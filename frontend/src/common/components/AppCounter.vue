<template>
  <div class="counter counter--orange ingredients__counter">
    <button type="button"
            class="counter__button counter__button--minus"
            :disabled="counterValue <= 0"
            @click="onDecrementClick" >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input ref="counter-input"
           type="text"
           name="counter"
           class="counter__input"
           v-model="counterValue"
           @input="onInput" />
    <button type="button"
            class="counter__button counter__button--plus"
            :disabled="counterValue >= 3"
            @click="onIncrementClick">
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script setup>
  import {defineEmits, useTemplateRef, onMounted, ref} from 'vue';

  const input = useTemplateRef('counter-input');
  const emit = defineEmits(['increment', 'decrement']);

  const onInput = () => {
    validate();

    const value = input.value.value;
    if (input.value.checkValidity()) {
      counterValue.value = value;
    } else if (value > 3) {
      counterValue.value  = 3;
    } else {
      counterValue.value  = 0;
    }
  };

  onMounted(() => {
    input.value.setCustomValidity("");
  });

  const validate = () => {
    const value = Number(input.value.value);
    if (isNaN(value)) {
      input.value.setCustomValidity("Incorrect type");
    } else if (value > 3) {
      input.value.setCustomValidity("Out of range, max value is 3");
    } else if (value < 0) {
      input.value.setCustomValidity("Out of range, min value is 0");
    }  else {
      input.value.setCustomValidity("");
    }
    input.value.reportValidity();
  }

  const onDecrementClick = () => {
    counterValue.value = counterValue.value - 1;
    emit('decrement');
  }

  const onIncrementClick = () => {
    counterValue.value = counterValue.value + 1;
    emit('increment');
  }

  const counterValue = ref(0);
</script>