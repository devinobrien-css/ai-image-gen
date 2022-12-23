import { SelectionOption } from "./SelectionOption";

export interface PictureStyle {
    label: string
    format: (character: SelectionOption|undefined, activity: SelectionOption|undefined, place: SelectionOption|undefined) => string
  };