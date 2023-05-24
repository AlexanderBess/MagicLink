<template>
  <div class="content content_sign-in">
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
        class="raise__submit"
        data-selector="SIGN-IN-BTN"
        @click="toProfile"
    >
      Ввод
    </base-btn>
    <div class="content__links">
      <nuxt-link to="">Забыли пароль ?</nuxt-link>
      <nuxt-link to="/sign-up">Зарегистрироваться</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "signIn",
  data() {
    return {
      password: '',
      email: ''
    };
  },
  methods: {
    toProfile() {
      this.$router.push("/profile");
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    @include content__block;
    &__title {
      color: $title;
      font-weight: 600;
      font-size: 20px;
      line-height: 23px;

      padding-bottom: 16px;
      border-bottom: 1px solid #D3D9E4;
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
