import { writable } from 'svelte/store';

export const skills = writable([
  {
    id: 1,
    icon: 'ae',
    title: 'Adobe After Effects',
    subTitle: 'Animation',
    selected: true
  },
  {
    id: 2,
    icon: 'ai',
    title: 'Adobe Illustrator',
    subTitle: 'Vector illustrations',
    selected: false
  },
  {
    id: 3,
    icon: 'ps',
    title: 'Adobe Photoshop',
    subTitle: 'Gif, jpg, png manipulation',
    selected: false
  },
  {
    id: 4,
    icon: 'sketch',
    title: 'Sketch',
    subTitle: 'Prototyping',
    selected: false
  },
  {
    id: 5,
    icon: 'figma',
    title: 'Figma',
    subTitle: 'Prototyping',
    selected: false
  },
  {
    id: 6,
    icon: 'invision',
    title: 'Invision',
    subTitle: 'Prototyping',
    selected: false
  },
  {
    id: 7,
    icon: 'pr',
    title: 'Adobe Premiere',
    subTitle: 'Gif, mp4 manipulation',
    selected: false
  },
  {
    id: 8,
    icon: 'id',
    title: 'Adobe Indesign',
    subTitle: 'Documents layouts and brand image',
    selected: false
  },
  {
    id: 9,
    icon: 'blender',
    title: 'Blender',
    subTitle: '3D modelling and animation',
    selected: false
  }
]);