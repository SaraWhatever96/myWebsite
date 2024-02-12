import { writable, type Writable } from "svelte/store";

// create a store that contains the value of the image that has to superzoom
export const superzoomImgSrc: Writable<string> = writable('');