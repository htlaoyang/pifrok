<template>
  <section id="header-wrapper">
    <header id="header">
      <div class="header-wrapper">
		<RouterLink
		  :to="$localePath"
		  class="home-link"
		>
		  <img
			v-if="$site.themeConfig.logo"
			class="logo"
			:src="$withBase($site.themeConfig.logo)"
			:alt="$siteTitle"
		  >
		  <span
			v-if="$siteTitle"
			ref="siteName"
			class="site-name"
			:class="{ 'can-hide': $site.themeConfig.logo }"
		  >{{ $siteTitle }}</span>
		</RouterLink>
        <div class="links">
		  <SearchBox />
          <div v-if="$themeConfig.nav" class="nav-links">
            <div
              v-for="item in $themeConfig.nav"
              :key="item.text"
              class="nav-item"
            >
              <NavLink :link="item.link">{{ item.text }}</NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  </section>
</template>

<script>
import AlgoliaSearchBox from '@theme/components/AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Navbar',
  components: {
    SearchBox,
    AlgoliaSearchBox
  },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">

$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

#header
  z-index 12
  //position fixed
  top 0
  width 100vw
  position:relative; 
  box-shadow 0 5px 20px rgba(0, 0, 0, 0.03), 0 6px 6px rgba(0, 0, 0, 0.05)
  transition all 1s cubic-bezier(0.25, 0.8, 0.25, 1)
  
.header-wrapper
  display flex
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color white
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top
	.nav-links
      display inline-block
      a
        display inline-block
        line-height 1.4rem
      .nav-item
        position relative
		display inline-block
		margin-left 1.5rem
		line-height 2rem
		&:first-child
		  margin-left 0  
@media (max-width: $MQMobile)
  #header
    display none

  .header-wrapper
    flex-direction column
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
