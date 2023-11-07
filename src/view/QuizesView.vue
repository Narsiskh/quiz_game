<script setup>
import q from "../data/quizes.json"
import {ref, watch} from "vue"
import Card from "../components/Card.vue"

const quizes = ref(q)
const search = ref("")

watch(search,() => {
  quizes.value = q.filter
  (quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
<main>
  <header class="header">
    <h1>Quizes</h1>
    <input v-model.trim ="search" type="text" placeholder="Search...">
  </header>
  <div class="options-container">
    <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
  </div>
</main>
</template>

<style src="../assets/quizes_view.sass" scoped lang="sass"></style>