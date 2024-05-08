<template>
  <div class="filter">
    <div class="label_wrapper">
      <div class="label_title">Тип мероприятия</div>
      <v-select
        :options="eventsTypes"
        v-model="selectedEventType"
        label="title"
        :searchable="false"
      ></v-select>
    </div>
    <div class="label_wrapper">
      <div class="label_title">Дата</div>
      <VueDatePicker
        v-model="selectedDate"
        class="my-events-calendar range-calendar"
        locale="ru"
        range
        multi-calendars
        month-name-format="long"
        :enable-time-picker="false"
        :month-change-on-scroll="false"
        :format="format"
        placeholder="ДД.ММ.ГГГГ—ДД.ММ.ГГГГ"
      >
        <template #action-row="{ selectDate, closePicker }">
          <div class="action-row">
            <button class="close-button" @click="closePicker">Отмена</button>
            <button class="select-button" @click="selectDate">Применить</button>
          </div>
        </template>
      </VueDatePicker>
    </div>
  </div>
  <div class="events_list">
    <div
      class="events_col"
      v-for="userEvent in filteredUserEventsList"
      :key="userEvent.ID"
    >
      <div class="events_item">
        <div class="label label_cat">
          <img :src="userEvent.type_img" alt="" />
        </div>
        <div class="label label_text">{{ userEvent.status.label }}</div>
        <div class="item_img">
          <img :src="userEvent.img" alt="" />
        </div>
        <div class="events_item_body">
          <a
            :href="decodeURIComponent(userEvent.link)"
            target="_blank"
            class="item_title"
          >
            <span> {{ userEvent.post_title }}</span>
            <svg class="w24 stroke_black">
              <use
                xlink:href="@/assets/imgs/sprite.symbol.svg#arrow_up_right"
              ></use>
            </svg>
          </a>
          <div class="events_item_text" v-html="userEvent.post_content"></div>
          <ul class="events_item_list">
            <li>
              <svg class="w20 fill_none stroke_black">
                <use
                  xlink:href="@/assets/imgs/sprite.symbol.svg#location"
                ></use>
              </svg>
              {{ userEvent.adress }}
            </li>
            <li>
              <svg class="w20 fill_none stroke_black">
                <use
                  xlink:href="@/assets/imgs/sprite.symbol.svg#calendar"
                ></use>
              </svg>
              {{ dateForEvent(userEvent.date) }}
            </li>
            <li>
              <svg class="w20 fill_none stroke_black">
                <use xlink:href="@/assets/imgs/sprite.symbol.svg#watch"></use>
              </svg>
              {{ userEvent.start }}{{ ` - ${userEvent.end}` }}
            </li>
          </ul>
        </div>
        <div class="events_item_btns">
          <a
            href="#"
            class="btn btn_small"
            @click="showUnsubscribeModal($event, userEvent.ID)"
            v-if="
              userEvent.status.value != 4 &&
              !userEvent.hasOwnProperty('usergigreservonly')
            "
            >Отказаться от участия</a
          >

          <a
            href="#"
            class="btn btn_small"
            @click="applyForEvent($event, userEvent.ID)"
            v-if="
              userEvent.status.value != 4 &&
              userEvent.hasOwnProperty('usergigreservonly')
            "
            >Подать заявку</a
          >

          <a
            :href="decodeURIComponent(userEvent.link)"
            target="_blank"
            class="btn btn_small btn_opacity"
            >Подробнее</a
          >
        </div>
      </div>
    </div>
  </div>
  <transition name="fade">
    <BottomModal
      :title="modalMessage"
      :status="modalStatus"
      v-if="showModal"
      @closeModal="showModal = false"
    />
  </transition>
  <transition name="fade">
    <UnsubscribeModal
      v-if="unsubscribeModalData.show"
      :eventData="unsubscribeModalData.eventData"
      @closeModal="closeUnsubscribeModal"
    />
  </transition>
</template>

<script setup>
import UnsubscribeModal from "@/components/UnsubscribeModal.vue";
import BottomModal from "@/components/BottomModal.vue";
import axios from "axios";

import { ref, computed } from "vue";
import { storeToRefs } from "pinia";

import { useLkData } from "@/stores/LkData";
const LkDataStore = useLkData();
const { userEvents } = storeToRefs(LkDataStore);
const allEvents = LkDataStore.allEvents;

const eventsTypesData = LkDataStore.allEventsTypres;
const unsubscribeModalData = ref({
  show: false,
  eventData: null,
});

const modalMessage = ref("");
const showModal = ref(false);
const modalStatus = ref(null);

const eventsTypes = eventsTypesData.map((el) => ({
  title: el.name,
  code: el.code,
}));
eventsTypes.unshift({
  title: "Все",
  code: "all",
});
const selectedDate = ref("");
const selectedEventType = ref(eventsTypes[0]);

const filteredUserEventsList = computed(() => {
  return userEvents.value
    .filter((el) => {
      if (selectedEventType.value.code == "all") {
        return el;
      }
      return el.type.value == selectedEventType.value.code;
    })
    .filter((el) => {
      if (!selectedDate.value) {
        return el;
      }
      return isDateInRange(el.date, selectedDate.value);
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });
});

console.log(filteredUserEventsList);

const showUnsubscribeModal = (e, eventItemId) => {
  e.preventDefault();
  const currentEvent = userEvents.value.find((el) => el.ID == eventItemId);
  unsubscribeModalData.value.eventData = currentEvent;
  unsubscribeModalData.value.show = true;
};

