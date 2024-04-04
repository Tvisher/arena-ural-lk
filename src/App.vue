<template>
  <transition name="fade">
    <div class="container" v-if="appLoaded">
      <div class="lk-template">
        <div class="lk-content">
          <ul class="breadcrumb">
            <li class="breadcrumb_item">
              <a href="/" class="breadcrumb_link">Главная</a>
              <span class="breadcrumb_pipe"></span>
            </li>
            <li class="breadcrumb_item">
              <span class="breadcrumb_link">Личный кабинет</span>
            </li>
          </ul>
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </div>
        <div class="lk-user__wrapper">
          <User />
        </div>
      </div>
    </div>
  </transition>
  <!-- <BottomModal :title="'Текст модального окна, может быть любой'" /> -->
</template>
<script setup>
import BottomModal from "@/components/BottomModal.vue";
import { ref, onMounted, computed } from "vue";
import { useLkData } from "@/stores/LkData";
const LkDataStore = useLkData();
const getAppData = LkDataStore.getAppData;

const appLoaded = ref(false);
onMounted(() => {
  getAppData()
    .then((response) => {
      setTimeout(() => (appLoaded.value = true), 500);
    })
    .catch(function (error) {
      if (process.env.NODE_ENV === "development") {
        setTimeout(() => (appLoaded.value = true), 500);
      }
    });
});
import User from "@/components/User.vue";
</script>

<style lang="scss"></style>
