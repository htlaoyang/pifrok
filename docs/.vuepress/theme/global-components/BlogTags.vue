<template>
    <div class='main_list'>
	  <div class="blog-tags">
		<BlogTag v-for="tag in tags" :key="tag.name" :tag="tag" />
	  </div>
	</div>
</template>

<script>
export default {
  props: ['tags'],
}
</script>

<style lang="stylus">
.main_list
   padding 60px 15px 60px 15px
   min-height calc(100vh - 200px)
   max-width $contentWidth
   margin 0 auto
.blog-tags
  width 66%

@media screen and (max-width: 1000px)
  .blog-tags
    width 90%
</style>
