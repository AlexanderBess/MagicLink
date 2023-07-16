<template>
  <div>
    <base-field :label="$tc('signUpOrIn.password')"/>
    <base-field :label="$tc('profile.newPassword')"/>
    <base-btn/>
  </div>
</template>

<script>
export default {
  name: "passwordEdit"
}
</script>

<style scoped>

</style>
