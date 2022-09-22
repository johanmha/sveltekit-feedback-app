import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Hei på deg, Silje!',
  },
  {
    id: 2,
    rating: 9,
    text: 'Nå drar jeg til Stockholm',
  },
  {
    id: 3,
    rating: 8,
    text: 'Håper du får en 10/10 slutt på arbeidsuka',
  },
  {
    id: 4,
    rating: 10,
    text: 'Du er kul og jeg er glad i deg <3',
  },
]);
