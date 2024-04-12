<template>
  <div class="bottom-modal">
    <div class="container">
      <div class="bottom-modal__content">
        <div class="bottom-modal__close" @click="emit('closeModal')">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="bottom-modal__ico" :class="{ reject: !props.status }"></div>
        <div class="bottom-modal__text" v-html="props.title"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  status: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss">
.bottom-modal {
  position: fixed;
  bottom: 80px;
  left: 0px;
  width: 100%;
  z-index: 3;
}

.bottom-modal__content {
  margin-right: -70px;
  position: relative;
  margin-left: auto;
  padding: 24px;
  border-radius: 12px;
  background: #fff;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
}

.bottom-modal__close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
}
.bottom-modal__text {
  color: #101828;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 155%;
}

.bottom-modal__ico {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='4' y='4' width='48' height='48' rx='24' fill='%23D1FADF'/%3e%3crect x='4' y='4' width='48' height='48' rx='24' stroke='%23ECFDF3' stroke-width='8'/%3e%3cpath d='M36 22L25 33L20 28' stroke='%23148D4E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e ");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  // border: 8px solid #ecfdf3;
  margin-bottom: 20px;
  &.reject {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='4' y='4' width='48' height='48' rx='24' fill='%23FFD3C1'/%3e%3crect x='4' y='4' width='48' height='48' rx='24' stroke='%23FFF5F1' stroke-width='8'/%3e%3cpath d='M31 25L25 31M25 25L31 31M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z' stroke='%23EF723B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e ");
  }
}

@media (max-width: 1440px) {
  .bottom-modal__content {
    margin-right: 30px;
  }
}
@media (max-width: 1280px) {
  .bottom-modal__content {
    margin-right: 0px;
  }
}
</style>
