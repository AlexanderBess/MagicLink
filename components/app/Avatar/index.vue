<template>
  <div class="user">
    <div v-if="path" class="user__avatar">
      <img src="~/assets/img/app/testAvatar.png" alt="avatar"/>
    </div>
    <div v-else class="user__avatar user__avatar_empty">
      <img src="~/assets/img/app/emptyAvatar.svg" alt="empty avatar"/>
    </div>
    <div class="user__text-info">
      <span v-if="userName" class="user__name">{{ userName }}</span>
      <span v-if="link" class="user__link">{{ link }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    path: {
      type: String,
      default: ''
    },
    userName: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  @include content__block_flex-center;
  gap: 8px;
  &__avatar {
    min-width: 112px;
    min-height: 112px;
    border: 7px solid $white;
    border-radius: 50%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    &_empty {
      position: relative;
      background: $grey;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
      }
    }
  }
  &__text-info {
    @include content__block_flex-center;
    gap: 2px;
  }
  &__name {
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: $title;
  }
  &__link {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: $link;
  }
}
</style>
