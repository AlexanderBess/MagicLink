<template>
  <div class="primary">
    <div class="primary__template template">
      <div class="template__header header">
        <div class="header__container">
          <img
            class="header__logo"
            src="~assets/img/app/logo.svg"
            alt="The Link">
          <nuxt-link
            class="header__title"
            to="/">
            The Link
          </nuxt-link>
        </div>
      </div>
      <div class="template__content">
        <HeaderMenu v-if="showNavigation()" class="template__menu"/>
        <nuxt />
      </div>
      <div class="template__footer footer">
        <div class="footer__title footer__title_logo">
          The Link
        </div>
        <div class="footer__title">
          Документация
        </div>
        <div class="footer__text-block">
          <a>Официальные уведомления</a>
          <a>Условия использования</a>
          <a>Политика конфиденциальности</a>
          <a>Политика в отношении файлов Cookie</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      choosenBlock: 'Home',
    };
  },
  methods: {
    showNavigation() {
      return !(this.$route.name === 'index' || this.$route.name === 'sign-in' || this.$route.name === 'sign-up');
    }
  },
};
</script>
<style lang="scss" scoped>
.primary {
  height: 100vh;
  overflow-y: auto;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  &__template {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
}

.template {
  height: 100%;
  min-height: 100vh;
  overflow: auto;
  &__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 4px;

    background: $white;
    box-shadow: 0 2px 8px rgba(2, 8, 12, 0.1);

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  &__content {
    display: flex;
    align-items: center;
    flex-direction: column;

    @include content;
  }
  &__menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 4px;
    gap: 24px;

    height: 56px;
    width: 100%;

    background: #FFFFFF;
  }
  &__footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;

    background: #252525;
  }
}

.header {
  &__logo {
    cursor: pointer;
  }
  &__container {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-decoration: none;

    color: #0080D3;
  }
}
.footer {
  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #F6F6F6;
    &_logo {
      color: #0080D3;
    }
  }
  &__text-block {
    display: flex;
    flex-direction: column;

    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #F6F6F6;
  }
}
</style>
