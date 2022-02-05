<script lang="ts">
  import { addProject } from "$stores/ProjectsStores";
  import Plus from "$components/icons/Plus.svelte";

  let name: string = '';

  const AddNewProject = async () => {
    const project = {
      name
    }
    const results = await addProject(project);
    name = '';
  }
</script>

<form method="GET" on:submit|preventDefault ={AddNewProject} >
  <input type="text" name="project" placeholder="Add Project" bind:value={name} />
  <div>
    <button type="submit" class="add"><Plus fill="electricIndigo" /></button>
  </div>
</form>

<style>
  form {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
  }

  input {
    border: none;
    background: var(--lavandarIndigo);
    color: var(--white);
  }

  input::placeholder {
    color: var(--melrose);
  }

  button {
    background: var(--white);
  }
</style>