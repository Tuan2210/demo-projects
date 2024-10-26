<script setup>
import { reactive, ref } from "vue";

//// ref dung 1 obj va 1 thuoc tinh
// const count = ref(0);
// count.value = count.value + 2;
// count.value = count.value + 3; // 5

//// reactive dung 1 obj co nhieu obj
// const count = reactive({});

//// reactive dung arr thi truyen them ref
// const count = reactive(ref([]));

// const count = ref(1);
// const increase = () => {
//   count.value++;
// };

// const onSubmit = () => {
//   // e.preventDefault();

//   count.value++;
// };

const txtInput = ref("");
console.log("render component");
</script>

<template>
  <!-- <div class="red">Count: {{ count }}</div> -->
  <!-- <button v-on:click="increase">Increase</button> -->
  <!-- <button @click="increase">Increase</button> -->

  <!-- event -->
  <!-- <form @submit.prevent="onSubmit">
    <div>Count: {{ count }}</div>
    <button type="submit">Increase</button>
  </form> -->

  <!-- v-model ho tro 2-way-binding, onChange render dung 1 lan -->
  <div>Text: {{ txtInput }}</div>
  <input type="text" v-model.trim="txtInput" />
</template>

<style>
.red {
  color: red;
}
</style>
