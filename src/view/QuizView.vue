<script setup>
  import Question from "../components/Question.vue";
  import QuizHeader from "../components/QuizHeader.vue";
  import Result from "../components/Result.vue";
  import {useRoute, useRouter} from "vue-router";
  import {ref, watch, computed} from "vue";
  import quizes from "../data/quizes.json"

  const route = useRoute()
  const quizId = parseInt(route.params.id);
  const quiz = quizes.find(q => q.id === quizId)
  const currentQuestionIndex = ref(0)
  const numberOfCorrectAnswers = ref(0)
  const showResult = ref(false)

/* const questionStatus = ref (`${currentQuestionIndex.value}/${quiz["questions"].length}`)

  watch(() => currentQuestionIndex.value, () => {
    questionStatus.value = `${currentQuestionIndex.value}/${quiz["questions"].length}`
  }) */

  const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz["questions"].length}`)
  const barPercentage = computed(() => `${currentQuestionIndex.value/quiz["questions"].length * 100}%`)

  const onOptionSelected = (isCorrect) => {
    if (isCorrect) numberOfCorrectAnswers.value++;

    console.log(quiz["questions"].length - 1 === currentQuestionIndex.value)

    if (quiz["questions"].length - 1 === currentQuestionIndex.value)
      showResult.value = true


    currentQuestionIndex.value++
  }

</script>

<template>
  <div>
    <QuizHeader
        :questionStatus="questionStatus"
        :barPercentage="barPercentage"
    />
    <div>
      <Question
          v-if="!showResult"
          :question="quiz['questions'][currentQuestionIndex]"
          @selectOption="onOptionSelected"
      />
      <Result
          v-else
          :quizQuestionLength="quiz['questions'].length"
          :numberOfCorrectAnswers="numberOfCorrectAnswers"
      />

      <button @click="currentQuestionIndex++">Next Question</button>
    </div>
  </div>
</template>
