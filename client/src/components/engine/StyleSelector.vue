<template>
  <g id="style-selector" class="animate-light-flutter">
    <defs>
      <clipPath id="mask1" >
        <rect fill="transparent" width="235" height="28" x="310" y="176"/>
      </clipPath>
    </defs>

    <g clip-path="url(#mask1)">
      <path  fill="#D8E06F" d="M541.95,204.07l-205.42-.25,2.7-14.62c.85-5.48,5.03-13.29,9.39-13.29h176.47c6.3,1.43,7.27,3.05,13.35,10.66l3.39,5.37c1.37,3.58,4.47,12.13,.11,12.13Z"/>
      <path d="M541.95,205.07h0l-206.62-.25,2.92-15.8c.91-5.88,5.31-14.11,10.38-14.11h176.58l.11,.02c6.26,1.42,7.67,3.17,12.87,9.71l1.1,1.39,3.48,5.55c2.51,6.55,3.04,10.33,1.73,12.24-.39,.57-1.15,1.25-2.55,1.25Zm-204.22-2.24l204.22,.24c.57,0,.78-.21,.91-.38,.48-.7,.88-2.98-1.92-10.29l-3.31-5.24-1-1.26c-5.08-6.37-6.16-7.72-11.64-8.98h-176.36c-3.48,0-7.53,6.84-8.4,12.45l-2.49,13.46Z"/>
      <text id="spinner-text" x="430" y="190" dominant-baseline="middle" text-anchor="middle">{{spinnerOption ? spinnerOption.label : ''}}</text>
    </g>
  </g>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { gsap } from 'gsap';
import { pictureStyleData } from '../../data/pictureStyleData';
import { useSelectionsStore } from '../../store/selections';
import { PictureStyle } from '../../objects/PictureStyle';

const emit = defineEmits(['selected']);
const selectionsStore = useSelectionsStore();
const spinnerOption = ref<PictureStyle|undefined>(selectionsStore.style);
const hasSelectedStyle = computed(() => selectionsStore.style !== undefined);

onMounted(() => {
  if (!hasSelectedStyle.value) {
    const randomSelectionIndex = Math.floor(Math.random() * pictureStyleData.length);
    
    spin('#spinner-text', randomSelectionIndex)
    .then(() => {
      selectionsStore.setStyleRef(pictureStyleData[randomSelectionIndex]);
      emit('selected');
    });
  }
});

const setValue = (option: PictureStyle) => {
  spinnerOption.value = option;
};

const spin = (selector: string, finalIndex: number, cycles = 2): gsap.core.Timeline => {
  const timeline = gsap.timeline();
  
  if (cycles) {
    for (let i = 1; i <= cycles; i++) {
      if (i === cycles) {
        for (let i = 0; i <= finalIndex; i++) {
          timeline.to(selector, .1, {
            y:'81%',
            onComplete: () => setValue(pictureStyleData[i]),
          })
            .set(selector, { y:'-74%' })
            .to(selector, .1, { y:'2%' });
        }
      } else {
        for (let i = 0; i < pictureStyleData.length; i++) {
          timeline.to(selector, .1, {
            y:'81%',
            onComplete: () => setValue(pictureStyleData[i]),
          }).set(selector, { y:'-74%',});
        }
      }
    }
  }
  return timeline;
};
</script>

<style lang="scss">
#style-selector{
  #spinner-text{
    font-size: 12pt;
    font-family: 'Orbitron', sans-serif;
  }
}

@keyframes blink-in {
  from{opacity:0.2;}
  to{opacity: 1;}
}
.animate-blink-in{
  animation: blink-in 1s ease-in-out 3;
}

@keyframes light-flutter {
  0%{opacity:0}
  10%{opacity:0.5}
  15%{opacity:0.1}
  20%{opacity:0.7}
  25%{opacity:0.2}
  55%{opacity:0.5}
  75%{opacity:0.7}
  100%{opacity:1}
}

.animate-light-flutter {
  animation: light-flutter 2s ease;
}
</style>