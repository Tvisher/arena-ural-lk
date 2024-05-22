import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

import responseData from '@/assets/testData.json';
const userId = document.querySelector('#lk-app').dataset.user;
export const useLkData = defineStore("LkData", () => {
    // state refs
    const userData = ref({
        userId: '',
        name: '',
        lastname: '',
        patronymic: '',
        phone: '',
        email: '',
        birthday: '',
        fanID: '',
        userInfo: '',
        photo: '',
        trainingСompleted: '',
        vkId: '',
        socials: {
            ok: '',
            tg: '',
            whatsapp: '',
            vk: ''
        }
    });
    const userSubscribes = ref([]);
    // getters
    const allEvents = ref([]);
    const userEvents = ref([]);
    const userEventsArchive = ref([]);
    const notifications = ref([]);
    const allEventsTypres = ref([]);

    // Actions
    const setApplicationData = (data) => {
        userData.value.userId = data.ID;
        userData.value.name = data.first_name;
        userData.value.lastname = data.last_name;
        userData.value.patronymic = data.patronymic;
        userData.value.phone = data.phone;
        userData.value.email = data.user_email;
        userData.value.birthday = data.meta_birthday;
        userData.value.fanID = data.fanID;
        userData.value.photo = data.photo_url;
        userData.value.userInfo = data.user_bio;
        userData.value.socials.ok = data.ok;
        userData.value.socials.tg = data.telegram;
        userData.value.socials.whatsapp = data.whatsapp;
        userData.value.socials.vk = data.vk;
        userData.value.trainingСompleted = data.skills;
        userData.value.vkId = data.vkid;

        allEvents.value = data.gigs;
        allEventsTypres.value = data.sport;

        userEvents.value = data.gigs.filter(el => el.hasOwnProperty('usergig') && el.status.value == 1 || el.hasOwnProperty('usergig') && el.status.value == 4);

        userEventsArchive.value = data.gigs.filter(el => el.hasOwnProperty('usergig') && el.status.value == 2);

        userSubscribes.value = Array.isArray(data.sport_user)
            ? data.sport_user
            : Object.values(data.sport_user);
        notifications.value = data.user_message;
    };

    const updateUserData = (data) => {
        userData.value.name = data.name;
        userData.value.lastname = data.lastname;
        userData.value.patronymic = data.patronymic;
        userData.value.phone = data.phone;
        userData.value.email = data.email;
        userData.value.birthday = data.birthday;
        userData.value.fanID = data.fanID;
        userData.value.userInfo = data.userInfo;
        userData.value.photo = data.photo;
        userData.value.socials.ok = data.socials.ok;
        userData.value.socials.tg = data.socials.tg;
        userData.value.socials.whatsapp = data.socials.whatsapp;
        userData.value.socials.vk = data.socials.vk;
    };

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
        notifications,
        userSubscribes,
        updateUserData,
        getAppData,
        userData,
        userEvents,
        allEvents,
        allEventsTypres,
        userEventsArchive
    }
})




