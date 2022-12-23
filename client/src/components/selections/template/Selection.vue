<template>
  <div id="selection">
    <q-scroll-area
      id="selection-scroll-area"
      style="height: 100%; max-width: 100%;"
      :thumb-style="{
        width: '8px',
        borderRadius: '8px',
        backgroundColor: '#311976',
        opacity: '0.75',
      }"
      :bar-style="{
        width: '8px',
        borderRadius: '8px',
        backgroundColor: '#311976',
        opacity: '0.2',
      }"
    >
      <div id="selection-area" class="row justify-evenly">
        <template v-for="option of options">
          <q-btn
            @click="onSelection(option)"
            :class="[
              'selection-item-button',
              selected?.label == option.label ? 'selected-selection-item' : '',
            ]"
            flat
            round
          >
            <img
              :src="option.url"
              class="selection-item-button-image"
            />
          </q-btn>
        </template>
      </div>
    </q-scroll-area>
  </div>
</template>

<script setup lang="ts">
import { SelectionOption } from "../../../objects/SelectionOption";

const props = defineProps<{options: Array<SelectionOption>, selected: SelectionOption|undefined}>();
const emit = defineEmits(['onSelection']);

const onSelection = (option: SelectionOption) => {
  emit('onSelection', option);
};
</script>

<style lang="scss">
@import "../../../quasar-variables.sass";

#selection{
  width: inherit;
  height: 100%;
  padding: 4px;
  #selection-scroll-area{
    .q-scrollarea__content{
      padding: 0 4px 0 0;
      #selection-area{
        .selection-item-button{
          min-width: 0 !important;
          min-height: 0 !important;
          width: 100%;
          height: 100%;
          border-radius: 128px;
          padding: 0;
          @media (max-width: $breakpoint-xs-max) {
            width: calc((100% - 24px) / 3);
            height: calc((100% - 24px) / 3);
            padding: 2px 0;
          }
          @media (min-width: $breakpoint-sm-min) and (max-width: $breakpoint-sm-max) {
            width: calc((100% - 32px) / 4);
            height: calc((100% - 32px) / 4);
            padding: 4px;
          }
          @media (min-width: $breakpoint-md-min) and (max-width: $breakpoint-md-max) {
            width: calc((100% - 24px) / 3);
            height: calc((100% - 24px) / 3);
            padding: 4px;
          }
          @media (min-width: $breakpoint-lg-min) and (max-width: $breakpoint-lg-max) {
            width: calc((100% - 24px) / 3);
            height: calc((100% - 24px) / 3);
            padding: 4px;
          }
          @media (min-width: $breakpoint-xl-min) {
            width: calc((100% - 24px) / 3);
            height: calc((100% - 24px) / 3);
            padding: 4px;
          }
          :hover{
            @media (min-width: $breakpoint-lg-min) and (max-width: $breakpoint-lg-max) {
              background-color: rgba($selection-hover-color, $selection-hover-opacity);
            }
            @media (min-width: $breakpoint-xl-min) {
              background-color: rgba($selection-hover-color, $selection-hover-opacity);
            }
          }
          .q-btn__content{
            height: inherit;
            border-radius: inherit;
            .selection-item-button-image{
              width: 100% !important;
              height: inherit;
              border-radius: inherit;
            }
          }
        }
        .selected-selection-item{
          background-color: rgba($selection-selected-color, $selection-selected-opacity);
        }
      }
    }
  }
}
</style>