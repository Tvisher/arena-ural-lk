<template>
  <div class="notifications-head">
    <div class="notifications-tabs-btns">
      <div
        class="notifications-tabs-btn"
        @click="setCurrenTab('actual')"
        :class="{ active: currentTab == 'actual' }"
      >
        Актуальные
      </div>
      <div
        class="notifications-tabs-btn"
        @click="setCurrenTab('important')"
        :class="{ active: currentTab == 'important' }"
      >
        Важные
      </div>
      <div
        class="notifications-tabs-btn"
        @click="setCurrenTab('all')"
        :class="{ active: currentTab == 'all' }"
      >
        Все
      </div>
    </div>
    <router-link class="btn" :to="{ name: 'NotificationSettings' }">
      Настройка уведомлений
    </router-link>
  </div>
  <div class="notifications-list">
    <div class="date-title">Сегодня</div>
    <div class="notification-item">
      <div class="notification-item__content">
        <a href="javascript:void(0)" class="notification-item__title"
          >Мир чемпионат РПЛ ФК “Урал” - ФК “Зенит”</a
        >
        <div class="notification-item__descr">
          We’re looking for an experienced engineering manager to join our team.
        </div>
      </div>
    </div>
    <div class="date-title">Вчера</div>

    <div class="notification-item">
      <div class="notification-item__content">
        <a href="javascript:void(0)" class="notification-item__title"
          >Мир чемпионат РПЛ ФК “Урал” - ФК “Зенит”</a
        >
        <div class="notification-item__descr">
          We’re looking for an experienced engineering manager to join our team.
        </div>
      </div>
    </div>
    <div class="date-title">30.04.2024</div>

    <div class="notification-item">
      <div class="notification-item__content">
        <a href="javascript:void(0)" class="notification-item__title"
          >Мир чемпионат РПЛ ФК “Урал” - ФК “Зенит”</a
        >
        <div class="notification-item__descr">
          We’re looking for an experienced engineering manager to join our team.
        </div>
        <div class="events_item_btns">
          <a href="#" class="btn btn_small">Подать заявку</a>
          <a href="#" class="btn btn_small btn_opacity">Подробнее</a>
        </div>
      </div>
      <div class="event-block__nameplates">
        <div class="label label_cat">
          <svg class="w24 fill_none" style="stroke: #ef723b">
            <use xlink:href="@/assets/imgs/sprite.symbol.svg#alert"></use>
          </svg>
          <span>Срочная замена</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const currentTab = ref("actual");
const setCurrenTab = (tabName) => (currentTab.value = tabName);
</script>

<style lang="scss" scoped>
.notifications-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.date-title {
  color: #667085;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  text-align: center;
}

.notifications-tabs-btns {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #667085;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
}

.notifications-tabs-btn {
  cursor: pointer;
  padding: 14px 4px;
  padding-top: 0;

  border-bottom: 2px solid transparent;

  &.active {
    border-color: #ef723b;
    color: #ef723b;
  }
}

.notifications-head {
  flex-wrap: wrap;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 30px;
  gap: 20px;
  @media (max-width: 600px) {
    .btn {
      order: -1;
      width: 100%;
    }
  }
}

.notification-item {
  display: flex;
  border-radius: 16px;
  border: 1px solid #d0d5dd;
  background-color: #f9fafb;
  padding: 24px;
  gap: 20px;
  justify-content: space-between;
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    border-color: #ef723b;
    background-color: #fff;
  }
}

.event-block__nameplates {
  flex-shrink: 0;
}

.notification-item__title {
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 133%;
  /* 133.333% */
  margin-bottom: 8px;
}

.notification-item__descr {
  margin-bottom: 8px;
  color: #475467;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 150% */
}

.events_item_btns {
  padding: 0;
  margin-top: 24px;
}
</style>
