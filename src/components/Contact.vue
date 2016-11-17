<template lang="jade">
section.section.summary
  | 연락하기
  form
    .row
      .six.columns
        label 이메일
        input(type="text").u-full-width
      .six.columns
        label 종류
        select.u-full-width
          option(v-for="question in questions", v-bind:value="question.value") {{question.text}}
    .row
      .twelve.columns
        label 메시지
        textarea.u-full-width
        label
    .row
      .twelve.columns.u-text-center
        input(type="submit", value="보내기").button-primary
</template>

<script>
export default {
  data () {
    return {
      questions: [
        { value: '1', text: '개인 질문' },
        { value: '2', text: '업무 문의' },
        { value: '3', text: '홈페이지 문의' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
