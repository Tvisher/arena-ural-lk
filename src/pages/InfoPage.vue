<template>
  <h2 class="lk-content__title font_code">Личный кабинет</h2>
  <div class="lk-content__tabs">
    <div class="tabs_link_list">
      <router-link
        class="tabs_link_item"
        :to="{ name: 'TabItem', params: { tabId: 'calendar' } }"
      >
        Календарь
      </router-link>

      <router-link
        class="tabs_link_item"
        :to="{ name: 'TabItem', params: { tabId: 'my-events' } }"
      >
        Мои мероприятия
      </router-link>

      <div class="notif-link">
        <router-link
          class="tabs_link_item"
          :to="{ name: 'TabItem', params: { tabId: 'notifications' } }"
        >
          <span>Уведомления</span>
          <div class="notif-link__count">{{ nitificationCount }}</div>
        </router-link>
      </div>

      <router-link
        class="tabs_link_item"
        :to="{ name: 'TabItem', params: { tabId: 'archive' } }"
      >
        Архив мероприятий
      </router-link>

      <router-link
        class="tabs_link_item _profile-link"
        :to="{ name: 'TabItem', params: { tabId: 'profile' } }"
      >
        Профиль
      </router-link>
    </div>

    <div class="tabs-pages">
      <router-view> </router-view>
    </div>
  </div>
</template>
<script setup>
import { useLkData } from "@/stores/LkData";
const LkDataStore = useLkData();
let nitificationCount = LkDataStore.notifications.length;
nitificationCount = nitificationCount < 100 ? nitificationCount : "99+";
</script>

<style lang="scss"></style>
