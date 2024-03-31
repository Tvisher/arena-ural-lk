<template>
  <VueDatePicker
    class="events-calendar"
    inline
    locale="ru"
    :multi-calendars="isMultiCalendar"
    auto-apply
    month-name-format="long"
    :model-value="selectedDate"
    :enable-time-picker="false"
    :highlight="highlightedDates"
    :month-change-on-scroll="false"
    @update:model-value="handleDate"
  />

  <div class="calendar-events__list">
    <div class="event-block">
      <div class="event-block__wrapper">
        <div class="event-block__info">
          <div class="event-block__title">
            Мир чемпионат РПЛ ФК “Урал” - ФК “Зенит”
          </div>
          <div class="event-block__descr">
            We’re looking for an experienced engineering manager to join our
            team.
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
          <div class="events_item_btns">
            <a href="#" class="btn btn_small">Подать заявку</a
            ><a href="#" class="btn btn_small btn_opacity">Подробнее</a>
          </div>
        </div>
        <div class="event-block__nameplates">
          <div class="label label_cat">
            <svg class="w24 fill_none">
              <use
                xlink:href="@/assets/imgs/sprite.symbol.svg#category_football"
              ></use>
            </svg>
            <span>Футбол</span>
            <!-- <svg class="w24 fill_none">
              <use xlink:href="@/assets/imgs/sprite.symbol.svg#category_cultural"></use>
            </svg> -->
            <!-- <svg class="w24 fill_none">
              <use xlink:href="@/assets/imgs/sprite.symbol.svg#category_hockey"></use>
            </svg> -->
            <!-- <svg class="w24 fill_none">
              <use xlink:href="@/assets/imgs/sprite.symbol.svg#category_sport"></use>
            </svg> -->
          </div>
          <div class="label label_text">Идёт набор</div>
        </div>
      </div>
    </div>
    <div class="event-block">
      <div class="event-block__wrapper">
        <div class="event-block__info">
          <div class="event-block__title">
            Мир чемпионат РПЛ ФК “Урал” - ФК “Зенит”
          </div>
          <div class="event-block__descr">
            We’re looking for an experienced engineering manager to join our
            team.
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
          <div class="events_item_btns">
            <a href="#" class="btn btn_small">Подать заявку</a
            ><a href="#" class="btn btn_small btn_opacity">Подробнее</a>
          </div>
        </div>
        <div class="event-block__nameplates">
          <div class="label label_cat">
            <svg class="w24 fill_none">
              <use
                xlink:href="@/assets/imgs/sprite.symbol.svg#category_football"
              ></use>
            </svg>
            <span>Футбол</span>
            <!-- <svg class="w24 fill_none">
              <use xlink:href="@/assets/imgs/sprite.symbol.svg#category_cultural"></use>
            </svg> -->
            <!-- <svg class="w24 fill_none">
              <use xlink:href="@/assets/imgs/sprite.symbol.svg#category_hockey"></use>
            </svg> -->
            <!-- <svg class="w24 fill_none">
              <use xlink:href="@/assets/imgs/sprite.symbol.svg#category_sport"></use>
            </svg> -->
          </div>
          <div class="label label_text">Идёт набор</div>
        </div>
      </div>
    </div>
    <div class="event-block">
      <div class="event-block__wrapper">
        <div class="event-block__info">
          <div class="event-block__title">
            Мир чемпионат РПЛ ФК “Урал” - ФК “Зенит”
          </div>
          <div class="event-block__descr">
            We’re looking for an experienced engineering manager to join our
            team.
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
          <div class="events_item_btns">
            <a href="#" class="btn btn_small">Подать заявку</a
            ><a href="#" class="btn btn_small btn_opacity">Подробнее</a>
          </div>
        </div>
        <div class="event-block__nameplates">
          <div class="label label_cat">
            <svg class="w24 fill_none">
              <use
                xlink:href="@/assets/imgs/sprite.symbol.svg#category_football"
              ></use>
            </svg>
            <span>Футбол</span>
            <!-- <svg class="w24 fill_none">
              <use xlink:href="@/assets/imgs/sprite.symbol.svg#category_cultural"></use>
            </svg> -->
            <!-- <svg class="w24 fill_none">
              <use xlink:href="@/assets/imgs/sprite.symbol.svg#category_hockey"></use>
            </svg> -->
            <!-- <svg class="w24 fill_none">
              <use xlink:href="@/assets/imgs/sprite.symbol.svg#category_sport"></use>
            </svg> -->
          </div>
          <div class="label label_text">Идёт набор</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import addDays from "date-fns/addDays";
