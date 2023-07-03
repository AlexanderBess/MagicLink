<template>
  <div
    :class="mode ? `notification_${mode}` : ''"
    class="notification">
    <span class="notification__text">{{ notifText }}</span>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    mode: {
      type: String,
      default: ''
    }
  },
  methods: {
    notifText() {
      let text = '';
      switch (this.mode) {
        case "success-save":
          text = this.$t('notification.success.save');
          break;
        case "error-save":
          text = this.$t('notification.error.save');
          break;
      }
      return text;
    }
  }
}
</script>

<style lang="scss">

</style>
