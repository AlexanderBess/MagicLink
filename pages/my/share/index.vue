<template>
  <div class="content__share">
    <InfoBlock
      :title="$tc('share.title')"
      :btn-data="{
        caption: $tc('buttons.copyLink'),
        action: copyToClipboard
      }"
      :is-have-slot="true">
      <qrcode
        :value="link"
        :options="{ width: 180 }"/>
      <nuxt-link :to="link">{{ link }}</nuxt-link>
    </InfoBlock>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "share",
  middleware: 'auth',
  data() {
    return {
      link: "",
    }
  },
  computed: {
    ...mapGetters({
      myData: "user/myData"
    })
  },
  created() {
    this.link = `/${this.myData.alias}`;
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
