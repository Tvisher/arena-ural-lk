<template>
  <div class="unsubscribe_modal" @click="closeModal($event)">
    <div class="unsubscribe_modal__content">
      <div class="unsubscribe_modal__close" data-close></div>
      <div class="unsubscribe_modal__ico">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="4" width="48" height="48" rx="24" fill="#FFD3C1" />
          <rect
            x="4"
            y="4"
            width="48"
            height="48"
            rx="24"
            stroke="#FFF5F1"
            stroke-width="8"
          />
          <path
            d="M31 25L25 31M25 25L31 31M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z"
            stroke="#EF723B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="unsubscribe_modal__inner" v-if="props.eventData.date_mess">
        <div class="unsubscribe_modal__title">Причина отмены записи</div>
        <div class="unsubscribe_modal__descr">Укажите причину отказа</div>
        <textarea
          class="unsubscribe_modal__field"
          placeholder="Причина"
          v-model.trim="reasonMessage"
        ></textarea>
        <div class="unsubscribe_modal__btns">
          <button type="button" class="btn btn_white" data-close>
            Отменить
          </button>
          <button type="button" class="btn" @click="getUnsubscribe($event)">
            Отменить запись
          </button>
        </div>
      </div>

      <div class="unsubscribe_modal__inner" v-else>
        <div class="unsubscribe_modal__title">
          Нельзя отписаться от мероприятия
        </div>
        <div class="unsubscribe_modal__descr">
          До мероприятия осталось менее 3-х суток. Для отмены записи свяжитесь с
          куратором. У вас должна быть веская причина или вы будите добавлены в
          черный список
        </div>

        <div class="unsubscribe_modal__title _two-m">
          Свяжитесь с куратором мероприятия
        </div>
        <div class="event-curator">
          <div
            class="event-curator__img"
            :style="{ backgroundImage: `url(${props.eventData.admin.photo})` }"
          ></div>
          <div class="event-curator__info">
            <div class="event-curator__name">
              {{ props.eventData.admin.fio }}
            </div>
            <div class="event-curator__descr">Организатор</div>
          </div>
        </div>
        <a
          v-if="props.eventData.admin.phone"
          :href="`tel:${props.eventData.admin.phone}`"
          class="event-curator__phone"
          >{{ props.eventData.admin.phone }}</a
        >
        <a
          v-if="props.eventData.admin.email"
          :href="`mailto:${props.eventData.admin.email}`"
          class="event-curator__email"
          >{{ props.eventData.admin.email }}</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";

import { ref } from "vue";

import { useLkData } from "@/stores/LkData";
const LkDataStore = useLkData();
const userId = LkDataStore.userData.userId;

const props = defineProps(["eventData"]);
const emit = defineEmits(["closeModal"]);

const reasonMessage = ref("");

const closeModal = (e) => {
  const target = e.target;

  if (
    (target.closest(".unsubscribe_modal") &&
      !target.closest(".unsubscribe_modal__content")) ||
    target.closest("[data-close]")
  ) {
    emit("closeModal");
  }
};

const getUnsubscribe = (e) => {
  const btn = e.target;
  btn.classList.add("sending");
  console.log({
    userId,
    reasonMessage: reasonMessage.value,
    evendId: props.eventData.ID,
  });

  axios
    .post(
      "/wp-content/themes/sp-theme-master/ajax/user_ungig.php",
      JSON.stringify({
        userId,
        reasonMessage: reasonMessage.value,
        evendId: props.eventData.ID,
      })
    )
    .then((res) => {
      btn.classList.remove("sending");
      emit("closeModal", "showBottomModal");
    })
    .catch((error) => {
      console.log("Ошибка!!!", error);
    });
};
</script>

