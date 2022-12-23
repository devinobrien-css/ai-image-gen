<template>
    <svg viewBox="0 7 235 490">
        <g class="button" @click="onClick">
            <path class="cls-2" d="M70.89,107.27h-19.26l6.73-30.15c0-3.98-8.87-13,1.03-13.1l4.56,.06c9.94-.16,.24,9.05,.24,12.88l6.7,30.31Z"/>
            <path class="cls-2" d="M100.51,107.27h-19.26l6.73-30.15c0-3.98-8.87-13,1.03-13.1l4.56,.06c9.94-.16,.24,9.05,.24,12.88l6.7,30.31Z"/>
            <path class="cls-2" d="M130.14,107.27h-19.26l6.73-30.15c0-3.98-8.87-13,1.03-13.1l4.56,.06c9.94-.16,.24,9.05,.24,12.88l6.7,30.31Z"/>
            <rect class="cls-3 pulse-yellow" x="11.42" y="18.29" width="154.7" height="46.58" rx="3.53" ry="3.53"/>
            <rect class="cls-4" x="22.69" y="27.44" width="131.94" height="27.78" rx="2.48" ry="2.48"/>


            <circle class="cls-1 animation-delay-1 animate-pulse" cx="17.22" cy="23.83" r="2.58"/>
            <circle class="cls-1 animation-delay-2 animate-pulse" cx="17.22" cy="32.56" r="2.58"/>
            <circle class="cls-1 animation-delay-3 animate-pulse" cx="17.22" cy="41.28" r="2.58"/>
            <circle class="cls-1 animation-delay-4 animate-pulse" cx="17.22" cy="50.01" r="2.58"/>
            <circle class="cls-1 animation-delay-5 animate-pulse" cx="17.22" cy="58.74" r="2.58"/>


            <circle class="cls-1 animation-delay-5 animate-pulse" cx="160.15" cy="23.81" r="2.58"/>
            <circle class="cls-1 animation-delay-4 animate-pulse" cx="160.15" cy="32.53" r="2.58"/>
            <circle class="cls-1 animation-delay-3 animate-pulse" cx="160.15" cy="41.26" r="2.58"/>
            <circle class="cls-1 animation-delay-2 animate-pulse" cx="160.15" cy="49.99" r="2.58"/>
            <circle class="cls-1 animation-delay-1 animate-pulse" cx="160.15" cy="58.72" r="2.58"/>
            <text v-if="selecting" fill="transparent" class="cls-5" transform="translate(34 48)">
                <tspan class="animate-pulse">BEEP</tspan> <tspan class="animate-pulse animation-delay-1">BOOP</tspan>
            </text>
            <text v-else-if="selected" fill="transparent" class="cls-5 animate-pulse" transform="translate(26 48)">
                _CREATING_
            </text>
            <text v-else fill="orange" class="cls-5" transform="translate(51 48)">
                CREATE!
            </text>
        </g>
    </svg>
</template>

<script setup lang="ts">
    const props = defineProps<{selecting: boolean|undefined, selected: boolean|undefined}>();

    const emit = defineEmits(['create']);

    const onClick = () => {
        emit('create', true);
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

    .cls-1{fill:#ede821;}
    .cls-2{fill:#6ac7b7;}
    .cls-3{fill:#f8b61e;}
    .cls-4{fill:#e5e5e5;}

    .cls-2,.cls-3{stroke-width:2px;}

    .cls-2,.cls-3,.cls-4{
        stroke:#012731;
        stroke-miterlimit:10;
    }

    .cls-5{
        z-index:1000;
        stroke:red;
        stroke-width: 2px;
        letter-spacing: 0.1em;
        word-spacing: 0.2em;
        /* font-family: 'Russo One', sans-serif; */
        font-family: 'Bungee', cursive;
        font-size:1.15em;
        text-align: center;
    }

    .animate-pulse {
        animation:pulse 500ms ease-in-out infinite;
    }
    @keyframes pulse {
        33%{
        fill:#ede821;
        }
        66%{
        fill:#C7C412;
        }
        100%{
        fill:#ede821;
        }
    }

    .letter {
        transform:translateY(-20px);
    }


    .animation-delay-1{animation-delay:0s;}
    .animation-delay-2{animation-delay:800ms;}
    .animation-delay-3{animation-delay:1600ms;}
    .animation-delay-4{animation-delay:2400ms;}
    .animation-delay-5{animation-delay:3200ms;}

    @keyframes pulse-yellow {
        0%{
            filter: drop-shadow(0px 0px 2px yellow);
        }
        20%{
            filter: drop-shadow(0px 0px 4px yellow);
        }
        40%{
            filter: drop-shadow(0px 0px 2px yellow)4
        }
        60%{
            filter: drop-shadow(0px 0px 4px yellow);
        }
        80%{
            filter: drop-shadow(0px 0px 2px yellow);
        }
        100% {
            filter: drop-shadow(0px 0px 1px yellow);
        }
        }
    .pulse-yellow {
        animation: pulse-yellow 1s ease-in-out infinite;
    }
</style>