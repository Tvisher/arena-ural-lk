<template>
  <div class="filter">
    <div class="label_wrapper">
      <div class="label_title">Тип мероприятия</div>
      <v-select
        :options="events"
        v-model="selectedEventType"
        label="title"
      ></v-select>
    </div>
    <div class="label_wrapper">
      <div class="label_title">Дата</div>
      <!-- <div class="date_input date_selection_item">
        <input
          type="text"
          class="form_input date_input_input"
          placeholder="ДД.ММ.ГГГГ—ДД.ММ.ГГГГ"
          readonly=""
        />
        <span class="date_input_clear hide">
          <svg class="w20 fill_none">
            <use xlink:href="@/assets/imgs/sprite.symbol.svg#close"></use>
          </svg>
        </span>
      </div> -->
      <VueDatePicker
        v-model="selectedDate"
        class="my-events-calendar"
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
    <div class="events_col">
      <div class="events_item">
        <div class="label label_cat">
          <svg class="w24 fill_none">
            <use
              xlink:href="@/assets/imgs/sprite.symbol.svg#category_football"
            ></use>
          </svg>
        </div>
        <div class="label label_text">Идёт набор</div>
        <div class="item_img">
          <img src="@/assets/imgs/events_img.png" alt="" />
        </div>
        <div class="events_item_body">
          <a href="#" class="item_title">
            <span> Мир чемпионат РПЛ ФК “Урал” - ФК “Зенит” </span>
            <svg class="w24 stroke_black">
              <use
                xlink:href="@/assets/imgs/sprite.symbol.svg#arrow_up_right"
              ></use>
            </svg>
          </a>
          <div class="events_item_text">
            Дополнительная информация Дополнительная информация
          </div>
          <ul class="events_item_list">
            <li>
              <svg class="w20 fill_none stroke_black">
                <use
                  xlink:href="@/assets/imgs/sprite.symbol.svg#location"
                ></use>
              </svg>
              Свердловская обл, г Екатеринбург
            </li>
            <li>
              <svg class="w20 fill_none stroke_black">
                <use
                  xlink:href="@/assets/imgs/sprite.symbol.svg#calendar"
                ></use>
              </svg>
              20 января 2024
            </li>
            <li>
              <svg class="w20 fill_none stroke_black">
                <use xlink:href="@/assets/imgs/sprite.symbol.svg#watch"></use>
              </svg>
              19:00-21:30
            </li>
          </ul>
        </div>
        <div class="events_item_btns">
          <a href="#" class="btn btn_small">Отказаться от участия</a>
          <a href="#" class="btn btn_small btn_opacity">Подробнее</a>
        </div>
      </div>
    </div>
    <div class="events_col">
      <div class="events_item">
        <div class="label label_cat">
          <svg class="w24 fill_none">
            <use
              xlink:href="@/assets/imgs/sprite.symbol.svg#category_football"
            ></use>
          </svg>
        </div>
        <div class="label label_text">Идёт набор</div>
        <div class="item_img">
          <img src="@/assets/imgs/events_img.png" alt="" />
        </div>
        <div class="events_item_body">
          <a href="#" class="item_title">
            <span> Мир чемпионат РПЛ ФК “Урал” - ФК “Зенит” </span>
            <svg class="w24 stroke_black">
              <use
                xlink:href="@/assets/imgs/sprite.symbol.svg#arrow_up_right"
              ></use>
            </svg>
          </a>
          <div class="events_item_text">
            Дополнительная информация Дополнительная информация
          </div>
          <ul class="events_item_list">
            <li>
              <svg class="w20 fill_none stroke_black">
                <use
                  xlink:href="@/assets/imgs/sprite.symbol.svg#location"
                ></use>
              </svg>
              Свердловская обл, г Екатеринбург
            </li>
            <li>
              <svg class="w20 fill_none stroke_black">
                <use
                  xlink:href="@/assets/imgs/sprite.symbol.svg#calendar"
                ></use>
              </svg>
              20 января 2024
            </li>
            <li>
              <svg class="w20 fill_none stroke_black">
                <use xlink:href="@/assets/imgs/sprite.symbol.svg#watch"></use>
              </svg>
              19:00-21:30
            </li>
          </ul>
        </div>
        <div class="events_item_btns">
          <a href="#" class="btn btn_small">Отказаться от участия</a>
          <a href="#" class="btn btn_small btn_opacity">Подробнее</a>
        </div>
      </div>
    </div>
    <div class="events_col">
      <div class="events_item">
        <div class="label label_cat">
          <svg class="w24 fill_none">
            <use
              xlink:href="@/assets/imgs/sprite.symbol.svg#category_football"
            ></use>
          </svg>
        </div>
        <div class="label label_text">Идёт набор</div>
        <div class="item_img">
          <img src="@/assets/imgs/events_img.png" alt="" />
        </div>
        <div class="events_item_body">
          <a href="#" class="item_title">
            <span> Мир чемпионат РПЛ ФК “Урал” - ФК “Зенит” </span>
            <svg class="w24 stroke_black">
              <use
                xlink:href="@/assets/imgs/sprite.symbol.svg#arrow_up_right"
              ></use>
            </svg>
          </a>
          <div class="events_item_text">
            Дополнительная информация Дополнительная информация
          </div>
          <ul class="events_item_list">
            <li>
              <svg class="w20 fill_none stroke_black">
                <use
                  xlink:href="@/assets/imgs/sprite.symbol.svg#location"
                ></use>
              </svg>
              Свердловская обл, г Екатеринбург
            </li>
            <li>
              <svg class="w20 fill_none stroke_black">
                <use
                  xlink:href="@/assets/imgs/sprite.symbol.svg#calendar"
                ></use>
              </svg>
              20 января 2024
            </li>
            <li>
              <svg class="w20 fill_none stroke_black">
                <use xlink:href="@/assets/imgs/sprite.symbol.svg#watch"></use>
              </svg>
              19:00-21:30
            </li>
          </ul>
        </div>
        <div class="events_item_btns">
          <a href="#" class="btn btn_small">Отказаться от участия</a>
          <a href="#" class="btn btn_small btn_opacity">Подробнее</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const events = ref([
  { title: "Все" },
  { title: "Футбол" },
  { title: "Хоккей" },
  { title: "Другие спортивные мероприятия" },
  { title: "Культурно-массовые мероприятия" },
]);
const selectedDate = ref("");
const selectedEventType = ref(events.value[0].title);

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
</script>

