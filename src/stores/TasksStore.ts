import supabase from '$utils/db'
import { writable } from 'svelte/store';

export const tasks = writable([]);

// fetch tasks
export const fetchTasks = async () => {
  const { data, error } = await supabase
    .from('tasks')
    .select()
  if (error) throw new Error(error.message)
  return data;
}

// add tasks
export const addTask = async (task) => {
  const { data, error } = await supabase
    .from('tasks')
    .insert([
      {
        name: task.name,
        project: task.project
      },
    ]);
  if (error) throw new Error(error.message);
  return data;
}

// edit task
export const editTask = async (task) => {
  const { data, error } = await supabase
    .from('tasks')
    .update({
      name: task.name,
      completed: task.completed
    })
    .eq('id', task.id)
  if (error) throw new Error(error.message);
  return data;
}

// delete tasks
export const deleteTask = async (task) => {
  const { data, error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', task.id)
  if (error) throw new Error(error.message);
  return data;
}