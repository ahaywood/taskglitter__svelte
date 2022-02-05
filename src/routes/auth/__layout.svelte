<script>
  import "../../app.css";
  import { updatePath } from "$stores/GlobalStore";
  import {onMount} from "svelte";

  onMount(() => {
    updatePath("auth");
  });
</script>

<div class="wrapper">
  <slot><!-- optional fallback --></slot>
</div>

<style>
  .wrapper {
    align-self: center;;
    grid-column: 5 / span 4;
  }

</style>