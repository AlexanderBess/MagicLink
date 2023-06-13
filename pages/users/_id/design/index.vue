<template>
  <div v-if="designDataClone.length > 0" class="customize__blocks">
    <div
      v-for="(elementData, key) in designDataClone"
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
              v-model="colors[data.id]"
              @change="colorChanged(colors[data.id], [elementData.id,data.id])"/>
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Design",
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
      designDataClone: []
    }
  },
  computed: {
    ...mapGetters({
      designData: "design/getDesignData"
    })
  },
  mounted() {
    this.designDataClone = this.designData;
  },
  methods: {
    colorChanged(color, test) {
      console.log(this.colors);
      console.log('color: '+color, test);
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
