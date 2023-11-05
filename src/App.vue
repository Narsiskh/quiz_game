<script setup>
import q from "./data/quizes.json"
import {ref, watch} from "vue";

const quizes = ref(q)
const search = ref("")

watch(search,() => {
  quizes.value = q.filte
  r(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim ="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
      <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="">
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{ quiz['questions'].length }}Questions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./assets/style.sass" scoped lang="sass"></style>