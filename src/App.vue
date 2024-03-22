<template>
  <header class="header">
    <div class="container">
      <div class="header_row">
        <a href="/" class="logo">
          <img src="@/assets/imgs/logo.svg" alt="" />
          <img src="@/assets/imgs/logo_white.svg" alt="" />
        </a>
        <nav class="menu">
          <ul>
            <li><a href="events.html">Мероприятия</a></li>
            <li><a href="training.html">Обучение</a></li>
            <li><a href="about.html">О компании</a></li>
            <li><a href="#">Документы</a></li>
          </ul>
        </nav>
        <a href="#" class="btn btn_small">Личный кабинет</a>
        <div class="mobile_menu_btn"><span></span></div>
      </div>
      <div class="mobile_menu">
        <nav class="menu">
          <ul>
            <li><a href="events.html">Мероприятия</a></li>
            <li><a href="training.html">Обучение</a></li>
            <li><a href="about.html">О компании</a></li>
            <li><a href="#">Документы</a></li>
          </ul>
        </nav>
        <div class="social_list">
          <a href="#">
            <img src="@/assets/imgs/telegram.svg" alt="" />
          </a>
          <a href="#">
            <img src="@/assets/imgs/vk.svg" alt="" />
          </a>
          <a href="#">
            <img src="@/assets/imgs/whatsap.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </header>
  <div class="container">
    <div class="lk-template">
      <div class="lk-content">
        <ul class="breadcrumb">
          <li class="breadcrumb_item">
            <a href="/" class="breadcrumb_link">Главная</a>
            <span class="breadcrumb_pipe"></span>
          </li>
          <li class="breadcrumb_item">
            <span class="breadcrumb_link">Личный кабинет</span>
          </li>
        </ul>
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
      <User />
    </div>
  </div>

  <footer class="footer">
    <div class="container">
      <div class="footer_top">
        <a href="/" class="logo"><img src="@/assets/imgs/logo.svg" alt="" /></a>
        <div class="footer_top_right">
          <nav class="menu">
            <ul>
              <li><a href="#">Мероприятия</a></li>
              <li><a href="#">Обучение</a></li>
              <li><a href="#">О компании</a></li>
              <li><a href="#">Правила</a></li>
            </ul>
          </nav>
          <a href="#" class="link">Политика конфиденциальности</a>
        </div>
      </div>
      <div class="footer_bottom">
        <div>© ООО «Арена-Урал», 2024</div>
        <div>Сделано в <a class="link">MediaLine</a></div>
        <div class="footer_bottom_link">
          <a href="tel:+78009001000">8 800 900 10 00</a>
          <a href="mailto:mail@mail.com">mail@mail.com</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import User from "@/components/User.vue";
</script>

<style></style>
