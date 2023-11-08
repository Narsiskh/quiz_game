<script setup>
  import {defineProps} from "vue"
  import {RouterLink} from "vue-router"

  const {numberOfCorrectAnswers, quizQuestionLength} = defineProps(["quizQuestionLength", "numberOfCorrectAnswers"])
</script>

<template>
  <div class="results">
    <p>Your Results...</p>
    <h1>
      4/8
    </h1>
    <RouterLink to="/">Go Back</RouterLink>
  </div>
</template>

<style src="../assets/result.sass" scoped lang="sass"></style>