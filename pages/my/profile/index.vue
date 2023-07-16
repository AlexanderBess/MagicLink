<template>
  <div class="profile">
    <avatar
      :path="''"
      :user-name="userData.name"
      :link="`${userData.alias}/profile`"/>
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
import {mapGetters} from "vuex";

export default {
  name: "profile",
  middleware: 'auth',
  data() {
    return {
      profileBlocks: [
        {
          title: this.$t('profile.profileName'),
          data: {
            value: this.$t('general.loading')
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
            value: this.$t('general.loading'),
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
            value: this.$t('general.loading'),
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
            value: this.$t('general.loading')
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
      ],
      userData: {}
    }
  },
  computed: {
    ...mapGetters({
      myData: "user/myData"
    })
  },
  created() {
    if (!this.$cookies.get('access')) {
      this.$router.push(Path.ROOT);
    }
  },
  async mounted() {
    if (!this.myData.name) {
      await this.$store.dispatch('user/getMyData');
    }
    this.userData = JSON.parse(JSON.stringify(this.myData));
    this.profileBlocks[0].data.value = this.userData.name;
    this.profileBlocks[1].data.value = this.userData.description.value || this.$t('profile.emptyDescription');
    this.profileBlocks[1].data.secondValue = this.userData.description.display ? this.$t('general.yes') : this.$t('general.no');
    this.profileBlocks[1].data.valueType = this.userData.description.value ? '' : 'empty';
    this.profileBlocks[2].data.value = this.userData.alias;
    this.profileBlocks[3].data.value = this.userData.activation ? this.$t('profile.active') : this.$t('profile.disable');
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
