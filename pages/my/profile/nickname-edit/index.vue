<template>
  <EditBlock
      :title="$tc('profile.nickName')"
      :label="$tc('profile.nickName')"
      :max-value="100"
      :value="myData.alias || $tc('general.loading')"
      :error-text="false"
      @click="changeValue"/>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "nickName",
  computed: {
    ...mapGetters({
      myData: "user/myData"
    })
  },
  methods: {
    async changeValue(value) {
      const result = await this.$store.dispatch('user/setMyData', { alias: value.inputData });
      if (result) {
        await this.$router.push(`my/profile`);
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
