<template>
  <div id="vuepress-theme-blog__tags-layout"  class='main_list'>
    <BlogTags :tags="$frontmatterKey.list" />
  </div>
</template>
<style lang="stylus">
.main_list
   padding 60px 15px 60px 15px
   min-height calc(100vh - 200px)
   max-width $contentWidth
   margin 0 auto
</style>