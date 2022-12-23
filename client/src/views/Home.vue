<template>
  <q-page>
    <div
      id="correct-orientation-container"
      v-if="isCorrectOrientation()"
    >

      <Instructions v-if="instructions && !selectionPaneOpen && !createRequest"/>
      <svg id="main-svg" viewBox="0 0 726.02 577.75" >
        <defs>
          <filter id="button-highlight" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="9" result="effect1_foregroundBlur_101_9589">
              <animate attributeName="stdDeviation" values="5;10;5" dur="2s" begin="0s" repeatCount="indefinite"/>
            </feGaussianBlur>
          </filter>
        </defs>

        

        <Bubble v-if="retrievedImage" @bubblePopped="onBubblePop"/>
        
        <g id="engine-parts" :class="[retrievedImage ? 'translate-x-half' : '', 'transition-transform-slow']">
          <image id="machine-highlight" width="100%" height="100%" href="../assets/MachineHighlight.Tablet.svg" />
          <g class="transition-transform cursor-pointer" :class="[hasSelected?'translate-y-0':'translate-y-hidden']">
            <CreateButton @create="onCreate" :selected="hasStyle" :selecting="styleLoading"/>
          </g>
    
          <circle v-if="isCharacterHighlighted" id="character-button-highlight" fill="#A24CF9" cx="62.71" cy="232.85" r="38" filter="url(#button-highlight)">
            <animate attributeName="r" values="38;45;38" dur="1s" begin="0s" repeatCount="indefinite" />
          </circle>
          <circle v-if="isPlaceHighlighted" id="place-button-highlight" fill="#A24CF9" cx="485.56" cy="511.2" r="40" filter="url(#button-highlight)">
            <animate attributeName="r" values="40;47;40" dur="1s" begin="0s" repeatCount="indefinite" />
          </circle>
    
          <Engine :animate="createRequest && !bubblePopped"/>

          <StyleSelector v-if="createRequest" @selected="submitCall" />
    
          <g id="character-button" @click="onOptionSelect('character')" :class="[!retrievedImage ? 'cursor-pointer' : '']">
            <g>
              <circle fill="#4164af" cx="62.71" cy="232.85" r="34.32" />
              <path fill="#012731" d="M62.7,268.17c-16.31,0-31-11.38-34.53-27.96-4.06-19.04,8.13-37.84,27.18-41.9,19.05-4.06,37.84,8.14,41.9,27.18,4.06,19.04-8.13,37.84-27.18,41.9-2.47,.53-4.94,.78-7.37,.78Zm.01-68.64c-2.29,0-4.62,.24-6.95,.74-17.97,3.83-29.47,21.56-25.64,39.53,3.83,17.97,21.56,29.47,39.53,25.64,17.97-3.83,29.47-21.56,25.64-39.53h0c-3.33-15.63-17.19-26.38-32.58-26.38Z"/>
            </g>
            <path fill="#1e4484" d="M90.12,221.45s-7.38,45.72-47.74,26.06l1.97,10.48s40.59,20.54,49.91-24.33l-4.15-12.21Z"/>
            <ellipse fill="#779ad0" cx="51.11" cy="216.24" rx="14.78" ry="7.52" transform="translate(-110.54 63.79) rotate(-33.38)"/>
            <image id="character-icon" x="38.71" y="208.85" :href="characterIcon" />
          </g>
            
          <circle v-if="isActivityHighlighted" id="activity-button-highlight" fill="#A24CF9" cx="438.46" cy="106.59" r="33" filter="url(#button-highlight)">
            <animate attributeName="r" values="33;40;33" dur="1s" begin="0s" repeatCount="indefinite" />
          </circle>

          <g id="activity-button" @click="onOptionSelect('activity')" :class="[!retrievedImage ? 'cursor-pointer' : '']">
            <g>
              <circle fill="#b155a0" cx="438.46" cy="106.59" r="28.64"/>
              <path fill="#012731" d="M438.45,136.23c-13.69,0-26.02-9.55-28.99-23.47-3.41-15.99,6.83-31.76,22.81-35.17,7.74-1.65,15.67-.19,22.31,4.12,6.64,4.31,11.21,10.95,12.86,18.69h0c1.65,7.74,.19,15.67-4.12,22.31-4.31,6.64-10.95,11.21-18.69,12.86-2.07,.44-4.14,.65-6.18,.65Zm.01-57.29c-1.9,0-3.83,.2-5.77,.61-14.91,3.18-24.45,17.89-21.27,32.8,3.18,14.91,17.89,24.46,32.8,21.27,7.22-1.54,13.41-5.8,17.43-11.99,4.02-6.19,5.38-13.58,3.84-20.8-2.76-12.97-14.27-21.88-27.03-21.88Z"/>
            </g>
            <path fill="#9a2589" d="M461.34,97.07s-6.16,38.16-39.85,21.75l1.65,8.75s33.88,17.15,41.66-20.31l-3.46-10.19Z"/>
            <ellipse fill="#d26fac" cx="428.77" cy="92.73" rx="12.34" ry="6.28" transform="translate(19.71 251.2) rotate(-33.38)"/>
            <image id="activity-icon" x="414.46" y="82.59" :href="activityIcon" />
          </g>
    
          <g id="place-button" @click="onOptionSelect('place')" :class="[!retrievedImage ? 'cursor-pointer' : '']">
            <g>
              <circle fill="#6bbf6b" cx="485.56" cy="511.2" r="36.04"/>
              <path fill="#012731" d="M485.49,548.25c-7.98,0-15.71-2.57-22.2-7.45-7.91-5.95-13.02-14.62-14.4-24.42-2.85-20.23,11.28-39,31.5-41.86,20.23-2.85,39,11.28,41.86,31.5h0c1.38,9.8-1.13,19.55-7.08,27.45-5.95,7.91-14.62,13.02-24.42,14.4-1.76,.25-3.51,.37-5.25,.37Zm.1-72.1c-1.62,0-3.27,.11-4.92,.35-9.27,1.31-17.47,6.15-23.1,13.63-5.63,7.48-8.01,16.7-6.7,25.97,2.7,19.13,20.46,32.51,39.6,29.8,19.13-2.7,32.5-20.46,29.8-39.6-2.47-17.48-17.51-30.15-34.68-30.15Z"/>
            </g>
            <path fill="#50b848" d="M515.12,501.26s-11.08,47.36-51.93,23.81l1.3,11.12s41.02,24.5,54.08-21.84l-3.45-13.1Z"/>
            <ellipse fill="#9fd18b" cx="474.62" cy="492.95" rx="15.53" ry="7.9" transform="translate(-180.8 296.26) rotate(-29.38)"/>
            <image id="place-icon" x="461.56" y="487.2" :href="placeIcon" />
          </g>
          <g transform="translate(630 30)" v-if="!instructions || selectionPaneOpen "  >
              <circle r="15" cx="13" cy="14" @click="onDisplayInstructions" fill="transparent "/>
              <path @click="onDisplayInstructions" d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35942C3.91973 3.89776 2.12532 6.08426 1.06569 8.64243C0.00606598 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C27.9959 10.2882 26.5196 6.72963 23.895 4.10501C21.2704 1.48038 17.7118 0.00407623 14 0ZM14 25.2C11.7849 25.2 9.61945 24.5431 7.77762 23.3125C5.93579 22.0818 4.50026 20.3326 3.65256 18.286C2.80485 16.2395 2.58306 13.9876 3.01521 11.815C3.44737 9.6424 4.51406 7.64675 6.08041 6.0804C7.64676 4.51405 9.64241 3.44736 11.815 3.0152C13.9876 2.58305 16.2395 2.80485 18.2861 3.65255C20.3326 4.50025 22.0818 5.93578 23.3125 7.77761C24.5431 9.61944 25.2 11.7848 25.2 14C25.1963 16.9693 24.0151 19.8159 21.9155 21.9155C19.8159 24.0151 16.9693 25.1963 14 25.2ZM14 13.3C13.6287 13.3 13.2726 13.4475 13.0101 13.71C12.7475 13.9726 12.6 14.3287 12.6 14.7V18.9C12.6 19.2713 12.7475 19.6274 13.0101 19.8899C13.2726 20.1525 13.6287 20.3 14 20.3C14.3713 20.3 14.7274 20.1525 14.99 19.8899C15.2525 19.6274 15.4 19.2713 15.4 18.9V14.7C15.4 14.3287 15.2525 13.9726 14.99 13.71C14.7274 13.4475 14.3713 13.3 14 13.3ZM14 7.7C13.6539 7.7 13.3155 7.80263 13.0278 7.99493C12.74 8.18722 12.5157 8.46053 12.3832 8.7803C12.2508 9.10007 12.2161 9.45194 12.2836 9.79141C12.3512 10.1309 12.5178 10.4427 12.7626 10.6874C13.0073 10.9322 13.3191 11.0988 13.6586 11.1664C13.9981 11.2339 14.3499 11.1992 14.6697 11.0668C14.9895 10.9343 15.2628 10.71 15.4551 10.4222C15.6474 10.1345 15.75 9.79611 15.75 9.45C15.75 8.98587 15.5656 8.54075 15.2374 8.21256C14.9093 7.88437 14.4641 7.7 14 7.7Z" fill="white"/>
          </g>
        </g>
      </svg>

      
      
      <div
        v-if="!retrievedImage || !hasStyle"
        id="selection-container"
        class="q-mr-md"
      >
        <Character
          v-if="optionSelected === 'character'"
          @selected="onSelected"
        />
        <Activity
          v-if="optionSelected === 'activity'"
          @selected="onSelected"
        />
        <Place
          v-if="optionSelected === 'place'"
          @selected="onSelected"
        />
      </div>
      <div
        v-else
        id="finished-container"
        class=" q-mr-md q-mt-md"
      >
        <RenderImage
          v-if="bubblePopped"
          :imageURL="url"
          @restart="onRestart"
        />
      </div>
    </div>
    <ImproperOrientation v-else />
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import { useSelectionsStore } from '../store/selections';
import { imagesService } from '../service/images.service';
import ImproperOrientation from './ImproperOrientation.vue';
import Activity from '../components/selections/Activity.vue';
import Character from '../components/selections/Character.vue';
import Place from '../components/selections/Place.vue';
import RenderImage from '../components/cards/RenderImage.vue';
import Engine from '../components/engine/Engine.vue';
import CreateButton from '../components/engine/CreateButton.vue';
import StyleSelector from '../components/engine/StyleSelector.vue';
import Bubble from '../components/engine/Bubble.vue';
import WelcomeBubble from '../components/engine/WelcomeBubble.vue';
import Instructions from '../components/engine/Instructions.vue';

