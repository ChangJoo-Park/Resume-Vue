<template lang="jade">
  section.section
    h2.section-header Work EXPERIENCES
    .list-item(v-for="experience in experiences")
      h3.list-header {{experience.workAt}}
      p.list-meta {{experience.position}} | {{experience.duration}}
      p.list-description {{experience.description}}
      ul.list-highlight
        li(v-for="highlight in experience.highlights") {{highlight}}
</template>

<script>
export default {
  props: ['experiences']
}
</script>

<style lang="scss" scoped>
</style>
