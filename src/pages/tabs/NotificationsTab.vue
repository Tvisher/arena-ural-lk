<template>
  <div class="notifications-head">
    <div class="notifications-tabs-btns">
      <!-- <div
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
      </div> -->
    </div>
    <router-link class="btn" :to="{ name: 'NotificationSettings' }">
      Настройка уведомлений
    </router-link>
  </div>
  <div class="notifications-list">
    <div class="date-wrapper" v-for="date in notificationDates">
      <div class="date-title">{{ date }}</div>
      <div
        class="notification-item"
        v-for="notification in groupedByDate[date]"
      >
        <div class="notification-item__content">
          <a
            :href="notification.linkgig"
            target="_blank"
            class="notification-item__title"
            >{{ notification.namegig }}</a
          >
          <div class="notification-item__descr">
            {{ notification.text }}
          </div>
        </div>
        <!-- <div class="event-block__nameplates">
          <div class="label label_cat">
            <svg class="w24 fill_none" style="stroke: #ef723b">
              <use xlink:href="@/assets/imgs/sprite.symbol.svg#alert"></use>
            </svg>
            <span>{{ notification.text }}</span>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useLkData } from "@/stores/LkData";
const LkDataStore = useLkData();

function groupByDate(array) {
  return array.reduce((acc, obj) => {
    const date = obj.date_mess;
    if (!acc[date]) {
      acc[date] = [obj];
    } else {
      acc[date].push(obj);
    }
    return acc;
  }, {});
}

const groupedByDate = groupByDate(LkDataStore.notifications);
const notificationDates = Object.keys(groupedByDate);
// Функция преобразования строки даты в объект Date
function parseDate(dateString) {
  const parts = dateString.split(".");
  // new Date(year, monthIndex, day)
  return new Date(parts[2], parts[1] - 1, parts[0]);
}
// Сравнивает две даты
function compareDates(date1, date2) {
  return parseDate(date1) - parseDate(date2);
}
// Сортировка массива дат
notificationDates.sort(compareDates).reverse();

const currentTab = ref("actual");
const setCurrenTab = (tabName) => (currentTab.value = tabName);
</script>

<style lang="scss" scoped>
.date-wrapper {
  gap: 24px;
  display: flex;
  flex-direction: column;
}
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
  align-items: center;
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
  .label_cat {
    img,
    svg {
      width: 20px;
      height: 20px;
      object-fit: contain;
    }
  }
}

.notification-item__title {
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 133%;
  /* 133.333% */
  // margin-bottom: 8px;
  margin-bottom: 0;
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
