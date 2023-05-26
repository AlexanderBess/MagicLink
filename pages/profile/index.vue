<template>
  <div class="profile">
    <div class="profile__avatar">
      <img src="~assets/img/app/avatar.png" alt="avatar">
      <div class="profile__title">Name</div>
      <div class="profile__link">Link</div>
    </div>
    <div class="profile__blocks">
      <InfoBlock
        v-for="(blockData) in profileBlocks"
        :title="blockData.title"
        :data="blockData.data"
        :btn-data="blockData.dataBtn"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      profileBlocks: [
        {
          title: this.$t('profile.name'),
          data: {
            value: 'Marina'
          },
          dataBtn: {
            path: '/profile/name-edit'
          },
        },
        {
          title: this.$t('profile.shortDescription'),
          data: {
            description: this.$t('profile.description'),
            value: this.$t('profile.emptyDescription'),
            valueType: 'empty',
            secondDescription: this.$t('profile.showShortDesc'),
            secondValue: true ? this.$t('general.yes') : this.$t('general.no')
          },
          dataBtn: {
            path: '/profile/description-edit'
          },
        },
        {
          title: this.$t('profile.nickName'),
          data: {
            value: '@marina',
            valueType: 'link'
          },
          dataBtn: {
            path: '/profile/nickName-edit'
          },
        },
        {
          title: this.$t('profile.activation'),
          data: {
            value: true ? this.$t('profile.active') : this.$t('profile.disable')
          },
          dataBtn: {
            path: '/profile/activation-edit'
          },
        },
        {
          title: this.$t('profile.settings'),
          data: {
            value: this.$t('profile.settingsDescription')
          },
          dataBtn: {
            path: '/profile/settings-edit'
          },
        },
        {
          title: this.$t('profile.delete'),
          data: {
            value: this.$t('profile.deleteDescription'),
            valueType: 'delete'
          },
          dataBtn: {
            path: '/profile/delete',
            isRemoveBtn: true
          },
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  padding-bottom: 40px;
  &__avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title {
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;

    color: $title;
  }
  &__link {
    margin-top: 2px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: $link;
  }
  &__blocks {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
