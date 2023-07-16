<template>
  <EditBlock
      :title="$tc('profile.shortDescription')"
      :label="$tc('profile.shortDescription')"
      :max-value="100"
      :checkbox-label="$tc('editBlock.showShortDescription')"
      :value="myData.description.value || ''"
      @click="changeValue"/>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "profileDescription",
  computed: {
    ...mapGetters({
      myData: "user/myData"
    })
  },
  async mounted() {
    if (!this.myData.name) {
      await this.$store.dispatch('user/getMyData');
    }
  },
  methods: {
    async changeValue(value) {
      await this.$store.dispatch('user/setMyData', {
        description: {
          value: value.inputData,
          display: value.checkBoxData
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