const selectedDate = ref(new Date());

const isMultiCalendar = ref("");

// Функция для определения текущего разрешения экрана
const updateResolution = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    isMultiCalendar.value = false;
  } else {
    isMultiCalendar.value = true;
  }
};

// Вызываем функцию при монтировании компонента и добавляем обработчик изменения размера окна
onMounted(() => {
  updateResolution();
  window.addEventListener("resize", updateResolution);
});

// Удаляем обработчик изменения размера окна при удалении компонента
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateResolution);
});

const highlightedDates = ref([
  addDays(new Date(), 0),
  addDays(new Date(), 2),
  addDays(new Date(), 3),
  addDays(new Date(), 12),
  addDays(new Date(), 25),
]);

const handleDate = (modelData) => {
  console.log(modelData);
  selectedDate.value = modelData;
};
</script>

<style lang="scss">
.events-calendar {
  justify-content: center;
  .dp__input_wrap,
  .dp__action_row {
    display: none !important;
    width: 0;
  }

  .dp__main {
    flex-direction: column;
    gap: 0px !important;

    [disabled] {
      width: 100%;
    }
  }

  .dp__flex_display {
    justify-content: center;
    width: 100%;
    gap: 100px;

    & > div {
      width: fit-content;
    }
  }

  .dp__menu_inner {
    padding: 0 !important;
  }

  .dp__menu {
    border: none !important;
  }

  .dp__calendar_header_item {
    padding: 0px !important;
    padding-top: 10px !important;
    width: 40px !important;
    height: 40px !important;
    color: #000;
    font-family: Inter;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  .dp__calendar_header {
    gap: 4px;
  }

  .dp__calendar_row {
    margin: 4px 0 !important;
    gap: 4px;
  }

  .dp__calendar_item {
    width: 40px !important;
    height: 40px !important;
  }

  .dp__cell_inner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px !important;
    width: 100% !important;
    height: 100% !important;
    color: #000;
    font-family: Inter;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }

  .dp__cell_offset {
    opacity: 0;
    visibility: hidden;
  }

  .dp__calendar_header_separator {
    display: none;
  }

  .dp__btn.dp__month_year_select {
    color: #000;
    width: fit-content !important;
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:last-child {
      display: none;
    }
  }

  .dp__month_year_wrap {
    width: fit-content !important;
  }

  .dp__month_year_row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
  }

  .dp--arrow-btn-nav {
    cursor: pointer;
    border-radius: 10px;
    background-color: #d0d5dd !important;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
    width: 32px !important;
    height: 32px !important;

    .dp__inner_nav {
      width: 100%;
      height: 100%;
      background-color: #d0d5dd !important;
    }
  }

  .dp__today {
    border: none !important;
    color: #ef723b;
  }

  .dp__cell_inner {
    border-radius: 50% !important;
  }

  .dp__active_date {
    background-color: #ef723b !important;
    box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 1);
    color: #fff;
  }

  .dp__cell_highlight {
    background-color: #ef723b !important;
    color: #fff;
  }

  .dp__cell_inner.dp__cell_highlight.dp__today {
    color: #ef723b;
    box-shadow: none;
    background-color: #fff !important;
  }

  .dp__overlay_cell_active {
    background-color: #ef723b !important;
  }

  .dp__overlay_cell {
    font-weight: 600;
  }
}
</style>
