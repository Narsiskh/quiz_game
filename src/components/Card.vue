<script setup>
  import {defineProps} from "vue"
  const {quiz} = defineProps(["quiz"])
</script>

<template>
<div class="card" @click="$router.push(`/quiz/${quiz.id}`)">
  <img :src="quiz.img" alt="">
  <div class="card-text">
    <h2>{{ quiz.name }}</h2>
    <p>{{ quiz['questions'].length }}Questions</p>
  </div>
</div>
</template>

<style src="../assets/card.sass" scoped lang="sass"></style>