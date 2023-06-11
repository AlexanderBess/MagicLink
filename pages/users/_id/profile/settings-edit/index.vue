<template>
  <div class="settings">
  <InfoBlock
    :title="$tc('profile.mail')"
    :data="{value: 'somemail@mail.com'}"
    :btn-data="{
     path: toEmailChange,
     caption: $t('buttons.edit')
    }"/>
  <InfoBlock
    :title="$tc('profile.password')"
    :data="{value: '****************'}"
    :btn-data="{
      path: toPassChange,
      caption: $t('buttons.edit')
    }"/>
  </div>
</template>

<script>
import { Path } from "~/utils/enums";

export default {
  name: "settingsEdit",
  data() {
    return {
      toPassChange: `users/1${Path.PROFILE_SETTINGS_PASS}`,
      toEmailChange: `users/1${Path.PROFILE_SETTINGS_EMAIL}`
    }
  }
}
</script>

<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 16px;
}
</style>
