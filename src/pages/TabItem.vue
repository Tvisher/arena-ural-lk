<template>
  <!-- <div class="tabs-page">{{ $route.params.tabId }}</div> -->
  <CalendarTab v-if="$route.params.tabId === 'calendar'" />
  <MyEventsTab v-if="$route.params.tabId === 'my-events'" />
  <NotificationsTab v-if="$route.params.tabId === 'notifications'" />
</template>
<script setup>
import CalendarTab from "@/pages/tabs/CalendarTab.vue";
import MyEventsTab from "@/pages/tabs/MyEventsTab.vue";
import NotificationsTab from "@/pages/tabs/NotificationsTab.vue";
</script>

<style lang="scss"></style>
