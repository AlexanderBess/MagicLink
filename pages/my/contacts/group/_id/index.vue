<template>
  <EditBlock
    title="Создать группу"
    label="Имя группы"
    :max-value="50"
    @click="saveGroupName"
  />
</template>

<script>
import { Path } from "~/utils/enums";

export default {
  name: "groupContacts",
  methods: {
    saveGroupName(value) {
      this.$store.dispatch('contacts/setGroupName', value).then(() => {
        this.$router.go(-1);
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
