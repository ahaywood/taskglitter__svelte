<script>
  import "../../app.css";
  import {onMount} from "svelte";
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