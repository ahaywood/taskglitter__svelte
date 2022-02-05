<script lang="ts">
  import {clickOutside} from '../directives/clickOutside.js';
  import { fade } from 'svelte/transition';
  import Delete from "$components/icons/Delete.svelte";
  import Cancel from "$components/icons/Cancel.svelte";
  import Confirm from "$components/icons/Confirm.svelte";
  export let confirmDelete = ():void => {};
  let display = false;

  const handleClick = () => {
    display = !display;
  }

  const handleDelete = () => {
    display = false;
    confirmDelete();
  }

  const cancelDelete = () => {
    display = false;
  }

</script>

<div class="wrapper">
  <button on:click={handleClick}>
    <Delete fill="hawkesBlue" />
  </button>
  {#if display}
  <div class="confirm" transition:fade={{ duration: 250 }} use:clickOutside on:click_outside={cancelDelete}>
    <div class="really">Really?</div>
    <button on:click={cancelDelete}>
      <Cancel />
    </button>
    <button on:click={handleDelete}>
      <Confirm />
    </button>
  </div>
  {/if}
</div>

<style>
  .wrapper {
    align-items: center;
    display: flex;
    gap: 16px;
    position: relative;
    margin-bottom: 20px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .confirm {
    align-items: center;
    background: var(--lavandarIndigo);
    border-radius: 16px;
    color: var(--white);
    display: flex;
    font-weight: 500;
    padding: 16px 24px;
    position: absolute;
    right: -215px;
    top: -20px;
  }

  .confirm:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right:10px solid var(--lavandarIndigo);
    position: absolute;
    left: -10px;
    top: 25px;
  }

  .really {
    margin-right: 10px;
  }
</style>