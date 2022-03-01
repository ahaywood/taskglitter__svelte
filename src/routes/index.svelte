<script>
  import { fetchProjects, getProjectList } from "$stores/ProjectsStores";
  import {onMount} from "svelte";
  import LogoutButton from "$components/LogOutButton.svelte";
  import AddProject from "$components/AddProject.svelte";
  import ProjectItem from "$components/ProjectItem.svelte";
  import AddTask from "$components/AddTask.svelte";
</script>

<LogoutButton />

<div class="content">
  <h1>Projects</h1>
  <AddProject />
  {#await fetchProjects()}
    <p>Loading...</p>
  {:then data}
    {#each data as project}
      <ProjectItem name={project.name} link={`/tasks/${project.id}`} />
    {/each}
  {:catch error}
    <p>Something went wrong while fetching the data:</p>
    <pre>{error}</pre>
  {/await}
</div>

<style>
  h1 {
    color: var(--babyPink);
  }
</style>