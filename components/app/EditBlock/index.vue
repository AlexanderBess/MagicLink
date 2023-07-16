<template>
  <div class="edit-block">
    <div class="edit-block__head head">
      <img
        class="head__img"
        alt="back"
        src="~/assets/img/ui/arrow_back.svg"
        @click="goBack()">
      <div class="head__title">{{ title }}</div>
    </div>
    <slot v-if="isHaveSlot"/>
    <base-field
      v-if="maxValue"
      v-model="inputData"
      class="edit-block__firstInput"
      :label="label"
      :max-value="maxValue ? maxValue : null"
      :isHideError="isHideError"
      :errorText="errorText"/>
    <div
      v-if="checkboxLabel"
      class="edit-block__checkbox-block">
      <span class="checkbox-block__text">{{ checkboxLabel }}</span>
      <input
          id="input-checkbox"
          class="checkbox-block__checkbox"
          type="checkbox"
          :checked="checkBoxData"
          @change="changeCheckbox"/>
      <label class="checkbox-block__label" for="input-checkbox"></label>
    </div>
    <base-btn
      v-if="isShowBtn"
      class="edit-block__button"
      :mode="inputData.length > maxValue ? 'disabled' : 'active'"
      :text="$tc('buttons.save')"
      @click="buttonClick"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "editBlock",
  data() {
    return {
      inputData: '',
      checkBoxData: false
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    checkBoxValue: {
      type: Boolean,
      default: false
    },
    maxValue: {
      type: Number,
      default: null
    },
    checkboxLabel: {
      type: String,
      default: ''
    },
    action: {
      type: Function,
      default: () => {}
    },
    isHaveSlot: {
      type: Boolean,
      default: false
    },
    isShowBtn: {
      type: Boolean,
      default: true
    },
    isHideError: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters({
      errorText: "user/errorNotification"
    })
  },
  mounted() {
    if(this.value) {
      this.inputData = this.value;
    }
    if (this.checkBoxValue) {
      this.checkBoxData = this.checkBoxValue;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    buttonClick() {
      const data = {}
      if (this.label) { data.inputData = this.inputData }
      if (this.checkboxLabel) { data.checkBoxData = this.checkBoxData }
      this.$emit('click', data);
    },
    changeCheckbox() {
      this.checkBoxData = !this.checkBoxData;
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-block {
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @include content__block;
  &__head {
    display: flex;
    justify-content: flex-start;
    gap: 16px;

    padding-bottom: 16px;
    border-bottom: 1px solid $grey2;
  }
  &__checkbox-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.head {
  &__img {
    cursor: pointer;
  }
  &__title {
    color: $title;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
  }
}
.checkbox-block {
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
    margin-bottom: 0;
    height: 20px;
  }
  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: $grey3;
  }
}
</style>
