<script setup>
  import {defineProps} from "vue"

  const {
    questionStatus,
    barPercentage
  } = defineProps([
        "questionStatus",
        "barPercentage"
  ])
</script>

<template>
  <header>
    <h4>Question {{ questionStatus }}</h4>
    <div class="bar">
      <div class="completion" :style="{width: barPercentage}"></div>
    </div>
  </header>
</template>

<style src="../assets/quiz_header.sass" scoped lang="sass"></style>