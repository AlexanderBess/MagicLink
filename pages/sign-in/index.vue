<template>
  <div class="content">
    <p class="content__title">{{$tc('titles.login')}}</p>
    <base-field
      v-model="email"
      ref="email"
      mode="icon"
      :name="$tc('signUpOrIn.email')"
      :placeholder="$t('signUpOrIn.email')"
      rules="required|email"
      data-selector="FIRST_NAME"
      label="signUpOrIn.email"/>
    <base-field
        v-model="password"
        ref="password"
        mode="icon"
        :name="$tc('signUpOrIn.password')"
        :placeholder="$t('signUpOrIn.password')"
        rules="required_if|min:8"
        data-selector="FIRST_NAME"
        label="signUpOrIn.password"/>
    <base-btn
        mode="active"
        @click="toProfile">
      Войти
    </base-btn>
    <div class="content__links">
      <base-btn nuxt-link="/">Забыли пароль ?</base-btn>
      <base-btn :nuxt-link="toSignUp">Зарегистрироваться</base-btn>
    </div>
  </div>
</template>

<script>
import { Path } from "~/utils/enums";

export default {
  name: "signIn",
  data() {
    return {
      toSignUp: Path.SIGN_UP,
      password: '',
      email: ''
    };
  },
  methods: {
    toProfile() {
      this.$router.push(`/users/1/${Path.PROFILE}`);
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    @include content__block;
    margin-top: 16px;
    &__title {
      color: $title;
      font-weight: 600;
      font-size: 20px;
      line-height: 23px;

      padding-bottom: 16px;
      border-bottom: 1px solid $grey2;
    }
    &__links {
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;

      color: #0080D3;
      text-decoration-line: underline;
    }
  }
</style>
