<template>
  <div class="roulette">
    <div class="roulette-triangle">
      <svg
        width="83"
        height="24"
        viewBox="0 0 83 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4.24991L20.7907 2.49991L41.5814 0.749907L82.4998 4.24991L40.5 23.2499L0 4.24991Z"
          fill="#0086E0"
        />
      </svg>
    </div>
    <button
      :class="[
        'play-button',
        gameState === GAME_STATES.WAITING || gameState === GAME_STATES.PLAYING
          ? 'waiting'
          : '',
        gameState === GAME_STATES.END_GAME ? 'winner' : '',
      ]"
    >
      {{ playBtnText }}
    </button>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
      class="roulette-wheel"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="none"
    >
      <defs id="img-container">
        <filter
          id="filter0_d"
          x="0"
          y="30.7499"
          width="672"
          height="672"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="9" />
          <feGaussianBlur stdDeviation="8.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <pattern
          height="1"
          width="1"
          patternContentUnits="objectBoundingBox"
          id="pattern1"
        >
          <use transform="scale(0.004)" xlink:href="#roulette-img-1" />
        </pattern>
        <pattern
          height="1"
          width="1"
          patternContentUnits="objectBoundingBox"
          id="pattern2"
        >
          <use transform="scale(0.005)" xlink:href="#roulette-img-2" />
        </pattern>
        <pattern
          height="1"
          width="1"
          patternContentUnits="objectBoundingBox"
          id="pattern3"
        >
          <use transform="scale(0.004)" xlink:href="#roulette-img-3" />
        </pattern>
        <pattern
          height="1"
          width="1"
          patternContentUnits="objectBoundingBox"
          id="pattern4"
        >
          <use transform="scale(0.004)" xlink:href="#roulette-img-4" />
        </pattern>
        <pattern
          height="1"
          width="1"
          patternContentUnits="objectBoundingBox"
          id="pattern5"
        >
          <use transform="scale(0.004)" xlink:href="#roulette-img-5" />
        </pattern>
        <pattern
          height="1"
          width="1"
          patternContentUnits="objectBoundingBox"
          id="pattern6"
        >
          <use transform="scale(0.005)" xlink:href="#roulette-img-6" />
        </pattern>
        <pattern
          height="1"
          width="1"
          patternContentUnits="objectBoundingBox"
          id="pattern7"
        >
          <use transform="scale(0.004)" xlink:href="#roulette-img-7" />
        </pattern>
        <pattern
          height="1"
          width="1"
          patternContentUnits="objectBoundingBox"
          id="pattern8"
        >
          <use transform="scale(0.004)" xlink:href="#roulette-img-8" />
        </pattern>
        <pattern
          height="1"
          width="1"
          patternContentUnits="objectBoundingBox"
          id="pattern9"
        >
          <use transform="scale(0.005)" xlink:href="#roulette-img-9" />
        </pattern>
        <pattern
          height="1"
          width="1"
          patternContentUnits="objectBoundingBox"
          id="pattern10"
        >
          <use transform="scale(0.005)" xlink:href="#roulette-img-10" />
        </pattern>
        <pattern
          height="1"
          width="1"
          patternContentUnits="objectBoundingBox"
          id="pattern11"
        >
          <use transform="scale(0.005)" xlink:href="#roulette-img-11" />
        </pattern>
        <image
          id="roulette-img-1"
          width="250"
          height="250"
          v-bind:xlink:href="users[0] ? users[0].photo : ''"
        />
        <image
          id="roulette-img-2"
          width="200"
          height="200"
          :xlink:href="users[1] ? users[1].photo : ''"
        />
        <image
          id="roulette-img-3"
          width="250"
          height="250"
          :xlink:href="users[2] ? users[2].photo : ''"
        />
        <image
          id="roulette-img-4"
          width="250"
          height="250"
          :xlink:href="users[3] ? users[3].photo : ''"
        />
        <image
          id="roulette-img-5"
          width="250"
          height="250"
          :xlink:href="users[4] ? users[4].photo : ''"
        />
        <image
          id="roulette-img-6"
          width="200"
          height="200"
          :xlink:href="users[5] ? users[5].photo : ''"
        />
        <image
          id="roulette-img-7"
          width="250"
          height="250"
          :xlink:href="users[6] ? users[6].photo : ''"
        />
        <image
          id="roulette-img-8"
          width="250"
          height="250"
          :xlink:href="users[7] ? users[7].photo : ''"
        />
        <image
          id="roulette-img-9"
          width="200"
          height="200"
          :xlink:href="users[8] ? users[8].photo : ''"
        />
        <image
          id="roulette-img-10"
          width="200"
          height="200"
          :xlink:href="users[9] ? users[9].photo : ''"
        />
        <image
          id="roulette-img-11"
          width="200"
          height="200"
          :xlink:href="users[10] ? users[10].photo : ''"
        />
      </defs>
      <g>
        <g id="svg_12" filter="url(#filter0_d)">
          <circle
            xmlns="http://www.w3.org/2000/svg"
            cx="350"
            cy="350"
            r="319"
            fill="#131A29"
          />
        </g>
        <g id="svg_14" opacity="0.1">
          <line
            id="svg_15"
            stroke-width="3"
            stroke="#0086E0"
            y2="31"
            x2="350"
            y1="350"
            x1="350"
          ></line>
          <line
            id="svg_16"
            stroke-width="3"
            stroke="#0086E0"
            y2="82"
            x2="522"
            y1="350"
            x1="350"
          ></line>
          <line
            id="svg_17"
            stroke-width="3"
            stroke="#0086E0"
            y2="223"
            x2="642"
            y1="350"
            x1="350"
          ></line>
          <line
            id="svg_18"
            stroke-width="3"
            stroke="#0086E0"
            y2="400"
            x2="665"
            y1="350"
            x1="350"
          ></line>
          <line
            id="svg_19"
            stroke-width="3"
            stroke="#0086E0"
            y2="567"
            x2="583"
            y1="350"
            x1="350"
          ></line>
          <line
            id="svg_20"
            stroke-width="3"
            stroke="#0086E0"
            y2="659"
            x2="428"
            y1="350"
            x1="350"
          ></line>
          <line
            id="svg_21"
            stroke-width="3"
            stroke="#0086E0"
            y2="648"
            x2="237"
            y1="350"
            x1="350"
          ></line>
          <line
            id="svg_22"
            stroke-width="3"
            stroke="#0086E0"
            y2="538"
            x2="92"
            y1="350"
            x1="350"
          ></line>
          <line
            id="svg_23"
            stroke-width="3"
            stroke="#0086E0"
            y2="374"
            x2="33"
            y1="350"
            x1="350"
          ></line>
          <line
            id="svg_24"
            stroke-width="3"
            stroke="#0086E0"
            y2="203"
            x2="68"
            y1="350"
            x1="350"
          ></line>
          <line
            id="svg_25"
            stroke-width="3"
            stroke="#0086E0"
            y2="80"
            x2="180"
            y1="350"
            x1="350"
          ></line>
        </g>
        <circle
          id="svg_26"
          fill="url(#pattern11)"
          r="42"
          cy="101.75"
          cx="283"
        ></circle>
        <circle fill="url(#pattern1)" r="42" cy="105" cx="422"></circle>
        <circle fill="url(#pattern2)" r="42" cy="183.75" cx="544"></circle>
        <circle fill="url(#pattern3)" r="42" cy="320.75" cx="600"></circle>
        <circle fill="url(#pattern4)" r="42" cy="451.75" cx="573"></circle>
        <circle
          fill="url(#pattern5)"
          transform="rotate(-15 467.439 570.189)"
          r="42"
          cy="570.189"
          cx="477.439"
        ></circle>
        <circle
          fill="url(#pattern6)"
          transform="rotate(-4.00129 336.828 608.578)"
          r="42"
          cy="594.578"
          cx="341.828"
        ></circle>
        <circle fill="url(#pattern7)" r="42" cy="545.75" cx="201"></circle>
        <circle fill="url(#pattern8)" r="42" cy="424.191" cx="114.441"></circle>
        <circle
          fill="url(#pattern9)"
          r="42"
          cy="299.523"
          cx="107.7734"
        ></circle>
        <circle fill="url(#pattern10)" r="42" cy="174.53" cx="166.781"></circle>
        <text
          transform="rotate(-75 372.992 227.5)"
          xml:space="preserve"
          text-anchor="start"
          font-family="'Roboto'"
          font-size="17"
          y="244.5"
          x="351"
          stroke-width="0"
          stroke="#000"
          fill="#ffffff"
        >
          {{ users[0] ? users[0].name : "" }}
        </text>
        <text
          transform="rotate(-40 438.656 267.5)"
          xml:space="preserve"
          text-anchor="start"
          font-family="'Roboto'"
          font-size="17"
          id="roulette-section-2"
          y="277.5"
          x="423"
          stroke-width="0"
          stroke="#000"
          fill="#ffffff"
        >
          {{ users[1] ? users[1].name : "" }}
        </text>
        <text
          xml:space="preserve"
          text-anchor="start"
          font-family="'Roboto'"
          font-size="17"
          id="roulette-section-3"
          y="343.5"
          x="457"
          stroke-width="0"
          stroke="#000"
          fill="#ffffff"
        >
          {{ users[2] ? users[2].name : "" }}
        </text>
        <text
          transform="rotate(25.4185 456.492 413.5)"
          xml:space="preserve"
          text-anchor="start"
          font-family="'Roboto'"
          font-size="17"
          id="roulette-section-4"
          y="408.5"
          x="440"
          stroke-width="0"
          stroke="#000"
          fill="#ffffff"
        >
          {{ users[3] ? users[3].name : "" }}
        </text>
        <text
          transform="rotate(59.9585 413.492 472.5)"
          xml:space="preserve"
          text-anchor="start"
          font-family="'Roboto'"
          font-size="17"
          stroke-width="0"
          id="roulette-section-5"
          y="468.5"
          x="382"
          fill="#ffffff"
        >
          {{ users[4] ? users[4].name : "" }}
        </text>
        <text
          transform="rotate(90.8742 334.758 491.5)"
          xml:space="preserve"
          text-anchor="start"
          font-family="'Roboto'"
          font-size="17"
          stroke-width="0"
          id="roulette-section-6"
          y="490.5"
          x="295"
          fill="#ffffff"
        >
          {{ users[5] ? users[5].name : "" }}
        </text>
        <text
          transform="rotate(-53.6257 259.992 466.5)"
          xml:space="preserve"
          text-anchor="start"
          font-family="'Roboto'"
          font-size="17"
          id="roulette-section-7"
          y="472.5"
          x="216"
          stroke-width="0"
          fill="#ffffff"
        >
          {{ users[6] ? users[6].name : "" }}
        </text>
        <text
          transform="rotate(-20.0944 216.758 408.5)"
          xml:space="preserve"
          text-anchor="start"
          font-family="'Roboto'"
          font-size="17"
          id="roulette-section-8"
          y="403.5"
          x="177"
          stroke-width="0"
          fill="#ffffff"
        >
          {{ users[7] ? users[7].name : "" }}
        </text>
        <text
          transform="rotate(10.26914 208.836 338.5)"
          xml:space="preserve"
          text-anchor="start"
          font-family="'Roboto'"
          font-size="17"
          id="roulette-section-9"
          y="325.5"
          x="168"
          stroke-width="0"
          fill="#ffffff"
        >
          {{ users[8] ? users[8].name : "" }}
        </text>
        <text
          transform="rotate(40.4232 237.664 271.5)"
          xml:space="preserve"
          text-anchor="start"
          font-family="'Roboto'"
          font-size="17"
          id="roulette-section-10"
          y="257.5"
          x="194"
          stroke-width="0"
          fill="#ffffff"
        >
          {{ users[9] ? users[9].name : "" }}
        </text>
        <text
          transform="rotate(74.163 301.57 226.5)"
          xml:space="preserve"
          text-anchor="start"
          font-family="'Roboto'"
          font-size="17"
          id="roulette-section-11"
          y="221.5"
          x="239"
          stroke-width="0"
          stroke="#000"
          fill="#ffffff"
        >
          {{ users[10] ? users[10].name : "" }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import { GAME_STATES } from "@/components/consts";

export default {
  name: "Wheel",

  props: {
    users: {
      type: Array,
      default: () => [],
      required: true,
    },
  },

  data() {
    return {
      GAME_STATES,
      gameState: GAME_STATES.JOIN,
    };
  },

  computed: {
    playBtnText() {
      if (this.gameState === GAME_STATES.JOIN) {
        return "Играть";
      }

      if (this.gameState === GAME_STATES.WAITING) {
        return "Ждем игроков";
      }

      if (this.gameState === GAME_STATES.PLAYING) {
        return "Игра началась";
      }

      if (this.gameState === GAME_STATES.END_GAME) {
        return `Победил ${this.winnerName}`;
      }

      return "Играть";
    },
  },
};
</script>

<style scoped></style>
