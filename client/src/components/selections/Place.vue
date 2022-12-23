<template>
    <div class="selection-content slide-open">
      <div id="caption" class="text-center q-pt-sm">Place</div>
      <q-card
        flat
        class="content-card"
      >
        <Selection
          :options="placeData"
          :selected="selectionsStore.place"
          @on-selection="onSelection"
        />
      </q-card>
    </div>
</template>

<script setup lang="ts">
import Selection from "./template/Selection.vue";
import { SelectionOption } from '../../objects/SelectionOption';
import { useSelectionsStore } from "../../store/selections";
import { placeData } from "../../data/placeData";

const selectionsStore = useSelectionsStore();
const emit = defineEmits(['selected']);

const onSelection = (option: SelectionOption) => {
  selectionsStore.setPlaceRef(option);
  emit('selected');
};
</script>

<style scoped lang="scss">
@import "../../quasar-variables.sass";
@import "../../quasar-classes.sass";
.content-card{
  background-image: linear-gradient(180deg, $place-background-primary, $place-background-secondary);
  border-radius: 8px;
  height: calc(100% - 42px);
}
</style>