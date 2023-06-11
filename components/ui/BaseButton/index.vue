<template>
  <a
    v-if="link !== ''"
    class="base-btn"
    :class="btnClass"
    :href="link"
    target="_blank"
  >
    <slot />
  </a>
  <nuxt-link
    v-else-if="nuxtLink !==''"
    class="base-link"
    :to="nuxtLink"
  >
    <slot />
  </nuxt-link>
  <button
    v-else
    class="base-btn"
    :class="btnClass"
    :type="isSubmit ? 'submit' : 'button'"
    @click="$emit('click', $event)"
  >
    {{ text }}
    <span
      v-if="$slots.left"
      class="icon icon-btn_left"
    >
      <slot name="left" />
    </span>
    <slot />
    <span
      v-if="$slots.right"
      class="icon icon-btn_right"
    >
      <slot name="right" />
    </span>
  </button>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
    isSubmit: {
      type: Boolean,
      default: true,
    },
    nuxtLink: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    padding: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btnClass() {
      const { mode } = this;
      return [
        { 'base-btn_disabled': mode === 'disabled' },
        { 'base-btn_active': mode === 'active' },
        { 'base-btn_delete': mode === 'delete' }
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.icon {
  &-btn {
    &_left {
      padding-right: 5px;
    }
    &_right {
      padding-left: 5px;
    }
  }
}
.base-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 45px;
  border-radius: 8px;
  border: none;

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  text-decoration: none;
  user-select: none;
  width: 100%;
  color: $white;
  font-style: normal;
  text-align: center;
  transition: .3s;
  &_delete {
    background-color: $red;
    &:hover {
      background-color: #cc0000;
    }
  }
  &_active {
    background: $link;
    &:hover {
      background-color: #103D7C;
    }
  }
  &_disabled {
    pointer-events: none;
    color: $grey1;
    background: $grey;
  }
}
.base-link {
  text-decoration: none;
  color: $link;
}
</style>