<style lang="scss">
@import "vue-select/dist/vue-select.css";
.my-events-calendar {
  font-family: "Inter", sans-serif;
  .dp__input {
    font-size: 14px;
    min-width: 240px;
    padding-top: 9px;
    padding-bottom: 9px;
    font-weight: 600;
  }
  .dp__action_row {
    justify-content: flex-end;
    .action-row {
      display: flex;
      gap: 12px !important;
    }
  }
  .select-button,
  .close-button {
    color: #fff;
    border-radius: 8px;
    padding: 10px 16px !important;
    min-width: 110px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    height: auto !important;
    justify-content: center;
    cursor: pointer;
  }
  .select-button {
    background-color: #ef723b;
  }
  .close-button {
    color: #344054;
    border: 1px solid #d0d5dd;
    background-color: #fff;
  }
  .dp__range_end,
  .dp__range_start,
  .dp__active_date {
    background-color: #ef723b;
  }

  .dp__range_start {
    border-radius: 0;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }
  .dp__range_end {
    border-radius: 0;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }

  .dp__today {
    border-radius: 20px;
    border-color: #ef723b;
  }
  .dp__calendar_item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  }
  .dp__cell_inner {
    font-size: 13px;
    line-height: 120%;
  }
  .dp__outer_menu_wrap {
    box-shadow: 0px 4px 80px rgba(22, 22, 22, 0.12);
    border-radius: 15px;
    .dp__menu {
      border: none !important;
    }
  }
  .dp__action_row {
    padding: 15px 24px;
  }
  .dp__menu_inner {
    padding: 15px 24px;
  }
  .dp__month_year_wrap {
    font-size: 14px;
    justify-content: center;
    button {
      width: fit-content;
    }
  }
  .dp__overlay_cell_active {
    background-color: #ef723b;
  }
  .dp__calendar_header_separator {
    display: none;
  }
  .dp__calendar_header_item {
    font-weight: 500;
    font-size: 14px;
    line-height: 142.857%;
    text-transform: capitalize;
  }
  .dp__menu_inner {
    position: relative;
    gap: 20px;
    &::before {
      position: absolute;
      left: 50%;
      top: 0;
      height: 100%;
      width: 1px;
      content: "";
      background: #eaecf0;
    }
    border-bottom: 1px solid #eaecf0;
  }
  .dp__arrow_top {
    display: none;
  }
}

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
  // padding: 8.5px 10px;
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
  // position: static;

  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  margin: 0;
  font-size: 16px;
  line-height: 150%;
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
</style>