const quasar = useQuasar();
const selectionsStore = useSelectionsStore();

const instructions = ref(true); 
const createRequest = ref(false); 
const bubblePopped = ref(false); 
const retrievedImage = ref<boolean>(false);
const url = ref<string>('https://wallpaperaccess.com/full/1138973.jpg');

const selectionPaneOpen = ref(false); 
const optionSelected = ref<string|undefined>(undefined);
const onOptionSelect = (option: string) => {
  if(option != '')
    selectionPaneOpen.value = true;
  if (!retrievedImage.value) optionSelected.value = option;
};
const onSelected = () => {
  optionSelected.value = undefined;
};

const isCharacterHighlighted = computed(() => {
 return (selectionsStore.character === undefined) && (!optionSelected.value || optionSelected.value === 'character');
});
const isActivityHighlighted = computed(() => {
 return (selectionsStore.activity === undefined) && (!optionSelected.value || optionSelected.value === 'activity');
});
const isPlaceHighlighted = computed(() => {
 return (selectionsStore.place === undefined) && (!optionSelected.value || optionSelected.value === 'place');
});

const isCorrectOrientation = (): boolean => {
  return (quasar.platform.is.mobile !== true) || (window.innerHeight < window.innerWidth);
};

const characterIcon = computed(() => {
  return selectionsStore.character !== undefined ? selectionsStore.character.url : 'iconPerson.svg';
});
const activityIcon = computed(() => {
  return selectionsStore.activity !== undefined ? selectionsStore.activity.url : 'iconActivity.svg';
});
const placeIcon = computed(() => {
  return selectionsStore.place !== undefined ? selectionsStore.place.url : 'iconPlace.svg';
});

