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
          :is-have-slot="true"
          class="contacts__contact">
        <div
          v-if="contactData.links.length > 0"
          class="contact">
          <div
            v-for="(value, id) in contactData.links"
            :key="id"
            class="contact__block">
            <div class="contact__head">
              <span class="contact__title">{{ value.name }}</span>
              <OptionalMenu :menu-actions="menuActions"/>
            </div>
            <div class="contact__body">
              <img
                class="contact__img"
                :src="value.img"
                :alt="value.name"/>
              <a
                class="contact__value"
                :href="`tel:${value.value}`">{{ value.value }}</a>
            </div>
          </div>
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
        path: `${Path.CONTACTS_CONTACT}/1`,
        caption: 'Добавить ссылку'
      },
      menuActions: [
        {
          img: require('~/assets/img/ui/edit.svg'),
          name: 'Редактировать',
          click: (event) => {
            console.log('redact: '+ event);
          }
        },
        {
          img: require('~/assets/img/ui/delete.svg'),
          name: 'Удалить',
          click: (event) => {
            console.log('delete: '+ event);
          }
        },
      ]
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
.contact {
  width: 100%;
  &__block {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 1px solid $grey2;
    border-radius: 8px;
    padding: 16px;
  }
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
    border-bottom: 1px solid $grey2;
  }
  &__title {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
  &__body {
    display: flex;
    gap: 8px;
  }
}
</style>
