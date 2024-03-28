<template>
  <div class="lk-user__wrapper">
    <div class="lk-user">
      <div class="user__image-wrapper">
        <div class="user__image">
          <img
            src="https://st4.depositphotos.com/6903990/27898/i/450/depositphotos_278981062-stock-photo-beautiful-young-woman-clean-fresh.jpg)"
            alt=""
          />
        </div>
      </div>
      <div class="user__title">Иванова Ольга Ивановна</div>
      <div class="user__fan-id">
        <div class="fan-id__name">
          <svg class="w20 fill_none">
            <use xlink:href="@/assets/imgs/sprite.symbol.svg#passport"></use>
          </svg>
          Паспорт болельщика
        </div>
        <div class="fan-id__value">№ 3443949403</div>
      </div>
      <div class="user__id">ID:35446</div>

      <div class="info-row">
        <div class="info-row__name">Дата рождения:</div>
        <div class="info-row__value">12.12.1991</div>
      </div>
      <div class="info-row">
        <div class="info-row__name">Возраст:</div>
        <div class="info-row__value">30 лет</div>
      </div>
      <div class="info-row">
        <div class="info-row__name">Номер телефона:</div>
        <div class="info-row__value">+7 843 499 12 05</div>
      </div>
      <div class="info-row">
        <div class="info-row__name">E-mail:</div>
        <div class="info-row__value">olivia@untitledui.ru</div>
      </div>
      <div class="info-row">
        <div class="info-row__name">Соцсети:</div>
        <div class="info-row__value socials-list">
          <a href="javascript:void(0)" class="social-item">
            <img src="@/assets/imgs/ok.svg" alt="" />
          </a>
          <a href="javascript:void(0)" class="social-item">
            <img src="@/assets/imgs/telegram.svg" alt="" />
          </a>
          <a href="javascript:void(0)" class="social-item">
            <img src="@/assets/imgs/whatsapp.svg" alt="" />
          </a>
          <a href="javascript:void(0)" class="social-item">
            <img src="@/assets/imgs/vk.svg" alt="" />
          </a>
        </div>
      </div>
      <hr />
      <div class="lk-user__btns">
        <router-link class="btn" :to="{ name: 'UserSettings' }">
          Редактировать
        </router-link>
        <!-- <button class="btn">Редактировать</button> -->
        <router-link
          class="btn btn_some-ghost"
          :to="{ name: 'NotificationSettings' }"
        >
          Настройка уведомлений
        </router-link>
        <!-- <button class="btn btn_some-ghost">Настройка уведомлений</button> -->
      </div>
      <div class="user-education-block">
        <div class="education-block__wrapper">
          <div class="education-block__ico"></div>
          <!-- <div class="education-block__title">Обучение пройдено!</div> -->
          <div class="education-block__title">Пройдите обучение!</div>
        </div>
        <button class="btn btn_some-ghost">Пройти обучение</button>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style></style>
