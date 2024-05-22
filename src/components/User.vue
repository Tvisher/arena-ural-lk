<template>
  <div class="lk-user">
    <div class="user__image-wrapper">
      <div class="user__image">
        <img v-if="userData.photo" :src="userData.photo" alt="" />
      </div>
    </div>
    <div class="user__title">
      {{ userData.lastname }} {{ userData.name }} {{ userData.patronymic }}
    </div>
    <div class="user__fan-id">
      <div class="fan-id__name">
        <svg class="w20 fill_none">
          <use xlink:href="@/assets/imgs/sprite.symbol.svg#passport"></use>
        </svg>
        Паспорт болельщика
      </div>
      <div v-if="userData.fanID" class="fan-id__value">
        № {{ userData.fanID }}
      </div>
      <div v-else class="fan-id__value">не указан</div>
    </div>
    <div class="user__id">ID:{{ userData.userId }}</div>

    <div class="info-row">
      <div class="info-row__name">Дата рождения:</div>
      <div class="info-row__value" v-if="userData.birthday">
        {{ userData.birthday }}
      </div>
      <div class="info-row__value" v-else>Нет данных</div>
    </div>
    <div class="info-row">
      <div class="info-row__name">Возраст:</div>
      <div class="info-row__value" v-if="userData.birthday">
        {{ userAge }} лет
      </div>
      <div class="info-row__value" v-else>Нет данных</div>
    </div>
    <div class="info-row">
      <div class="info-row__name">Номер телефона:</div>
      <div class="info-row__value" v-if="userData.phone">
        {{ userData.phone }}
      </div>
      <div class="info-row__value" v-else>Нет данных</div>
    </div>
    <div class="info-row">
      <div class="info-row__name">E-mail:</div>
      <div class="info-row__value">{{ userData.email }}</div>
    </div>
    <div class="info-row" v-if="isUserHasSocials">
      <div class="info-row__name">Соцсети:</div>
      <div class="info-row__value socials-list">
        <a
          :href="userData.socials.ok"
          target="_blank"
          class="social-item"
          v-if="userData.socials.ok"
        >
          <img src="@/assets/imgs/ok.svg" alt="" />
        </a>
        <a
          :href="userData.socials.tg"
          target="_blank"
          class="social-item"
          v-if="userData.socials.tg"
        >
          <img src="@/assets/imgs/telegram.svg" alt="" />
        </a>
        <a
          :href="userData.socials.whatsapp"
          target="_blank"
          class="social-item"
          v-if="userData.socials.whatsapp"
        >
          <img src="@/assets/imgs/whatsapp.svg" alt="" />
        </a>
        <a
          :href="userData.socials.vk"
          target="_blank"
          class="social-item"
          v-if="userData.socials.vk"
        >
          <img src="@/assets/imgs/vk.svg" alt="" />
        </a>
      </div>
    </div>
    <hr />
    <div class="lk-user__btns" style="flex-direction: column">
      <router-link class="btn" :to="{ name: 'UserSettings' }">
        Редактировать профиль
      </router-link>
      <a href="/forgotpass/" class="btn btn_white">Сменить пароль</a>
    </div>
    <div
      class="user-education-block"
      :class="{ passed: userData.trainingСompleted }"
    >
      <div class="education-block__wrapper">
        <div class="education-block__ico"></div>
        <div class="education-block__title" v-if="userData.trainingСompleted">
          Обучение пройдено!
        </div>
        <div class="education-block__title" v-else>Пройдите обучение!</div>
      </div>
      <a
        href="https://arena-ural.ru/training/"
        target="_blank"
        class="btn btn_some-ghost"
        v-if="!userData.trainingСompleted"
        >Пройти обучение</a
      >
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useLkData } from "@/stores/LkData";
const LkDataStore = useLkData();
const userData = LkDataStore.userData;
console.log(userData.trainingСompleted);

function calculateAge(birthday) {
  const parts = birthday.split(".");
  const birthDate = new Date(parts[2], parts[1] - 1, parts[0]);
  const currentDate = new Date();
  const differenceInMilliseconds = currentDate - birthDate;
  const age = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  );
  return age;
}
const userAge = calculateAge(userData.birthday);
const isUserHasSocials = computed(
  () =>
    userData.socials.vk ||
    userData.socials.ok ||
    userData.socials.whatsapp ||
    userData.socials.tg
);
</script>

<style scoped>
.btn_some-ghost {
  width: 100%;
}
</style>