const closeUnsubscribeModal = (eventId) => {
  unsubscribeModalData.value.show = false;
  if (eventId) {
    modalMessage.value = "Вы успешно отказались от участия в мероприятии.";
    modalStatus.value = true;
    showModal.value = true;
    userEvents.value = userEvents.value.filter((el) => el.ID !== eventId);

    setTimeout(() => (showModal.value = false), 5000);
  }
};

const format = (date) => {
  let dateFrom = {
    day: date[0].getDate() < 10 ? `0${date[0].getDate()}` : date[0].getDate(),
    month:
      date[0].getMonth() + 1 < 10
        ? `0${date[0].getMonth() + 1}`
        : date[0].getMonth() + 1,
    year: date[0].getFullYear(),
  };
  dateFrom = `${dateFrom.day}.${dateFrom.month}.${dateFrom.year}`;

  let dateTo = {
    day: date[1].getDate() < 10 ? `0${date[1].getDate()}` : date[1].getDate(),
    month:
      date[1].getMonth() + 1 < 10
        ? `0${date[1].getMonth() + 1}`
        : date[1].getMonth() + 1,
    year: date[1].getFullYear(),
  };
  dateTo = `${dateTo.day}.${dateTo.month}.${dateTo.year}`;

  return `${dateFrom} - ${dateTo}`;
};

function dateForEvent(inputDate) {
  const [month, day, year] = inputDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return `${date.getDate()} ${
    [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ][date.getMonth()]
  } ${date.getFullYear()}`;
}

function isDateInRange(dateToCheck, dateArray) {
  const dateObj = new Date(dateToCheck);
  const sortedDates = dateArray
    .map((date) => new Date(date))
    .sort((a, b) => a - b);
  return sortedDates.some(
    (date, index) => dateObj >= date && dateObj <= sortedDates[index + 1]
  );
}

const applyForEvent = (e, eventid) => {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains("sending")) return;
  target.classList.add("sending");
  const postData = {
    eventId: String(eventid),
    user: LkDataStore.userData.userId,
  };

  axios
    .post(
      "/wp-content/themes/sp-theme-master/ajax/zayv_user.php",
      JSON.stringify(postData)
    )
    .then((res) => {
      console.log(res.data);
      target.classList.remove("sending");
      modalMessage.value = res.data.message;
      modalStatus.value = res.data.status;
      showModal.value = true;
      if (res.data.status == true) {
        const currentEvent = allEvents.find((el) => el.ID == eventid);
        currentEvent.usergig = "y";
        if (currentEvent.hasOwnProperty("usergigreservonly")) {
          delete currentEvent.usergigreservonly;
        }
        const oldEv = userEvents.value.find((el) => el.ID == eventid);
        if (!oldEv) {
          userEvents.value.push(currentEvent);
        } else {
          delete oldEv.currentEvent.usergigreservonly;
        }
        console.log(userEvents.value);
      }

      setTimeout(() => (showModal.value = false), 5000);
    })
    .catch((error) => {
      console.log("Ошибка!!!", error);
    });
};
</script>

<style lang="scss">
@import "vue-select/dist/vue-select.css";

.events_col {
  width: 50% !important;
}

.filter {
  margin-bottom: 30px !important;
}

.v-select {
  width: 200px;
  position: relative;
  &.vs--open {
    .vs__dropdown-toggle {
      box-shadow: 0 0 0 4px rgb(242, 244, 247),
        0 1px 2px 0 rgba(16, 24, 40, 0.05);
      border-radius: 8px;
      border-bottom-color: #d0d5dd;
    }

    .vs__actions {
      transform: rotate(180deg);
    }
  }
}

.vs__clear {
  display: none;
}

.vs__dropdown-toggle {
  padding: 10px 40px 10px 16px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  height: 44px;
}

.vs__search,
.vs__selected {
  margin-top: 0 !important;
}

.vs__selected {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  margin: 0;
  font-size: 16px;
  line-height: 130%;
  font-style: normal;
  font-weight: 500;
  color: #000;
}

.vs__selected-options {
  position: static;
  height: 25px;
  width: calc(100% - 20px);
}

.vs--single.vs--open .vs__selected,
.vs--single.vs--loading .vs__selected {
  position: relative;
  opacity: 1;
}

.vs__search {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.vs__actions {
  padding: 0;
  position: absolute;
  transition: all 0.2s ease;
  width: 20px;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  right: 16px;
  top: 0;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5 7.5L10 12.5L15 7.5' stroke='%23667085' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e ");
}

.vs__open-indicator {
  display: none;
}

.vs__dropdown-menu {
  top: calc(100% - var(--vs-border-width) + 8px);
  border: 1px solid #f2f4f7;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 6px -2px rgba(16, 24, 40, 0.03),
    0 12px 16px -4px rgba(16, 24, 40, 0.08);
  max-height: 280px;
  scrollbar-color: #ef723b transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ef723b;
    border-radius: 20px;
  }
}

.vs__dropdown-option {
  padding: 10px 39px 10px 14px;
  font-size: 16px;
  line-height: 150%;
  font-style: normal;
  font-weight: 500;
  word-wrap: break-word;
  white-space: normal;

  &.vs__dropdown-option--highlight {
    background: #f9fafb;
    opacity: 1;
    color: #ef723b;
  }

  &.vs__dropdown-option--selected {
    background: #f9fafb;
    opacity: 1;
    color: #000;
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 12px;
      right: 14px;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M16.6663 5L7.49967 14.1667L3.33301 10' stroke='%23EF723B' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e ");
    }
  }
}

@media (max-width: 700px) {
  .events_col {
    width: 100% !important;
  }
}
</style>
