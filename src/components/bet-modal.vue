<template>
  <div class="pop-up">
    <div class="bet-screen">
      <h2 class="screen-title">Выберите ставку</h2>
      <div class="bet-btns">
        <button class="bet-btn">10</button>
        <button class="bet-btn">30</button>
        <button class="bet-btn">50</button>
        <button class="bet-btn">100</button>
        <button class="bet-btn">300</button>
      </div>
      <div>
        <button class="button-transparent" disabled>Играть</button>
        <button type="reset" class="button-primary close-btn">Отмена</button>
      </div>
      <div class="screen-close close-btn" @click="$emit('close')">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7706 11.5L22.7369 1.53378C23.0877 1.18289 23.0877 0.614002 22.7369 0.263163C22.386 -0.0876761 21.8171 -0.087721 21.4662 0.263163L11.5 10.2294L1.53378 0.263163C1.18289 -0.087721 0.614002 -0.087721 0.263163 0.263163C-0.0876761 0.614047 -0.087721 1.18294 0.263163 1.53378L10.2294 11.5L0.263163 21.4662C-0.087721 21.8171 -0.087721 22.386 0.263163 22.7369C0.438583 22.9123 0.668537 23 0.898492 23C1.12845 23 1.35836 22.9123 1.53382 22.7369L11.5 12.7706L21.4662 22.7369C21.6416 22.9123 21.8716 23 22.1015 23C22.3315 23 22.5614 22.9123 22.7369 22.7369C23.0877 22.386 23.0877 21.8171 22.7369 21.4662L12.7706 11.5Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BetModal",
};
</script>

<style scoped></style>
