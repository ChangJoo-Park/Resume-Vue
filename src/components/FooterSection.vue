<template lang="jade">
  footer
    hr
    .row
      .twelve.columns
        ul.inline-list
          li.social-link(v-show="data.blog")
            a(v-bind:href="data.blog", target="_blank") Blog
          li.social-link(v-show="data.github")
            a(v-bind:href="githubLink", target="_blank") Github
          li.social-link(v-show="data.twitter")
            a(v-bind:href="twitterLink", target="_blank") Twitter
          li.social-link(v-show="data.facebook")
            a(v-bind:href="facebookLink", target="_blank") Facebook
          li.social-link(v-show="data.google")
            a(v-bind:href="googlePlusLink", target="_blank") Google
</template>

<script>
export default {
  props: ['data'],
  computed: {
    githubLink () {
      return `https://github.com/${this.data.github}`
    },
    twitterLink () {
      return `https://twitter.com/${this.data.twitter}`
    },
    facebookLink () {
      return `https://facebook.com/${this.data.facebook}`
    },
    googlePlusLink () {
      return `https://plus.google.com/${this.data.google}`
    }
  }
}
</script>

<style lang="scss" scoped>
$link-color: #323336;
.social-link a {
  color: $link-color;
  text-decoration: none;
}
</style>
