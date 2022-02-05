<script lang="ts">
  import "../app.css";
  import { path } from "$stores/GlobalStore";

  let currentPath: string = ""; // set the current page background color

  // load in the current path from the store
  $: {
    currentPath = $path;
  }
</script>

<div class={`page ${currentPath}`} style={`--background: var(--${currentPath})`}>
  <slot><!-- optional fallback --></slot>
</div>

<style>
  .page {
    background: var(--background);
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-column-gap: 20px;
    min-height: 100vh;
    min-width: 100vw;
  }
</style>