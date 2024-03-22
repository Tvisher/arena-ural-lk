<template>
  <h2 class="lk-content__title font_code">Настройка уведомлений</h2>
  <div class="lk-content__descr">
    Выберите те категории уведемолений, которые вы хотите получать
  </div>
  <div class="categories_list">
    <div class="categories_col">
      <input
        type="checkbox"
        name="categories_type"
        value="1"
        checked="checked"
      />
      <div class="categories_item">
        <div class="categories_item_icon">
          <svg class="w16 fill_none stroke_none">
            <use
              xlink:href="@/assets/imgs/sprite.symbol.svg#category_football"
            ></use>
          </svg>
        </div>
        <div>
          <div class="categories_item_title">Футбол</div>
          <div class="categories_item_text">
            Все мероприятия, связанные с футбольными матчами и событиями.
          </div>
        </div>
        <div class="categories_item_dot"></div>
      </div>
    </div>
    <div class="categories_col">
      <input type="checkbox" name="categories_type" value="1" />
      <div class="categories_item">
        <div class="categories_item_icon">
          <svg class="w16 fill_none stroke_none">
            <use
              xlink:href="@/assets/imgs/sprite.symbol.svg#category_hockey"
            ></use>
          </svg>
        </div>
        <div>
          <div class="categories_item_title">Хоккей</div>
          <div class="categories_item_text">
            Игры и мероприятия, связанные с хоккеем.
          </div>
        </div>
        <div class="categories_item_dot"></div>
      </div>
    </div>
    <div class="categories_col">
      <input type="checkbox" name="categories_type" value="1" />
      <div class="categories_item">
        <div class="categories_item_icon">
          <svg class="w16 fill_none stroke_none">
            <use
              xlink:href="@/assets/imgs/sprite.symbol.svg#category_sport"
            ></use>
          </svg>
        </div>
        <div>
          <div class="categories_item_title">Другие спортивные мероприятия</div>
          <div class="categories_item_text">
            Мероприятия, связанные с другими видами спорта.
          </div>
        </div>
        <div class="categories_item_dot"></div>
      </div>
    </div>
    <div class="categories_col">
      <input type="checkbox" name="categories_type" value="1" />
      <div class="categories_item">
        <div class="categories_item_icon">
          <svg class="w16 fill_none stroke_none">
            <use
              xlink:href="@/assets/imgs/sprite.symbol.svg#category_cultural"
            ></use>
          </svg>
        </div>
        <div>
          <div class="categories_item_title">
            Культурно-массовые мероприятия
          </div>
          <div class="categories_item_text">
            Фестивали, концерты, выставки и другие культурные события.
          </div>
        </div>
        <div class="categories_item_dot"></div>
      </div>
    </div>
  </div>
  <div class="events_item_btns">
    <router-link
      class="btn btn_small btn_white"
      :to="{ name: 'TabItem', params: { tabId: 'calendar' } }"
    >
      Отменить
    </router-link>
    <a href="javascript:void(0)" class="btn btn_small">Изменить</a>
  </div>
</template>
<script setup></script>

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
