<template>
  <EditBlock
      :is-have-slot="true"
      :is-show-btn="false"
      title="Добавить ссылку">
    <div class="link__types">
      <div
        v-for="(link, key) in links"
        :key="key"
        class="link__type"
        @click="selectLinkType(key)">
        <div
          :class="key === chosenLink ? 'link__img-block_active' : ''"
          class="link__img-block">
          <img
            class="link__img"
            :src="link.img"
            :alt="link.name"/>
        </div>
        <span class="link__name">{{ link.name }}</span>
      </div>
    </div>
    <base-field
      v-model="firstInput"
      :label="firstLabel"
      :is-hide-error="true"/>
    <base-field
      v-model="secondInput"
      label="Имя ссылки"
      :max-value="50"
      :is-hide-error="true"/>
    <div class="link__checkbox-block">
      <span class="link__text">Активировать ссылку</span>
      <input
        id="custom-checkbox"
        class="link__checkbox"
        type="checkbox"/>
      <label class="link__label" for="custom-checkbox"></label>
    </div>
    <base-btn
      :mode="'active'"
      :text="$tc('buttons.save')"
      @click="$emit('click', {firstInput, secondInput})"/>
  </EditBlock>
</template>

<script>
export default {
  name: "connect",
  data() {
    return {
      firstInput: '',
      firstLabel: 'Ссылка сайта',
      secondInput: '',
      secondLabel: '',
      chosenLink: 0,
      links: [
        {
          name: 'Ссылка',
          img: require('assets/img/ui/link.svg'),
          active: true
        },
        {
          name: 'Почта',
          img: require('assets/img/ui/mail.svg'),
          active: false
        },
        {
          name: 'Телефон',
          img: require('assets/img/ui/phone.svg'),
          active: false
        },
        {
          name: 'SMS',
          img: require('assets/img/ui/sms.svg'),
          active: false
        }
      ]
    }
  },
  methods: {
    selectLinkType(key) {
      this.chosenLink = key;
      let label = '';
      switch(key) {
        case 0: {
          label = 'Ссылка сайта';
          break;
        }
        case 1: {
          label = 'Email';
          break;
        }
        case 2: {
          label = 'Номер телефона';
          break;
        }
        case 3: {
          label = 'Номер телефона';
          break;
        }
      }
      this.firstLabel = label;
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  &__types {
    display: flex;
    align-items: center;
    gap: 32px;
    border: 1px solid $grey2;
    border-radius: 8px;
    padding: 8px 16px;
  }
  &__type {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    gap: 4px;
  }
  &__img-block {
    padding: 5px;
    border: 1.5px solid $white;
    &_active {
      border: 1.5px solid $link;
      border-radius: 4px;
    }
  }
  &__img {
    max-width: 24px;
  }
  &__name {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
  }
  &__checkbox-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  &__checkbox+label::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &__checkbox:checked+label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("~/assets/img/ui/check.svg");
  }
  &__checkbox:disabled+label::before {
    background-color: #e9ecef;
  }
  &__label {
    margin-top: 5px;
    margin-bottom: 0;
  }
  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: $grey3;
  }
}
</style>
