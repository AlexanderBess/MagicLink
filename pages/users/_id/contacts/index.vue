<template>
  <div class="contacts">
    <template v-if="contactsData.length === 0">
      <InfoBlock
        :title="'Ссылка'"
        :btn-data="{
          action: toGroupCreate,
          caption: 'Добавить'
        }"/>
    </template>
    <template v-else>
      <InfoBlock
          v-for="(contactData, key) in contactsData"
          :key="key"
          :title="contactData.name"
          :btn-data="btnData"
          :is-have-menu="true"
          class="contacts__contact contact">
        <div
          v-if="contactData.links.length > 0"
          class="contact">
          {{ contactData.links[0].name }}
        </div>
      </InfoBlock>
      <base-btn
        @click="toGroupCreate"
        mode="active">Создать новую группу</base-btn>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Path } from "~/utils/enums";

export default {
  name: "contacts",
  data() {
    return {
      btnData: {
        path: Path.CONTACTS_CONTACT,
        caption: 'Добавить ссылку'
      }
    }
  },
  computed: {
    ...mapGetters({
      contactsData: 'contacts/getContactsData'
    })
  },
  methods: {
    toGroupCreate() {
      this.$router.push(`${Path.CONTACTS_GROUP}/1`);
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  margin: 16px 0 16px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
