<template>
  <EditBlock
    :title="$tc('profile.nameEdit')"
    :label="$tc('profile.name')"
    :max-value="50"
    :value="myData.name || $tc('general.loading')"
    @click="changeValue"/>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "nameEdit",
  computed: {
    ...mapGetters({
      myData: "user/myData"
    })
  },
  methods: {
    async changeValue(value) {
      await this.$store.dispatch('user/setMyData', { name: value.inputData });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
