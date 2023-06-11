<template>
  <EditBlock
    :title="$tc('profile.nameEdit')"
    :label="$tc('profile.name')"
    :max-value="50"
    :value="'Марина'"/>
</template>

<script>
export default {
  name: "nameEdit"
}
</script>

<style lang="scss" scoped>

</style>
