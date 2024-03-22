<template>
  <div class="filter">
    <div class="label_wrapper">
      <div class="label_title">Тип мероприятия</div>
      <select class="category_select select" name="category">
        <option value="Все">Все</option>
        <option value="Футбол">Футбол</option>
        <option value="Хоккей">Хоккей</option>
        <option value="Другие спортивные мероприятия">
          Другие спортивные мероприятия
        </option>
        <option value="Культурно-массовые мероприятия">
          Культурно-массовые мероприятия
        </option>
      </select>
    </div>
    <div class="label_wrapper">
      <div class="label_title">Дата</div>
      <div class="date_input date_selection_item">
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
      </div>
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

<script setup></script>

<style lang="scss">
.events_col {
  width: 50% !important;
}
</style>
