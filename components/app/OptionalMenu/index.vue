<template>
  <div class="menu">
    <img
        class="menu__img"
        src="~/assets/img/ui/menu.svg"
        alt="menu"
        @click="isShowMenu = !isShowMenu"/>
    <div
      v-show="isShowMenu"
      class="menu__popup">
      <div
          v-for="(element, key) in menuActions"
          :key="key"
          class="popup__block"
          :class="(key + 1) === menuActions.length ? 'popup__block_last' : ''"
          @click="element.click()">
        <img
            class="popup__img"
            :src="element.img"
            :alt="element.name"/>
        <span class="popup__text">{{ element.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionalMenu",
  data() {
    return {
      isShowMenu: false
    }
  },
  props: {
    menuActions: {
      type: Array,
      default: []
    },
    actionOnClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  &__popup {
    @include content__block;
    padding: 8px 16px 8px 8px;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 8px;
  }
  &__img {
    cursor: pointer;
  }
}
.popup {
  &__block {
    display: flex;
    gap: 4px;
    align-items: center;
    padding-bottom: 8px;
    border-bottom: 1px solid $grey2;
    cursor: pointer;
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
</style>
