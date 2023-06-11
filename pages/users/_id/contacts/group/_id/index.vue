<template>
  <EditBlock
    title="Создать группу"
    label="Имя группы"
    :max-value="50"
    @click="saveGroupName"
  />
</template>

<script>
export default {
  name: "groupContacts",
  methods: {
    saveGroupName(value) {
      this.$store.dispatch('contacts/setGroupName', value);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
