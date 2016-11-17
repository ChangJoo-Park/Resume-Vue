<template lang="jade">
section.section(v-show="projects")
  h2.section-header Projects
  .list-item(v-for="project in projects")
    h3.list-header {{project.title}}
    p.list-meta {{project.meta}}
    p.list-description {{project.description}}
    .row
      .four.columns(v-for="image in project.images")
        a.item(v-bind:href="image.original")
          img.u-full-width(v-bind:src="image.thumbnail")
</template>

<script>
export default {
  props: ['projects']
}
</script>

<style lang="scss" scoped>
</style>
