import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "@/router/router";
import VueSelect from "vue-select";
import '@vuepic/vue-datepicker/dist/main.css';
import "./assets/scss/common.scss";
import './assets/scss/lk.scss'
import App from './App.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
createApp(App)
    .component("v-select", VueSelect)
    .component('VueDatePicker', VueDatePicker)
    .use(router)
    .use(createPinia())
    .mount('#lk-app')
