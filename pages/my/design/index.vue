<template>
  <div v-if="viewData.colors" class="customize__blocks">
    <div
      v-for="(elementData, key) in designData"
      :key="key"
      class="customize__content">
      <div class="customize__head">
        <span class="customize__title">{{elementData.title}}</span>
      </div>
      <div
        v-for="(data, id) in elementData.data"
        :key="id"
        class="customize__body body">
        <span
          v-if="data.colorLabel"
          class="body__desc">
          {{data.colorLabel}}
        </span>
        <div class="body__content">
          <div class="body__color-data">
            <color-picker
              class="color-data__color"
              v-model="colors[data.id]"/>
            <span
              :class="colors[data.id] ? 'color-data__value_active' : ''"
              class="color-data__value">{{ colors[data.id] || data.colorName }}</span>
          </div>
          <div class="body__buttons">
            <img
              class="body__button"
              src="~/assets/img/ui/edit.svg"
              alt="edit"/>
            <img
              class="body__button"
              src="~/assets/img/ui/delete.svg"
              alt="delete"/>
          </div>
        </div>
      </div>
    </div>
    <base-btn
        :mode="'active'"
        :text="$tc('buttons.save')"
        @click="buttonClick"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Design",
  middleware: 'auth',
  data() {
    return {
      colors: [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
      ],
      designData: [
        {
          id: 0,
          title: this?.$t('design.backgroundColor.title'),
          data: [
            {
              id: 0,
              color: '',
              colorLabel: '',
              colorName: this?.$t('general.onDefault')
            }
          ]
        },
        {
          id: 1,
          title: this?.$t('design.textColor.title'),
          data: [
            {
              id: 1,
              color: '',
              colorLabel: this?.$t('design.textColor.label'),
              colorName: this?.$t('general.onDefault')
            }
          ]
        },
        {
          id: 2,
          title: this?.$t('design.shortDescColor.title'),
          data: [
            {
              id: 2,
              color: '',
              colorLabel: '',
              colorName: this?.$t('general.onDefault')
            }
          ]
        },
        {
          id: 3,
          title: this?.$t('design.linksGroup.title'),
          data: [
            {
              id: 3,
              color: '',
              colorLabel: this?.$t('design.linksGroup.label'),
              colorName: this?.$t('general.onDefault')
            },
            // {
            //   id: 4,
            //   color: '',
            //   colorLabel: this?.$t('design.linksGroup.label1'),
            //   colorName: this?.$t('general.onDefault')
            // }
          ]
        },
        {
          id: 4,
          title: this?.$t('design.links.title'),
          data: [
            {
              id: 5,
              color: '',
              colorLabel: this?.$t('design.links.label'),
              colorName: this?.$t('general.onDefault')
            },
            {
              id: 6,
              color: '',
              colorLabel: this?.$t('design.links.label1'),
              colorName: this?.$t('general.onDefault')
            },
            {
              id: 7,
              color: '',
              colorLabel: this?.$t('design.links.label2'),
              colorName: this?.$t('general.onDefault')
            }
          ]
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      viewData: "user/getMyViewData",
      myData: "user/myData"
    }),
  },
  async created() {
    await this.$store.dispatch('user/getMyData').then(async () => {
      if (this.viewData) {
        const trueColors = JSON.parse(JSON.stringify(this.viewData))?.colors;
        if (trueColors) {
          await this.convertToColors(trueColors);
        }
      }
    });
  },
  async mounted() {
    const trueColors = JSON.parse(JSON.stringify(this.viewData))?.colors;
    if (trueColors) {
      await this.convertToColors(trueColors);
    }
  },
  methods: {
    async buttonClick() {
      const newColors = await this.convertToViewColors();
      await this.$store.dispatch('user/setViewColors', newColors);
    },
    async convertToViewColors() {
      return {
        name: this.colors[1],
        background: this.colors[0],
        groupsOfLinks: this.colors[3],
        shortDescription: this.colors[2],
        links: {
          backgroundColor: this.colors[5],
          iconColor: this.colors[6],
          textColor: this.colors[7]
        }
      }
    },
    async convertToColors(obj) {
      this.colors[0] = obj.background;
      this.colors[1] = obj.name;
      this.colors[2] = obj.shortDescription;
      this.colors[3] = obj.groupsOfLinks;
      // this.colors[4] = obj.textColor;
      this.colors[5] = obj.links.textColor;
      this.colors[6] = obj.links.iconColor;
      this.colors[7] = obj.links.backgroundColor;
    }
  }
}
</script>

<style lang="scss" scoped>
.customize {
  &__blocks {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 16px 0 16px 0;
  }
  &__content {
    @include content__block;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__title {
    display: flex;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    padding-bottom: 16px;
    border-bottom: 1px solid $grey2;
  }
  &__body {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
.body {
  &__desc {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__color-data {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__color-picker {
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  &__buttons {
    display: flex;
    gap: 8px;
  }
  &__button {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
}
.color-data {
  &__value {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: $grey3;
    &_active {
      color: $title;
    }
  }
}
.body__color-data:hover {
  .color-data__value {
    color: $title;
  }
}
</style>
