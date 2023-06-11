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
    <base-field
      v-if="label"
      v-model="inputData"
      class="edit-block__firstInput"
      :label="label"
      :max-value="maxValue ? maxValue : null"
      :isHideError="true"/>
    <base-btn
      class="edit-block__button"
      :mode="inputData.length > maxValue ? 'disabled' : 'active'"
      :text="$tc('buttons.save')"
      @click="$emit('click', inputData)"/>
  </div>
</template>

<script>
export default {
  name: "editBlock",
  data() {
    return {
      inputData: ''
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
    maxValue: {
      type: Number,
      default: ''
    },
    action: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
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
  min-width: 300px;

  @include content__block;
  &__head {
    display: flex;
    justify-content: flex-start;
    gap: 16px;

    padding-bottom: 16px;
    border-bottom: 1px solid $grey2;
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
</style>
