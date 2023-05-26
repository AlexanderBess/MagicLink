<template>
  <div class="info-block">
    <div class="info-block__title">{{ title }}</div>
    <div class="info-block__data data">
      <div class="data__first-value">
        <div
          v-if="data?.description"
          class="data__description">
            {{ data.description }}
        </div>
        <div
          class="data__value"
          :class="data?.valueType ? `data__value_${data?.valueType}` : ''">
          {{data.value}}
        </div>
      </div>
      <div
        v-if="data?.secondValue"
        class="data__second-value">
        <div class="data__description">{{ data?.secondDescription }}</div>
        <div
          class="data__value"
          :class="data?.secondValueType ? `data__value_${data?.secondValueType}` : ''">
          {{data.secondValue}}
        </div>
      </div>
    </div>
    <nuxt-link
        class="info-block__button"
        :class="btnData?.isRemoveBtn ? 'info-block__button_remove' : ''"
        :to="btnData.path">
      {{ btnData?.isRemoveBtn ? $t('buttons.delete') : $t('buttons.edit') }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "infoBlock",
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default: null
    },
    btnData: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.info-block {
  min-width: 300px;
  @include content__block;
  &__title {
    color: $title;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;

    padding-bottom: 16px;
    border-bottom: 1px solid #D3D9E4;
  }
  &__data {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    padding: 15px 45px;

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    color: #FFFFFF;
    background: $link;
    border-radius: 8px;
    &_remove {
      background: $delete;
    }
  }
}
.data {
  &__value {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: $title;
    &_empty {
      color: #CCCCCC;
    }
    &_link {
      color: $link;
    }
    &_delete {
      color: $delete;
    }
  }
}
</style>
