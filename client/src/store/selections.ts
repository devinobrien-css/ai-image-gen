import { defineStore } from "pinia";
import { ref } from "vue";
import { PictureStyle } from "../objects/PictureStyle";
import { SelectionOption } from "../objects/SelectionOption";

export const useSelectionsStore = defineStore('selections', () => {
  const character = ref<SelectionOption|undefined>(undefined);
  const place = ref<SelectionOption|undefined>(undefined);
  const activity = ref<SelectionOption|undefined>(undefined);
  const style = ref<PictureStyle|undefined>(undefined);

  const setCharacterRef = (value: SelectionOption) => character.value = value;
  const setPlaceRef = (value: SelectionOption) => place.value = value;
  const setActivityRef = (value: SelectionOption) => activity.value = value;
  const setStyleRef = (value: PictureStyle) => style.value = value;
  const clearSelections = () => {
    character.value = undefined;
    place.value = undefined;
    activity.value = undefined;
    style.value = undefined;
  };

  const getPrompt = (): string => {
    return (style.value ?
      style.value.format(character.value, activity.value, place.value) : '')
        .replace('  ', ' ')
        .replace(' ,', ",");
  };

  return {
    character,
    place,
    activity,
    style,
    setCharacterRef,
    setPlaceRef,
    setActivityRef,
    setStyleRef,
    clearSelections,
    getPrompt,
  };
});