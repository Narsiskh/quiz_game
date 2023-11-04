<script setup>
import q from "./data/quizes.json"
import {ref} from "vue";

const quizes = ref(q)
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input type="text">
    </header>
    <div class="options-container">
      <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img src="/math.jpg" alt="">
        <div class="card-text">
          <h2>Math</h2>
          <p>15 Questions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./assets/style.sass" scoped lang="sass"></style>