<template>
  <div class="info-block">
    <div class="info-block__head">
      <div class="info-block__title">{{ title }}</div>
      <OptionalMenu
        v-if="isHaveMenu"
        :menu-actions="menuActions"/>
    </div>
    <div v-if="isHaveSlot || data" class="info-block__data data">
      <div v-if="isHaveSlot" class="data__special">
        <slot/>
      </div>
      <div v-else-if="data && !isHaveSlot" class="data__first-value">
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
    <base-btn
        v-if="btnData"
        :mode="btnData?.isRemoveBtn ? 'delete' : 'active'"
        @click="btnAction">
      {{ btnData?.caption || '' }}
    </base-btn>
  </div>
</template>

<script>
export default {
  name: "infoBlock",
  data() {
    return {
      menuActions: [
        {
          img: require('~/assets/img/ui/edit.svg'),
          name: 'Редактировать',
          click: (event) => {
            console.log('redact: '+ event);
          }
        },
        {
          img: require('~/assets/img/ui/delete.svg'),
          name: 'Удалить',
          click: (event) => {
            console.log('delete: '+ event);
          }
        },
      ]
    }
  },
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
    },
    isHaveSlot: {
      type: Boolean,
      default: false
    },
    isHaveMenu: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    btnAction() {
      const { btnData, $router } = this;
      if (btnData.path) { $router.push(btnData.path) }
      else { btnData.action(); }
    }
  }
}
</script>

<style lang="scss" scoped>
.info-block {
  @include content__block;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__title {
    color: $title;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
  }
  &__data {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid $grey2;
  }
}
.menu {
  position: relative;
  &__popup {
    @include content__block;
    padding: 8px 16px 8px 8px;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
.popup {
  &__block {
    display: flex;
    gap: 4px;
    align-items: center;
    padding-bottom: 8px;
    border-bottom: 1px solid $grey2;
    &_last {
      padding-bottom: 0;
      border-bottom: none;
    }
  }
  &__text {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: $title;
  }
}
.data {
  &__special {
    @include content__block_flex-center;
  }
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
