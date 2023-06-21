<template>
  <EditBlock
      :title="$tc('profile.shortDescription')"
      :label="$tc('profile.shortDescription')"
      :max-value="100"
      :checkbox-label="$tc('editBlock.showShortDescription')"
      :value="'Марина'"/>
</template>

<script>
export default {
  name: "profileDescription"
}
</script>

<style scoped>

</style>
