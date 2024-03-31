<template>
  <div class="user-profile-tab">
    <User />
  </div>
</template>
<script setup>
import User from "@/components/User.vue";
</script>

<style lang="scss">
.user-profile-tab {
  .lk-user {
    background: #f9fafb;
    position: static;
    width: inherit;
  }
}

@media (max-width: 768px) {
  .tabs_link_list {
    width: inherit !important;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: -20px;
    margin-left: -20px;
  }
}

@media (max-width: 576px) {
  .lk-user {
    padding: 15px !important;
  }
  .user__fan-id {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .info-row {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .user__id {
    text-align: center;
  }
  .lk-user .user__image-wrapper {
    margin: auto;
  }
  .user__title {
    text-align: center;
  }
  .user-education-block {
    padding: 24px 15px;
  }
  .education-block__ico {
    margin-right: 15px;
  }
  .tabs_link_item {
    font-size: 16px !important;
  }

  .tabs_link_list {
    width: inherit !important;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: -10px;
    margin-left: -10px;
  }
}
</style>
