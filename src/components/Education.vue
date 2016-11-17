<template lang="jade">
  section.section(v-show="educations")
    h2.section-header EDUCATION
    .list-item(v-for="education in educations")
      h3.list-header {{education.educatedAt}}
      p.list-meta {{education.title}} | {{education.duration}}
      p.list-description {{education.description}}
      ul.list-highlight
        li(v-for="highlight in education.highlights") {{highlight}}
</template>

<script>
export default {
  props: ['educations']
}
</script>

<style lang="scss" scope>
</style>
