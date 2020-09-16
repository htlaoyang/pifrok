<template>
  <div id="vuepress-theme-blog__post-layout" class='main_list'>
    <article
      class="vuepress-blog-theme-content"
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <header>
        <h1 class="post-title" itemprop="name headline">
          {{ $frontmatter.title }}
        </h1>
        <PostMeta
          :tags="$frontmatter.tags"
          :author="$frontmatter.author"
          :date="$frontmatter.date"
          :location="$frontmatter.location"
        />
      </header>
      <div class="password-wrap" v-if="!contentShow">
		  <p class="password-tip">本文内容已被加密，请输入密码后访问。</p>
		<div class="input-wrap">
			<input type="password" name="password" ref="password" placeholder="请输入密码">
			<button type="button" @click="showContent">确认</button>
		</div>
      </div>
	  <Content itemprop="articleBody" v-if="contentShow" />
      <footer>
		<Recommend/>
        <hr />
        <Comment />
      </footer>
    </article>
    <Toc />
  </div>
</template>

<script>
import Toc from '@theme/components/Toc.vue'
import PostMeta from '@theme/components/PostMeta.vue'
import Recommend from '@theme/components/Recommend'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'

export default {
  data () {
    return {
      password: ''
    }
  },
  components: {
    Toc,
    PostMeta,
    Recommend,
    Comment
  },
  computed: {
    contentShow () {
      return !this.$page.frontmatter.password || this.password == this.$page.frontmatter.password
    },
    lastUpdated () {
      return this.$page.lastUpdated
    },
    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    },
  },
  methods: {
    showContent () {
      this.password = this.$refs.password.value
    },
  }
}
</script>

<style lang="stylus">
.password-wrap
  margin-top 40px
  margin-bottom: 40px
  border: 1px dashed #ddd
  padding 40px
  text-align: center;
  .password-tip
    font-weight: bold;
    margin-bottom: 15px;
    font-size: 16px;
    color: red
  .input-wrap
    height: 40px;
    line-height: 40px
    input
      height: 100%;
      outline: none;
      width: 300px
      padding-left: 10px
      border-radius: 2px
      border: 1px solid #ddd
      transition: border ease 0.2s
      &:focus
        border-color: $accentColor
    button
      height: 40px;
      width: 80px
      cursor: pointer;
      border: none
      outline: none
      color: #fff
      border-radius: 2px
      background-color: $accentColor
      transition: background ease 0.2s
      &:hover
        background-color: darken($accentColor, 10%)
$wrapper
  max-width $contentWidth
  margin 0 auto
  background-color $bgColor
  @media (min-width: $MQNarrow)
    padding 2rem
  @media (max-width: $MQMobileNarrow)
    padding 1.5rem
.vuepress-blog-theme-content
  @extend $wrapper
  font-size 16px
  letter-spacing 0px
  font-family PT Serif, Serif
  color $textColor
  position relative

  @media (min-width: $MQNarrow)
    box-shadow 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.07)

  .post-title
    padding-top 0

@media (max-width: $MQMobile)
  .vuepress-blog-theme-content
    padding-top 0

  .post-title
    margin-top 0
</style>
