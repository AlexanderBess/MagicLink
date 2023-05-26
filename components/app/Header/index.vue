<template>
  <div class="menu">
    <nuxt-link
        v-for="(link) in menuLinks"
        class="menu__link-block"
        :to="link.path">
      <img :src="link.icon" :alt="link.name">
      <div
          class="menu__link-text"
          :class="linkColor(link.path)">
        {{ link.name }}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "headerMenu",
  data() {
    return {
      menuLinks: {
        profile: {
          name: this.$t('menu.profile'),
          icon: require('~/assets/img/ui/profile.svg'),
          path: '/profile'
        },
        link: {
          name: this.$t('menu.link'),
          icon: require('~/assets/img/ui/link.svg'),
          path: '/link'
        },
        design: {
          name: this.$t('menu.design'),
          icon: require('~/assets/img/ui/design.svg'),
          path: '/design'
        },
        share: {
          name: this.$t('menu.share'),
          icon: require('~/assets/img/ui/share.svg'),
          path: '/share'
        },
        preview: {
          name: this.$t('menu.preview'),
          icon: require('~/assets/img/ui/preview.svg'),
          path: '/preview'
        }
      }
    };
  },
  methods: {
    linkColor(path) {
      if(path === this.$route.path) {
        return 'menu__link-text_active';
      }
      return '';
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  &__link-block {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-decoration: none;
  }
  &__link-text {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;

    color: $title;
    &_active {
      color: $link;
    }
  }
}
</style>
