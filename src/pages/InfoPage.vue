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
          <div class="notif-link__count">99+</div>
        </router-link>
      </div>

      <router-link
        class="tabs_link_item"
        :to="{ name: 'TabItem', params: { tabId: 'events-archive' } }"
      >
        Архив мероприятий
      </router-link>
    </div>

    <div class="tabs-pages">
      <router-view> </router-view>
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss"></style>
