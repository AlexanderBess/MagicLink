<template>
  <EditBlock
      :title="$tc('profile.activation')"
      :checkbox-label="$tc('editBlock.activatedProfile')"
      :check-box-value="myData.activation || false"
      @click="changeValue"/>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "index",
  computed: {
    ...mapGetters({
      myData: "user/myData"
    })
  },
  mounted() {
    console.log(this.myData.activation);
  },
  methods: {
    async changeValue(value) {
      await this.$store.dispatch('user/setMyData', { activation: value.checkBoxData });
    }
  }
}
</script>

<style scoped>

</style>
