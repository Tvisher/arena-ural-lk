<template>
  <h2 class="lk-content__title font_code">Настройка уведомлений</h2>
  <div class="lk-content__descr">
    Выберите те категории уведемолений, которые вы хотите получать
  </div>
  <div class="categories_list">
    <div class="categories_col" v-for="eventType in eventsTypes">
      <input
        type="checkbox"
        :name="eventType.code"
        :value="eventType.code"
        :checked="isChecked(eventType.code)"
        @change="toggleCheckbox(eventType.code)"
      />
      <div class="categories_item">
        <div class="categories_item_icon">
          <img :src="eventType.img" alt="" />
        </div>
        <div>
          <div class="categories_item_title">{{ eventType.name }}</div>
          <div class="categories_item_text">
            {{ eventType.description }}
          </div>
        </div>
        <div class="categories_item_dot"></div>
      </div>
    </div>
  </div>
  <div class="events_item_btns">
    <router-link
      class="btn btn_small btn_white"
      :to="{ name: 'TabItem', params: { tabId: 'notifications' } }"
    >
      Назад
    </router-link>
    <a href="javascript:void(0)" class="btn btn_small" @click="saveEdit"
      >Изменить</a
    >
  </div>
  <transition name="fade">
    <BottomModal
      :title="modalMessage"
      v-if="showModal"
      @closeModal="showModal = false"
    />
  </transition>
</template>
<script setup>
import BottomModal from "@/components/BottomModal.vue";
import axios from "axios";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useLkData } from "@/stores/LkData";
const LkDataStore = useLkData();
const eventsTypes = LkDataStore.allEventsTypres;

const { userSubscribes } = storeToRefs(LkDataStore);
const userSubscribesCopy = JSON.parse(JSON.stringify(userSubscribes.value));
const selectedEventsTypes = ref(userSubscribesCopy);
const modalMessage = ref("");
const showModal = ref(false);

const isChecked = (value) => selectedEventsTypes.value.includes(value);

const toggleCheckbox = (value) => {
  const index = selectedEventsTypes.value.indexOf(value);
  if (index !== -1) {
    selectedEventsTypes.value.splice(index, 1);
  } else {
    selectedEventsTypes.value.push(value);
  }
};

const saveEdit = () => {
  const editedData = {
    sport_user: selectedEventsTypes.value,
    userId: LkDataStore.userData.userId,
  };
  axios
    .post(
      "/wp-content/themes/sp-theme-master/ajax/update_mess.php",
      JSON.stringify(editedData)
    )
    .then((res) => {
      modalMessage.value = "Настройки уведомлений успешно изменены";
      showModal.value = true;
      setTimeout(() => (showModal.value = false), 5000);
    })
    .catch((error) => {
      console.log("Ошибка!!!", error);
    });
};
</script>

<style lang="scss" scoped>
.categories_item_dot {
  margin-left: auto !important;
}

.events_item_btns {
  width: 100%;
  padding: 0 !important;

  .btn {
    margin: 0;
    width: calc(50% - 10px);
  }
}
</style>
