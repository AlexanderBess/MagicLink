<template>
  <div class="profile">
    <avatar
      :path="''"
      user-name="Марина"
      link="link-test.com"/>
    <div class="profile__blocks">
      <InfoBlock
        v-for="(blockData, key) in profileBlocks"
        :key="key"
        :title="blockData.title"
        :data="blockData.data"
        :btn-data="blockData.dataBtn"/>
    </div>
  </div>
</template>

<script>
import { Path } from "~/utils/enums";

export default {
  name: "profile",
  data() {
    return {
      profileBlocks: [
        {
          title: this.$t('profile.profileName'),
          data: {
            value: 'Marina'
          },
          dataBtn: {
            path: Path.PROFILE_NAME,
            caption: this.$t('buttons.edit')
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
            path: Path.PROFILE_DESC,
            caption: this.$t('buttons.edit')
          },
        },
        {
          title: this.$t('profile.nickName'),
          data: {
            value: '@marina',
            valueType: 'link'
          },
          dataBtn: {
            path: Path.PROFILE_NICKNAME,
            caption: this.$t('buttons.edit')
          },
        },
        {
          title: this.$t('profile.activation'),
          data: {
            value: true ? this.$t('profile.active') : this.$t('profile.disable')
          },
          dataBtn: {
            path: Path.PROFILE_ACTIVATION,
            caption: this.$t('buttons.edit')
          },
        },
        {
          title: this.$t('profile.settings'),
          data: {
            value: this.$t('profile.settingsDescription')
          },
          dataBtn: {
            path: Path.PROFILE_SETTINGS,
            caption: this.$t('buttons.edit')
          },
        },
        {
          title: this.$t('profile.delete'),
          data: {
            value: this.$t('profile.deleteDescription'),
            valueType: 'delete'
          },
          dataBtn: {
            path: 'profile/delete',
            caption: this.$t('buttons.delete'),
            isRemoveBtn: true
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  margin-top: 16px;
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
