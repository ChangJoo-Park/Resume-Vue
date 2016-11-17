<template lang="jade">
section.section
  h2.section-header Skills
  ul.inline-list
    li.skill-item(v-for="skill in skills") {{skill.name}}

</template>

<script>
export default {
  props: ['skills']
}
</script>

<style lang="scss" scoped>
$background-color: #f1f5f7;

.skill-item {
  background-color: $background-color;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
}
</style>
