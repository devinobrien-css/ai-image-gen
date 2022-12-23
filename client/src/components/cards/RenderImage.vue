<template>
  <div
    id="image-card-container"
  >
    <div>
      <q-card id="finished-card">
        <q-btn
          id="finished-card-flip-btn"
          @click="flipCard"
        >Flip</q-btn>
        <div
          v-if="flippedCard"
          class="card-details fit q-pb-lg full"
        >
            <div class="q-pt-md q-my-auto full">
              <div>
                <p class="text-bold font-exo q-mb-none">YOU CHOSE:</p>
    
                <div class="fit row justify-center">
                  <svg v-if="selectionsStore.character" viewBox="0 0 50 50" width="30%">
                    <circle fill="#779ad0" cx="50%" cy="50%" r="45%" width="100%" />
                    <image width="45" x="2" y="3" :href="selectionsStore.character ? selectionsStore.character.url : ''" />
                  </svg>
                  <svg v-if="selectionsStore.activity" viewBox="0 0 50 50" width="30%">
                    <circle fill="#d26fac" cx="50%" cy="50%" r="45%" width="100%" />
                    <image width="45" x="2" y="3" :href="selectionsStore.activity ? selectionsStore.activity.url : ''" />
                  </svg>
                  <svg v-if="selectionsStore.place" viewBox="0 0 50 50" width="30%">
                    <circle fill="#9fd18b" cx="50%" cy="50%" r="45%" width="100%" />
                    <image width="45" x="2" y="3" :href="selectionsStore.place ? selectionsStore.place.url : ''" />
                  </svg>
                </div>
              </div>
  
              <div
                id="chosen-card-style-container"
              >
                <div class="q-py-xs">
                  <p class="font-exo q-my-none">Style:</p>
                  <p class="font-orbitron q-my-none">{{selectionsStore.style ? selectionsStore.style.label : ''}}</p>
                </div>
              </div>
            </div>
        </div>

        <div class="card-image" v-else v-bind:style="{ 'background-image': 'url(' + imageURL + ')' }"></div>
      </q-card>
      <div class="row justify-between q-pt-sm">
        <q-btn
          :href="imageURL" download target="_blank"
          class="card-btn rounded-borders font-bungee"
        >
          Download
        </q-btn>
        <q-btn
          class="card-btn rounded-borders font-bungee"
          :onclick="onRestart"
        >Start Over</q-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import gsap from 'gsap';
  import { ref } from 'vue';
  import { useSelectionsStore } from '../../store/selections';
  import { onMounted } from 'vue';
  const selectionsStore = useSelectionsStore();
  const props = defineProps<{imageURL: string}>();
  const emit = defineEmits(['restart']);

  const onRestart = () => {
      emit('restart', true);
  };

  const flippedCard = ref(false);
  const flipCard = () => {
    flippedCard.value = !flippedCard.value;
  };

  onMounted(()=> {
    gsap.fromTo("#image-card-container", 
      {
          scale:0,
          x:-260,
          opacity:0
      }, 
      {
          scale:1,
          x:0,
          opacity:1,
          duration: 1.5,
      })
  })

  
</script>

<style scoped lang="scss">
@import "../../quasar-variables.sass";

.font-orbitron {
  font-family: 'Orbitron', sans-serif;
}

.font-bungee {
  font-family: 'Bungee', cursive;
}
.font-exo {
  font-family: 'Exo 2', sans-serif;
}

#image-card-container{
  height: 100%;
  display: flex;
  align-items: center;

  div{
    width: 100%;
    margin: 0 auto;
    height: fit-content;

    #finished-card{
      border-radius: 32px;
      background-color: $finished-card-background-color;

      #finished-card-flip-btn{
        background-color: rgba(210,210,210,0.2);
        position: absolute;
        top: 5%;
        left: 5%;

      }
      .card-image{
        height:75vh;
        width:100%; 
        margin:0 auto;
        border-radius: inherit;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        @media (max-width: $breakpoint-sm-max) {
          height:50vh
        }
      }
      .card-details{
        text-align: center;
        div{
          p{
            font-size: 1.8em;
            @media (max-width:$breakpoint-sm-max) {
              font-size:1em
            }
          }
        }
        #chosen-card-style-container{
          display: flex;
          justify-content: center;
          width: 100%;
          margin: 0;
          div{
            background-color: $finished-card-style-background-color;
            color: black;
            width: 80%;
            border-radius: 16px;
          }
          p:first-child{
            font-size: 1.2em;
            @media screen and (max-width:$breakpoint-sm-max) {
              font-size:1em
            }
          }
          p:last-child{
            font-size: 2.2em;
            @media screen and (max-width:$breakpoint-sm-max) {
              font-size:1.2em
            }
          }
        }
        
      }
    }
  }
}

.card-btn{
  width: 48%;
  background-color: $finished-button-background-color;
  color: $finished-button-text-color;
  font-size: 1.5em;
  @media screen and (max-width:$breakpoint-sm-max) {
    font-size:0.8em
  }
}

</style>