<script lang="ts">
  import Plus from "$components/icons/Plus.svelte";
</script>

<form action="">
  <input type="text" name="addTask" />
  <div>
    <button class="add"><Plus fill="white" /></button>
  </div>
</form>

<style>
  form {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
  }

  input[type="text"] {
    border: none;
    background: var(--athensGray);
    color: var(--stormGray);
  }

  button {
    background: var(--electricIndigo);
  }
</style>