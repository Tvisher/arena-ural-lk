<template>
  <h2 class="lk-content__title font_code">Настройка личного кабинета</h2>
  <form class="user-settings-form">
    <div class="form_input_row three-cols">
      <label class="form_input_group">
        <span class="form_input_name">Имя</span>
        <span class="form_input_wrapper">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            class="form_input"
            value="Ольга"
          />
          <span class="text_error">Заполните поле</span>
        </span>
      </label>
      <label class="form_input_group">
        <span class="form_input_name">Фамилия</span>
        <span class="form_input_wrapper">
          <input
            type="text"
            name="lastName"
            placeholder="Ваша фамилия"
            class="form_input"
            value="Иванова"
          />
          <span class="text_error">Заполните поле</span>
        </span>
      </label>
      <label class="form_input_group">
        <span class="form_input_name">Отчество</span>
        <span class="form_input_wrapper">
          <input
            type="text"
            name="lastName"
            placeholder="Ваша фамилия"
            class="form_input"
            value="Ивановна"
          />
          <span class="text_error">Заполните поле</span>
        </span>
      </label>
    </div>
    <div class="form_input_row one-col">
      <label class="form_input_group" style="margin-bottom: 6px">
        <span class="form_input_name">Дата рождения</span>
        <!-- <span class="form_input_wrapper">
          <div class="label-has-ico">
            <div class="ico">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3333 1.66675V5.00008M5.66667 1.66675V5.00008M1.5 8.33342H16.5M3.16667 3.33341H14.8333C15.7538 3.33341 16.5 4.07961 16.5 5.00008V16.6667C16.5 17.5872 15.7538 18.3334 14.8333 18.3334H3.16667C2.24619 18.3334 1.5 17.5872 1.5 16.6667V5.00008C1.5 4.07961 2.24619 3.33341 3.16667 3.33341Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              name="name"
              placeholder=""
              class="form_input"
              value="10.20.2024"
              readonly
            />
          </div>
        </span> -->
        <VueDatePicker
          v-model="selectedDate"
          class="my-events-calendar user-settings-calendar"
          locale="ru"
          auto-apply
          month-name-format="long"
          :enable-time-picker="false"
          :month-change-on-scroll="false"
          placeholder="ДД.ММ.ГГГГ"
          :format="dateFormat"
          :max-date="new Date()"
        >
        </VueDatePicker>
      </label>
    </div>
    <hr />
    <div class="form_input_row">
      <label class="form_input_group">
        <span class="form_input_name">Email</span>
        <span class="form_input_wrapper">
          <div class="label-has-ico">
            <div class="ico">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3332 5.00004C18.3332 4.08337 17.5832 3.33337 16.6665 3.33337H3.33317C2.4165 3.33337 1.6665 4.08337 1.6665 5.00004M18.3332 5.00004V15C18.3332 15.9167 17.5832 16.6667 16.6665 16.6667H3.33317C2.4165 16.6667 1.6665 15.9167 1.6665 15V5.00004M18.3332 5.00004L9.99984 10.8334L1.6665 5.00004"
                  stroke="#667085"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Ваш Email"
              class="form_input"
              value="olivia@untitledui.ru"
            />
          </div>
          <span class="text_error">Заполните поле</span>
        </span>
      </label>
      <label class="form_input_group">
        <span class="form_input_name">Телефон</span>
        <span class="form_input_wrapper">
          <div class="label-has-ico">
            <div class="ico">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2366_4025)">
                  <path
                    d="M18.3332 14.1V16.6C18.3341 16.8321 18.2866 17.0618 18.1936 17.2745C18.1006 17.4871 17.9643 17.678 17.7933 17.8349C17.6222 17.9918 17.4203 18.1113 17.2005 18.1856C16.9806 18.26 16.7477 18.2876 16.5165 18.2667C13.9522 17.9881 11.489 17.1118 9.32486 15.7084C7.31139 14.4289 5.60431 12.7219 4.32486 10.7084C2.91651 8.53438 2.04007 6.0592 1.76653 3.48337C1.7457 3.25293 1.77309 3.02067 1.84695 2.80139C1.9208 2.58211 2.03951 2.38061 2.1955 2.20972C2.3515 2.03883 2.54137 1.9023 2.75302 1.80881C2.96468 1.71532 3.19348 1.66692 3.42486 1.66671H5.92486C6.32928 1.66273 6.72136 1.80594 7.028 2.06965C7.33464 2.33336 7.53493 2.69958 7.59153 3.10004C7.69705 3.9001 7.89274 4.68565 8.17486 5.44171C8.28698 5.73998 8.31125 6.06414 8.24478 6.37577C8.17832 6.68741 8.02392 6.97347 7.79986 7.20004L6.74153 8.25837C7.92783 10.3447 9.65524 12.0721 11.7415 13.2584L12.7999 12.2C13.0264 11.976 13.3125 11.8216 13.6241 11.7551C13.9358 11.6887 14.2599 11.7129 14.5582 11.825C15.3143 12.1072 16.0998 12.3029 16.8999 12.4084C17.3047 12.4655 17.6744 12.6694 17.9386 12.9813C18.2029 13.2932 18.3433 13.6914 18.3332 14.1Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2366_4025">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <input
              ref="phoneField"
              class="form_input"
              v-model="userPhone"
              placeholder="Ваш телефон"
              maxlength="16"
            />
          </div>
          <span class="text_error">Заполните поле</span>
        </span>
      </label>
    </div>
    <div class="form_input_row one-col">
      <label class="form_input_group" style="margin-bottom: 6px">
        <span class="form_input_name">Паспорт болельщика</span>
        <span class="form_input_wrapper">
          <input
            type="text"
            name="name"
            placeholder="Паспорт болельщика"
            class="form_input"
            value="2983"
          />
        </span>
      </label>
    </div>
    <div class="some-message">
      инструкция по получению паспорта болельщика доступна
      <a href="javascript:void(0)">"тут"</a>
    </div>
    <hr />
    <div class="form_input_row three-cols">
      <label class="form_input_group">
        <span class="form_input_name">Старый пароль</span>
        <span class="form_input_wrapper">
          <input
            type="text"
            name="name"
            placeholder="***************"
            class="form_input"
            value="***************"
          />
          <span class="text_error">Заполните поле</span>
        </span>
      </label>
      <label class="form_input_group">
        <span class="form_input_name">Новый пароль</span>
        <span class="form_input_wrapper">
          <input
            type="text"
            name="lastName"
            placeholder="***************"
            class="form_input"
            value="***************"
          />
          <span class="text_error">Заполните поле</span>
        </span>
      </label>
      <label class="form_input_group">
        <span class="form_input_name">Повторите новый пароль</span>
        <span class="form_input_wrapper">
          <input
            type="text"
            name="lastName"
            placeholder="***************"
            class="form_input"
            value="***************"
          />
          <span class="text_error">Заполните поле</span>
        </span>
      </label>
    </div>
    <div class="form_input_row one-col">
      <label class="form_input_group" style="margin-bottom: 10px">
        <span class="form_input_name">Ссылка Вконтакте</span>
        <span class="form_input_wrapper">
          <input
            type="text"
            name="name"
            placeholder=""
            class="form_input"
            value="vk.com"
          />
        </span>
      </label>
    </div>
    <div class="form_input_row one-col">
      <label class="form_input_group" style="margin-bottom: 10px">
        <span class="form_input_name">Ссылка Одноклассники</span>
        <span class="form_input_wrapper">
          <input
            type="text"
            name="name"
            placeholder=""
            class="form_input"
            value="vk.com"
          />
        </span>
      </label>
    </div>
    <div class="form_input_row one-col">
      <label class="form_input_group" style="margin-bottom: 0px">
        <span class="form_input_name">Ссылка Телеграмм</span>
        <span class="form_input_wrapper">
          <input
            type="text"
            name="name"
            placeholder=""
            class="form_input"
            value="vk.com"
          />
        </span>
      </label>
    </div>
    <hr />
    <AddUserImage />
    <div class="form_input_row one-col">
      <label class="form_input_group">
        <span class="form_input_name">О себе</span>
        <span class="form_input_wrapper">
          <textarea
            name="message"
            class="form_input form_textarea"
            placeholder="Немного о себе"
          ></textarea>
          <span class="text_error">Заполните поле</span>
        </span>
        <span class="form_input_descr">275 символов</span>
      </label>
    </div>
    <hr />
    <div class="settings-form__footer">
      <a
        href="#"
        class="btn btn_icon"
        style="background-color: #0077ff; color: #fff"
      >
        <svg
          width="28"
          height="17"
          viewBox="0 0 28 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2828 16.8172C6.1661 16.8172 0.966178 10.5672 0.749512 0.167236H5.31618C5.46618 7.80057 8.83276 11.0339 11.4994 11.7006V0.167236H15.7996V6.75057C18.4329 6.46724 21.1993 3.46724 22.1326 0.167236H26.4327C25.716 4.2339 22.716 7.2339 20.5827 8.46724C22.716 9.46724 26.1328 12.0839 27.4328 16.8172H22.6993C21.6827 13.6506 19.1496 11.2006 15.7996 10.8672V16.8172H15.2828Z"
            fill="white"
          />
        </svg>
        <span>Привязать</span>
      </a>
      <div class="events_item_btns">
        <!-- <router-link
          class="btn btn_white"
          :to="{ name: 'TabItem', params: { tabId: 'calendar' } }"
        >
          Отменить
        </router-link> -->
        <button
          type="button"
          class="btn btn_white"
          @click="this.$router.back()"
        >
          Назад
        </button>
        <a href="#" class="btn">Сохранить</a>
      </div>
    </div>
  </form>