<style lang="scss">
.event-curator__phone,
.event-curator__email {
  color: #475467;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  display: flex;
  align-items: center;
  &::before {
    margin-right: 8px;
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
.event-curator__phone {
  margin-bottom: 11px;
}
.event-curator__phone::before {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_2361_2167)'%3e%3cpath d='M18.3332 14.1004V16.6004C18.3341 16.8325 18.2866 17.0622 18.1936 17.2749C18.1006 17.4875 17.9643 17.6784 17.7933 17.8353C17.6222 17.9922 17.4203 18.1116 17.2005 18.186C16.9806 18.2603 16.7477 18.288 16.5165 18.2671C13.9522 17.9884 11.489 17.1122 9.32486 15.7087C7.31139 14.4293 5.60431 12.7222 4.32486 10.7087C2.91651 8.53474 2.04007 6.05957 1.76653 3.48374C1.7457 3.2533 1.77309 3.02104 1.84695 2.80176C1.9208 2.58248 2.03951 2.38098 2.1955 2.21009C2.3515 2.0392 2.54137 1.90266 2.75302 1.80917C2.96468 1.71569 3.19348 1.66729 3.42486 1.66707H5.92486C6.32928 1.66309 6.72136 1.80631 7.028 2.07002C7.33464 2.33373 7.53493 2.69995 7.59153 3.10041C7.69705 3.90046 7.89274 4.68601 8.17486 5.44207C8.28698 5.74034 8.31125 6.0645 8.24478 6.37614C8.17832 6.68778 8.02392 6.97383 7.79986 7.20041L6.74153 8.25874C7.92783 10.345 9.65524 12.0724 11.7415 13.2587L12.7999 12.2004C13.0264 11.9764 13.3125 11.8219 13.6241 11.7555C13.9358 11.689 14.2599 11.7133 14.5582 11.8254C15.3143 12.1075 16.0998 12.3032 16.8999 12.4087C17.3047 12.4658 17.6744 12.6697 17.9386 12.9817C18.2029 13.2936 18.3433 13.6917 18.3332 14.1004Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_2361_2167'%3e%3crect width='20' height='20' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e ");
}
.event-curator__email::before {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.3327 4.99967C18.3327 4.08301 17.5827 3.33301 16.666 3.33301H3.33268C2.41602 3.33301 1.66602 4.08301 1.66602 4.99967M18.3327 4.99967V14.9997C18.3327 15.9163 17.5827 16.6663 16.666 16.6663H3.33268C2.41602 16.6663 1.66602 15.9163 1.66602 14.9997V4.99967M18.3327 4.99967L9.99935 10.833L1.66602 4.99967' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e ");
}
.event-curator {
  display: flex;
  margin-bottom: 11px;
}
.event-curator__name {
  color: #475467;
  font-size: 18px;
  font-weight: 700;
  line-height: 100%;
}
.event-curator__descr {
  color: #475467;
  font-size: 16px;
  font-weight: 400;
  line-height: 110%;
}
.event-curator__img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-right: 6px;
  background-color: rgb(99, 97, 97);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.unsubscribe_modal {
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}

.unsubscribe_modal__content {
  position: relative;
  background-color: #fff;
  padding: 24px;
  max-width: 400px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
}

.unsubscribe_modal__close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L6 18M6 6L18 18' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e ");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.unsubscribe_modal__ico {
  width: 48px;
  height: 48px;
  margin-bottom: 20px;

  img,
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}

.unsubscribe_modal__title {
  color: #101828;
  font-size: 18px;
  font-weight: 600;
  line-height: 155%;
  margin-bottom: 8px;
  &._two-m {
    margin: 32px 0;
  }
}
.unsubscribe_modal__descr {
  color: #475467;
  font-size: 14px;
  font-weight: 400;
  line-height: 143%;
  margin-bottom: 20px;
}

.unsubscribe_modal__field {
  margin-bottom: 32px;
  width: 100%;
  padding: 14px 14px;
  resize: none;
  height: 80px;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}

.unsubscribe_modal__btns {
  display: flex;
  gap: 12px;
  justify-content: space-between;
  flex-wrap: wrap;
  .btn {
    width: calc(50% - 6px);
    font-size: 15px;
  }
}
</style>