const hasSelected = computed(() => {
  return selectionsStore.character !== undefined ||
    selectionsStore.activity !== undefined ||
    selectionsStore.place !== undefined;
});

const submitCall = () => {
  imagesService.createImages({prompt: selectionsStore.getPrompt()})
    .then((res) => {
      url.value = res;
      retrievedImage.value = true;
    })
    .catch(() => {
      retrievedImage.value = true;
    });
};

//displays instructions to user
const onDisplayInstructions = () => {

  instructions.value = true
  selectionPaneOpen.value = false
  onOptionSelect('')
}

// checks if style selector is processing
const styleLoading = computed(() => {
  return (createRequest.value && !hasStyle.value)
})

// checks if style has been randomly selected
const hasStyle = computed(() => {
  return (selectionsStore.style != null);
});

// processes a creation request
const onCreate = () => {
  createRequest.value = true;
  optionSelected.value = undefined;
};

// signals that the button animation completed
const onBubblePop = () => {
  bubblePopped.value = true;
};

// restarts the engine
const onRestart = () => {
  createRequest.value = false;
  retrievedImage.value = false;
  bubblePopped.value = false;
  url.value = 'https://wallpaperaccess.com/full/1138973.jpg';
  selectionsStore.clearSelections();
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee&family=Exo+2:wght@500&display=swap');
@import "../quasar-variables.sass";
#correct-orientation-container{
  #main-svg{
    position: absolute;
    left: 0;
    max-height: 100%;
    @media (max-width: $breakpoint-xs-max){
      width: 60%;
    }
    @media (min-width: $breakpoint-sm-min) and (max-width: $breakpoint-sm-max){
      width: 60%;
    }
    @media (min-width: $breakpoint-md-min) and (max-width: $breakpoint-md-max){
      width: 80%;
    }
    @media (min-width: $breakpoint-lg-min) and (max-width: $breakpoint-lg-max){
      width: 80%;
    }
    @media (min-width: $breakpoint-xl-min){
      width: 80%;
    }
    #character-button > #character-icon{
      width: 48px;
      height: 48px;
    }
    #activity-button > #activity-icon{
      width: 48px;
      height: 48px;
    }
    #place-button > #place-icon{
      width: 48px;
      height: 48px;
    }
  }
  #finished-container{
    float: right;
    position: relative;
    // height: 80vh;
    padding-top: 2em;
    width: 55%;
  }
}

.translate-y-hidden{
  transform: translateY(150px);
}
.translate-y-0 {
  transform: translateY(-5px);
}

.translate-x-half {
  transform: translateX(-50%)
}
.transition-transform {
  transition: transform 1s ease;
}
.transition-transform-slow {
  transition: transform 2s ease;
}
</style>