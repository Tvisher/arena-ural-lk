import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

import responseData from '@/assets/testData.json';
const userId = document.querySelector('#lk-app').dataset.user;
export const useLkData = defineStore("LkData", () => {
    // state refs
    const userData = ref({
        name: '',
        lastname: '',
        patronymic: '',
        phone: '',
        email: '',
        birthday: '',
        fanID: '',
        userId: '',
        userInfo: '',
        photo: '',
        socials: {
            ok: '',
            tg: '',
            whatsupp: '',
            vk: ''
        }
    })
    // getters
    const allEvents = ref([])

    // Actions
    const setApplicationData = (data) => {
        userData.value.name = data.first_name;
        userData.value.lastname = data.last_name;
        userData.value.patronymic = data.patronymic;
        userData.value.phone = data.phone;
        userData.value.email = data.user_email;
        userData.value.birthday = data.meta_birthday;
        userData.value.fanID = data.fanID;
        userData.value.userId = data.ID;
        userData.value.photo = data.photo_url;
        userData.value.userInfo = data.user_bio;
        userData.value.socials.ok = data.ok;
        userData.value.socials.tg = data.telegram;
        userData.value.socials.whatsupp = data.whatsupp;
        userData.value.socials.vk = data.vk;
        allEvents.value = data.gigs;
    }

    const getAppData = async () => {
        return new Promise((resolve, reject) => {
            let postData = {
                id: userId,
            };

            axios.post('/wp-content/themes/sp-theme-master/ajax/cabinet.php', postData,)
                .then((res) => {
                    console.log(res.data);
                    setApplicationData(res.data.data);
                    resolve();
                })
                .catch((error) => {
                    console.log("Ошибка!!!", error);
                    if (process.env.NODE_ENV === "development") {
                        setApplicationData(responseData.data);
                    }
                    reject();
                });
        })
    };

    return {
        getAppData,
        userData,
        allEvents
    }
})




