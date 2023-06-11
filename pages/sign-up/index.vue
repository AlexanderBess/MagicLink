<template>
  <div class="content content_sign-in">
    <p class="content__title">{{$t('titles.registration')}}</p>
    <div v-for="(inputData) in registryInputs">
      <base-field
        v-model="model[inputData.type]"
        :ref="inputData.type"
        :name="$tc(`signUpOrIn.` + inputData.type)"
        :rules="inputData.rules"
        :label="$tc(`signUpOrIn.` + inputData.type)"
        mode="icon"
        placeholder="-"
        data-selector="inputData.dataSelector"/>
    </div>
    <div class="content__info">
      {{$t('signUpOrIn.additionalInfoPartOne')}}
      <a class="content__info-link">{{$t('signUpOrIn.termsConditions')}}</a>
      {{$t('signUpOrIn.additionalInfoPartTwo')}}
      <a>{{$t('signUpOrIn.privacyPolicy')}}</a>
    </div>
    <base-btn
      @click="toSignInFunc"
      mode="active"
    >
      {{$t('buttons.enter')}}
    </base-btn>
    <div class="content__links">
      <div class="content__text">{{$t('signUpOrIn.haveAccount')}}</div>
      <nuxt-link
        class="content__link"
        to="/sign-in">
        {{$t('signUpOrIn.login')}}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { Path } from '~/utils/enums';

export default {
  name: "signUp",
  data() {
    return {
      toSignIn: Path.SIGN_IN,
      registryInputs: [
        {
          type: 'userName',
          rules: 'required_if|alpha_spaces_dash|max:15',
          dataSelector: 'FIRST_NAME'
        },
        {
          type: 'linkToProfile',
          rules: 'required|email',
          dataSelector: 'LOGIN'
        },
        {
          type: 'email',
          rules: 'required|email',
          dataSelector: 'LOGIN'
        },
        {
          type: 'password',
          rules: 'required_if|min:8',
          dataSelector: 'PASSWORD'
        },
        {
          type: 'passwordConfirm',
          rules: 'required_if|min:8|confirmed:confirmation',
          dataSelector: 'CONFIRM_PASSWORD'
        }
      ],
      model: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
      }
    };
  },
  methods: {
    toSignInFunc() {
      this.$router.push(this.toSignIn);
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  @include content__block;
  margin: 16px 0 16px 0;
  &__title {
    color: $title;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;

    padding-bottom: 16px;
    border-bottom: 1px solid $grey2;
  }
  &__info {
    margin: 32px 0 16px 0;

    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #7E868B;
  }
  &__info-link {
    color: #0080D3;
    text-decoration-line: underline;
  }
  &__links {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }
  &__text {
    color: $title;
  }
  &__link {
    margin-left: 5px;

    color: #0080D3;
    text-decoration-line: underline;
  }
}
</style>
