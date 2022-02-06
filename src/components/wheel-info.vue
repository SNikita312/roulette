<template>
  <div class="roulette-info">
    <button class="button-transparent" @click="showBetModal = true">
      Выберите ставку
    </button>
    <div class="roulette-info-block">
      <p class="roulette-info-title">Людей в игре:</p>
      <p class="roulette-info-content">
        {{ peopleInGame }}
      </p>
    </div>
    <div class="roulette-info-block">
      <p class="roulette-info-title">Банк игры:</p>
      <p class="roulette-info-content">
        {{ gameBank }}
      </p>
    </div>
    <div class="roulette-info-block">
      <p class="roulette-info-title">Ставка в игре:</p>
      <p class="roulette-info-content">{{ currentBet }}</p>
    </div>

    <bet-modal v-if="showBetModal" @close="showBetModal = false" />
  </div>
</template>

<script>
import BetModal from "@/components/bet-modal";

export default {
  name: "WheelInfo",

  props: {
    currentBet: {
      type: Number,
      required: true,
    },

    usersInGame: {
      type: Number,
      default: 0,
    },

    usersLimit: {
      type: Number,
      default: 11,
    },
  },

  components: { BetModal },

  data() {
    return {
      showBetModal: false,
    };
  },

  computed: {
    peopleInGame() {
      return `${this.usersInGame} из ${this.usersLimit}`;
    },

    gameBank() {
      return `${this.currentBet * this.usersInGame} из
      ${this.currentBet * this.usersLimit}`;
    },
  },
};
</script>

<style scoped></style>
