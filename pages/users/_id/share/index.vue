<template>
  <div class="content__share">
    <InfoBlock
      title="Моя ссылка для обмена"
      :btn-data="{
        caption: 'Скопировать ссылку',
        action: copyToClipboard
      }"
      :is-have-slot="true">
      <qrcode
        :value="link"
        :options="{ width: 180 }"/>
      <span>{{ link }}</span>
    </InfoBlock>
  </div>
</template>

<script>

export default {
  name: "share",
  data() {
    return {
      link: "https://www.google.com",
    }
  },
  methods: {
    unsecuredCopyToClipboard (text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
      try { document.execCommand('copy'); }
      catch(err) {
        console.error('Unable to copy to clipboard',err);
      }
      document.body.removeChild(textArea);
    },

    /**
     * Copies the text passed as param to the system clipboard
     * Check if using HTTPS and navigator.clipboard is available
     * Then uses standard clipboard API, otherwise uses fallback
     */
    copyToClipboard() {
      if (window.isSecureContext && navigator.clipboard) {
        navigator.clipboard.writeText(this.link);
      } else {
        this.unsecuredCopyToClipboard(this.link);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content__share {
  margin-top: 16px;
}
</style>
