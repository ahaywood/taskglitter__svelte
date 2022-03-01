<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import DeleteItem from "$components/DeleteItem.svelte";
  import Edit from "$components/icons/Edit.svelte";
  import Confirm from "$components/icons/Confirm.svelte";
  import Cancel from "$components/icons/Cancel.svelte";

  export let name: string;
  export let link: string;

  let edit: Boolean = false;

  const toggleEditMode = () => {
    edit = !edit;
  }
</script>

<div class="wrapper">
{#if !edit}
  <div class="project-item" in:fly|local={{ x: 50, duration: 500 }} out:fly|local={{ x: 50, duration: 500 }}>
    <h2><a href={link}>{name}</a></h2>
    <div class="icons">
      <button class="btn edit" on:click={toggleEditMode}><Edit fill="melrose" /></button>
      <DeleteItem />
    </div>
  </div>
{:else}
  <div class="project-item" in:fly|local={{ x: 50, duration: 500 }} out:fly|local={{ x: 50, duration: 500 }}>
      <div class="field"><input type="text" name="projectName" bind:value={name} /></div>
      <button class="btn" on:click={toggleEditMode}><Cancel /></button>
      <button class="btn"><Confirm /></button>
  </div>
{/if}
</div>

<style>
  .wrapper {
    position: relative;
    height: 82px;
    width: 100%;
    display: block;
  }

  .project-item {
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    position: absolute;
    width: 100%;
  }

  h2 {
    font-size: 3.875rem;
    font-weight: 900;
    line-height: 1;
    margin: 0 0 20px;
    padding: 0;
  }

  h2 a {
    color: var(--white);
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 42vw;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 72px;
  }

  h2 a:hover {
    color: var(--goldenTainoi);
  }

  .icons {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
  }

  .btn {
    background: none;
    border: none;
    cursor: pointer;
  }

  .btn.edit {
    margin-bottom: 20px;
  }

  .field {
    flex: 1;
  }

  input[type=text] {
    width: 100%;
  }
</style>