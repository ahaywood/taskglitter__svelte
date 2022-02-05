import { writable } from 'svelte/store';

export const path = writable('');

export const updatePath = (newPath: string) => {
  path.set(newPath);
}