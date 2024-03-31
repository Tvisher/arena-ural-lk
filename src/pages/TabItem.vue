<template>
  <CalendarTab v-if="$route.params.tabId === 'calendar'" />
  <MyEventsTab v-if="$route.params.tabId === 'my-events'" />
  <NotificationsTab v-if="$route.params.tabId === 'notifications'" />
  <UserProfile v-if="$route.params.tabId === 'profile'" />
</template>
<script setup>
import CalendarTab from "@/pages/tabs/CalendarTab.vue";
import MyEventsTab from "@/pages/tabs/MyEventsTab.vue";
import NotificationsTab from "@/pages/tabs/NotificationsTab.vue";
import UserProfile from "@/pages/tabs/UserProfile.vue";
// import UserProfile from "@/pages/tabs/Archive.vue";
</script>

<style lang="scss"></style>
