<template>
  <EditBlock
      :title="$tc('profile.nickName')"
      :label="$tc('profile.nickName')"
      :max-value="100"
      :value="'Марина'"/>
</template>

<script>
export default {
  name: "nickName"
}
</script>

<style lang="scss" scoped>

</style>
