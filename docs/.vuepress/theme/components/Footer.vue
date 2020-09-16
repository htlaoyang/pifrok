<template>
  <footer class="footer">
    <!--
    <div class="footer-left-wrap">
      <ul v-if="contact" class="contact">
        <li
          v-for="item in contact"
          :key="item.iconComponent"
          class="contact-item"
        >
          <NavLink :link="item.link">
            <component :is="item.iconComponent"></component>
            {{ item.text }}
          </NavLink>
        </li>
      </ul>
	
    </div>
	-->
    <!--
	-->
    <div class="footer-right-wrap">
		<ul v-if="copyright" class="copyright">
			<li class="copyright-item">
			   <NavLink link="">© 2019-{{year}} Pifrok. All Rights Reserved</NavLink>
			</li>
			<li
			  v-for="item in contact"
			  :key="item.iconComponent"
			  class="contact-item"
			>
			  <NavLink :link="item.link">
				<component :is="item.iconComponent"></component>
				{{ item.text }}
			  </NavLink>
			</li>
		</ul>
    </div>
  </footer>
</template>

<script>
import {
  CodepenIcon,
  CodesandboxIcon,
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  MusicIcon,
  PhoneIcon,
  TwitterIcon,
  VideoIcon,
  YoutubeIcon,
} from 'vue-feather-icons'

export default {
  components: {
    CodepenIcon,
    CodesandboxIcon,
    FacebookIcon,
    GithubIcon,
    GitlabIcon,
    GlobeIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    MessageSquareIcon,
    MusicIcon,
    PhoneIcon,
    TwitterIcon,
    VideoIcon,
    YoutubeIcon,
  },
  data: () => ({
    year: new Date().getFullYear(),
  }),
  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
          }
        })
        .filter(({ iconComponent }) => iconComponent)
    },

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      )
    },
  },

  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case 'codepen':
          return 'CodepenIcon'
        case 'codesandbox':
          return 'CodesandboxIcon'
        case 'facebook':
          return 'FacebookIcon'
        case 'github':
          return 'GithubIcon'
        case 'gitlab':
          return 'GitlabIcon'
        case 'instagram':
          return 'InstagramIcon'
        case 'linkedin':
          return 'LinkedinIcon'
        case 'mail':
          return 'MailIcon'
        case 'messenger':
          return 'MessageSquareIcon'
        case 'music':
          return 'MusicIcon'
        case 'phone':
          return 'PhoneIcon'
        case 'twitter':
          return 'TwitterIcon'
        case 'video':
          return 'VideoIcon'
        case 'web':
          return 'GlobeIcon'
        case 'youtube':
          return 'YoutubeIcon'
        default:
          return ''
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
ol, ul
  list-style none
  margin 0
  padding 0

.footer
  min-height 40px
  box-sizing border-box
  background-color white
  border-top:1px solid #d0d0d0;
  //display flex
  position:relative; 
  height:40px;
  padding 15px 32px

  .footer-right-wrap
    flex 1
    display flex
    justify-content center
    align-items center

    @media (min-width: $MQNarrow)
      justify-content center

    .copyright
      flex 0 0 auto
      display flex

      .contact-item
        margin-right 10px
        line-height 12px
	
        a
          font-size 12px
          color $footerColor
          text-decoration none
          transition color 0.3s

          &:hover
            color $accentColor
      .copyright-item
        padding 6px 10px
        line-height 12px

        a
          font-size 12px
          color $footerColor
          text-decoration none
          transition color 0.3s

          &:hover
            color $accentColor

@media (max-width: $MQMobile)
  .footer
    min-height 100px
    flex-direction column

    .footer-left-wrap
      align-items center
      justify-content center

    .footer-right-wrap
      .copyright
        display block

        .copyright-item
          line-height 1
          border-right none
          text-align center
</style>
