<template>
    <div class='main_list'>
		<router-link class="blog-tag" :to="tag.path">
		   {{ tag.name }} ({{ tag.pages.length }})|123
		</router-link>
	</div>
</template>

<script>
export default {
  props: ['tag'],
}
</script>

<style lang="stylus">
.main_list
   padding 60px 15px 60px 15px
   min-height calc(100vh - 200px)
   max-width $contentWidth
   margin 0 auto
.blog-tag
  display inline-flex
  align-items center
  height 45px
  word-break break-word
  font-size 20px
  margin-right 20px
  margin-bottom 20px
  padding 0 15px
  border-radius 5px
  font-weight 300
  text-align left
  box-sizing border-box
  transition background-color 0.3s
  color $darkTextColor
  border 1px solid $darkBorderColor
  text-decoration none
  transition all 0.5s

  &:hover
    color $accentColor !important
    border 1px solid $accentColor
    box-shadow 0 0 5px $accentColor

@media screen and (max-width: 768px)
  .blog-tag
    font-size 14px
    padding 3px 10px
    margin-right 10px
    margin-bottom 10px
</style>
