<template>
  <div class="content__preview preview">
    <avatar
      :user-name="'Алина'"
      path="test"/>
    <template v-if="linksBlock.length > 0">
      <div
        v-for="(linkData, key) in linksBlock"
        :key="key"
        class="preview__links-block links-block">
        <span class="links-block__title">{{ linkData.title }}</span>
        <div
          v-for="(link, id) in linkData.data"
          :key="`${key}_${id}`"
          class="links-block__link">
          <img class="links-block__img" alt="" :src="link.img">
          <span class="links-block__caption">{{ link.caption }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      linksBlock: [
        {
          title: 'Связаться со мной',
          data: [
            {
              img: require('assets/img/ui/mailActive.svg'),
              caption: 'Написать на почту'
            },
            {
              img: require('assets/img/ui/phoneActive.svg'),
              caption: 'Позвонить'
            }
          ]
        },
        {
          title: 'Дополнительная связь',
          data: [
            {
              img: require('assets/img/ui/smsActive.svg'),
              caption: 'Написать SMS'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.preview {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  width: 328px;
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
