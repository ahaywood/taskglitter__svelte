<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Drag from "$components/icons/Drag.svelte";
  import Edit from "$components/icons/Edit.svelte";
  import DeleteItem from "$components/DeleteItem.svelte";
  import Confirm from "$components/icons/Confirm.svelte";
  import Cancel from "$components/icons/Cancel.svelte";

  export let id: number;
  export let isCompleted: boolean;
  export let dateCompleted: string = "";
  export let name: string = '';

  let edit: Boolean = false;

  const toggleEditMode = () => {
    edit = !edit;
  }
</script>

<div class="wrapper">
  {#if !edit}
  <div class="taskItem" in:fly|local={{ x: 50, duration: 500 }} out:fly|local={{ x: 50, duration: 500 }}>
    <button class="drag"><Drag /></button>
    <input type="checkbox" id={`task-${id}`} name={`task-${id}`} bind:checked={isCompleted} />
    <label class="taskName" for={`task-${id}`}>{name}</label>

    <div class="icons">
      {#if isCompleted}<div class="date">{dateCompleted}</div>{/if}
      <button class="edit" on:click={ toggleEditMode }>
        <Edit fill="hawkesBlue" />
      </button>
      <div class="delete">
        <DeleteItem />
      </div>
    </div>
  </div>
  {:else}
  <div class="editTask" in:fly|local={{ x: 50, duration: 500 }} out:fly|local={{ x: 50, duration: 500 }}>
    <div class="field">
      <input type="text" name={`taskName-${id}`} bind:value={name} />
    </div>
    <button class="btn" on:click={ toggleEditMode }><Cancel fill="hawkesBlue" /></button>
    <button class="btn"><Confirm /></button>
  </div>
  {/if}
</div>

<style>
  .wrapper {
    position: relative;
    height: 64px;
    margin: 16px;
  }

  .editTask,
  .taskItem {
    align-items: center;
    display: flex;
    gap: 16px;
    position: absolute;
    width: 100%;
  }

  input[type=checkbox] {
    display: none;
  }

  input[type=checkbox] + label {
    align-items: center;;
    display: flex;
  }

  input[type=checkbox] + label:before {
    background: var(--hawkesBlue);
    border-radius: 50%;
    content: '';
    display: inline-block;
    display: block;
    height: 32px;
    margin-right: 16px;
    width: 32px;
  }

  input[type=checkbox]:checked + label:before {
    background: var(--stormGray) url('/images/check.svg') center center no-repeat;
  }

  label {
    cursor: pointer;
  }

  input[type=checkbox]:checked + label {
    text-decoration: line-through;
  }

  .taskName {
    flex: 1;
  }

  .icons {
    align-items: center;
    display: flex;
    gap: 16px;
  }

  .date {
    text-decoration: line-through;
    font-size: .75rem;
    color: var(--spaceGray);
  }

  .delete {
    position: relative;
    top: 8px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  button.drag {
    cursor: grab;
  }

  .field {
    flex: 1;
  }

  input[type=text] {
    border: 2px solid var(--hawkesBlue);
  }
</style>