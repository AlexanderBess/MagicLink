<template>
  <div>
    <template v-if="step===0">
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
          @click="toConfirmCode"
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
    <template v-else>
      <div class="content content_sign-in">
        <p class="content__title">{{$t('titles.registration')}}</p>
        <base-field
            v-model="code"
            ref="code"
            :name="$tc('signUpOrIn.code')"
            rules="required_if|alpha_spaces_dash|max:8"
            :label="$tc('signUpOrIn.enterCode')"
            mode="icon"
            placeholder="-"
            data-selector="inputData.dataSelector"/>
        <base-btn
            @click="toSignInFunc"
            mode="active"
        >
          {{$t('buttons.enter')}}
        </base-btn>
      </div>
    </template>
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
          rules: 'required_if|max:15',
          dataSelector: 'FIRST_NAME'
        },
        {
          type: 'alias',
          rules: 'required',
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
          rules: 'required_if|min:8',
          dataSelector: 'CONFIRM_PASSWORD'
        }
      ],
      model: {
        userName: '',
        alias: '',
        email: '',
        password: '',
        passwordConfirm: '',
      },
      code: '',
      step: 0,
    };
  },
  methods: {
    async toConfirmCode() {
      const payload = {
        email: this.model.email,
        password: this.model.password,
        name: this.model.userName,
        alias: this.model.alias
      }
      const result = await this.$store.dispatch('sign-up/registration', payload);
      console.log(result);
      if (result !== false) {
        this.step = 1;
      }
    },
    async toSignInFunc() {
      const result = await this.$store.dispatch('sign-up/confirmRegistration', {});
      if (result) {
        await this.$router.push(this.toSignIn);
      }
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
