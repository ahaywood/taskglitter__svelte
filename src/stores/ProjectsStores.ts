import supabase from '$utils/db'
import { writable } from 'svelte/store';

export const projects = writable([]);

export const getProjectList = async () => {
  const projectSubscription = supabase
    .from('projects')
    .on('*', payload => {
      console.log('Change received!', payload)
    })
    .subscribe()

  fetchProjects();
  console.log(projectSubscription);
}

// Reference: https://sjorswijsman.medium.com/setting-up-supabase-with-sveltekit-f6234fa1b54b
export const fetchProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select()
  if (error) throw new Error(error.message)
  return data;
}

export const addProject = async (project) => {
  const { data, error } = await supabase
    .from('projects')
    .insert([
      {
        name: project.name,
        // owner: project.owner
      },
    ]);
  if (error) throw new Error(error.message);
  return data;
}