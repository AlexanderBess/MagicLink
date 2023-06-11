<template>
  <div class="content">
    <div class="content__block">
      <img class="content__logo" src="~/assets/img/app/logo.svg" alt="logo">
      <span class="content__text content__text_big">
        <span class="content__text content__text_big content__text_link">The Link</span> это простой и удобный способ создать страницу для всех ссылок
      </span>
      <base-btn
        @click="toSignUp"
        mode="active">Зарегистрироваться</base-btn>
      <base-btn
        @click="toSignIn"
        mode="active">Войти</base-btn>
    </div>
    <div class="content__block content__block_descriptions">
      <div
        v-for="(descriptionData, key) in descriptions"
        :key="key"
        class="content__descriptions">
        <img :src="descriptionData.src" :alt="descriptionData.name"/>
        <span class="content__text content__text_description content__text_small">{{ descriptionData.description }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Path } from "~/utils/enums";

export default {
  name: 'Main',
  data() {
    return {
      descriptions: [
        {
          src: require('~/assets/img/ui/profileActive.svg'),
          name: 'profile',
          description: 'Доступ к вашей личной визитке'
        },
        {
          src: require('~/assets/img/ui/linkActive.svg'),
          name: 'link',
          description: 'Создайте столько ссылок, сколько захотите'
        },
        {
          src: require('~/assets/img/ui/groupActive.svg'),
          name: 'group',
          description: 'Организуйте свои ссылки по группам для удобства'
        },
        {
          src: require('~/assets/img/ui/designActive.svg'),
          name: 'design',
          description: 'Создайте страницу, которая отражает ваш стиль'
        },
        {
          src: require('~/assets/img/ui/previewActive.svg'),
          name: 'share',
          description: 'Легко делитесь своим профилем со своими сетями'
        }
      ]
    }
  },
  methods: {
    toSignIn() {
      this.$router.push(Path.SIGN_IN);
    },
    toSignUp() {
      this.$router.push(Path.SIGN_UP);
    },
  }
};
</script>
<style lang="scss" scoped>
.content {
  @include content__block_flex-center;
  gap: 16px;
  padding: 16px;
  &__block {
    @include content__block;
    @include content__block_flex-center;
    gap: 16px;
    &_descriptions {
      align-items: flex-start;
    }
  }
  &__logo {
    width: 56px;
  }
  &__text {
    text-align: center;
    color: $title;
    &_big {
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
    }
    &_small {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    &_link {
      color: $link;
    }
    &_description {
      text-align: start;
    }
  }
  &__button {
    width: 100%;
  }
  &__descriptions {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }
}
</style>
