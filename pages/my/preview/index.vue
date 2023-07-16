<template>
  <div class="content__preview preview"
    :style="`background: ${viewColors.colors.background}`">
    <div class="preview__block">
      <avatar
        :user-name="myData.name"
        :special-style="viewColors.colors.name"
        path="test"/>
      <span
        v-if="myData.description.display"
        :style="`color: ${viewColors.colors.shortDescription}`"
        class="preview__description">{{myData.description.value}}</span>
      <template v-if="linksBlock.length > 0">
        <div
          v-for="(linkData, key) in linksBlock"
          :key="key"
          class="preview__links-block links-block">
          <span :style="`color: ${viewColors.colors.groupsOfLinks}`" class="links-block__title">{{ linkData.title }}</span>
          <div
            v-for="(link, id) in linkData.data"
            :style="`background: ${viewColors.colors.links.backgroundColor}`"
            :key="`${key}_${id}`"
            class="links-block__link">
            <img
                class="links-block__img"
                alt=""
                :style="`color: ${viewColors.colors.links.iconColor}`"
                :src="link.img">
            <span
                :style="`color: ${viewColors.colors.links.textColor}`"
                class="links-block__caption">{{ link.caption }}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "preview",
  middleware: 'auth',
  data() {
    return {
      linksBlock: [
        {
          title: 'Связаться со мной',
          data: [
            {
              img: require('assets/img/ui/mailActive.svg'),
              caption: this.$t('connectTypes.email')
            },
            {
              img: require('assets/img/ui/phoneActive.svg'),
              caption: this.$t('connectTypes.phone')
            }
          ]
        },
        {
          title: 'Дополнительная связь',
          data: [
            {
              img: require('assets/img/ui/smsActive.svg'),
              caption: this.$t('connectTypes.sms')
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      viewColors: "user/getMyViewData",
      myData: "user/myData"
    })
  },
  async beforeMount() {
    await this.$store.dispatch('user/getMyData');
  }
}
</script>

<style lang="scss" scoped>
.preview {
  width: 100%;
  display: flex;
  justify-content: center;
  &__block {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
    width: 100%;
    max-width: 328px;
  }
  &__links-block {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }
}
.links-block {
  &__title {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: $title;
    padding-bottom: 8px;

    border-bottom: 1px solid $grey2;
  }
  &__link {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    cursor: pointer;

    background: $white;
    border-radius: 8px;
  }
  &__caption {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: $title;
  }
}
</style>
