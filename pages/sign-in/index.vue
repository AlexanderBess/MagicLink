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
      <base-btn nuxt-link="/">{{ $tc('signUpOrIn.forgetPass') }}</base-btn>
      <base-btn :nuxt-link="toSignUp">{{ $tc('signUpOrIn.signUp') }}</base-btn>
    </div>
  </div>
</template>

<script>
import { Path } from "~/utils/enums";
import {mapGetters} from "vuex";

export default {
  name: "signIn",
  data() {
    return {
      toSignUp: Path.SIGN_UP,
      password: '',
      email: ''
    };
  },
  computed: {
    ...mapGetters({
      myData: 'user/myData'
    })
  },
  methods: {
    async toProfile() {
      const response = await this.$store.dispatch('user/login', {
        params: {
          email: this.email.trim(),
          password: this.password
        }
      });
      if (response) {
        await this.$router.push(Path.PROFILE);
      } else {
        console.log('bad login data')
      }

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