</template>
<script setup>
import { ref } from "vue";
import AddUserImage from "@/components/AddUserImage.vue";
import { useIMask } from "vue-imask";

const selectedDate = ref("");
const userPhone = ref("");

const dateFormat = (date) => {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const { el: phoneField } = useIMask({
  mask: "+{7}(000)000-00-00",
});
</script>

<style lang="scss">
.user-settings-form {
  .dp__menu_inner::before {
    display: none !important;
  }

  .user-settings-calendar .dp__input {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .btn {
    width: fit-content;
  }
  .user-settings-form {
    padding-bottom: 20px;
  }
  .settings-form__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .events_item_btns {
    padding: 0;
  }
  .form_input_descr {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
  .label-has-ico {
    position: relative;
    .form_input {
      padding-left: 42px;
    }
    .ico {
      position: absolute;
      left: 14px;
      width: 20px;
      height: 20px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
    }
  }
  .form_input_name {
    color: #344054;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 6px;
    display: block;
  }
  .three-cols {
    .form_input_group {
      width: calc(33.33% - 16px) !important;
    }
  }
  .one-col {
    .form_input_group {
      width: 100% !important;
    }
  }

  .some-message {
    color: #475467;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    a {
      color: #ef723b;
      font-size: 14px;
      line-height: 20px;
      text-decoration-line: underline;
    }
  }
  hr {
    margin: 20px 0;
    opacity: 0.2;
  }
}

@media (max-width: 576px) {
  .events_item_btns {
    width: 100%;
  }
  .settings-form__footer {
    flex-direction: column;
    gap: 20px;
    .btn {
      width: 100% !important;
      margin: 0;
    }
  }
}
</style>
