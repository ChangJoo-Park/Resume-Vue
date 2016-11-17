<template lang="jade">
  section#introduce.section.header
    h1.u-text-center.welcome-message Hello! I am&nbsp;
      strong {{introduce.name}}
      | &nbsp;
    p.label(v-show="introduce.jobTitle") {{introduce.jobTitle}}
    p.detail(v-show="introduce.livedIn") {{introduce.livedIn}}
    p.detail(v-show="introduce.summary") {{introduce.summary}}


</template>

<script>
export default {
  props: ['introduce']
}
</script>

<style lang="scss" scoped>
  $header-color: #96999b;

  .header {
    margin-top: 5rem;
  }

  .welcome-message {
    margin-bottom: 5rem;
    font-size: 4rem;
  }
  .label {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .detail {
    color: $header-color;
  }
</style>
