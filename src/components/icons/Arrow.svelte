<script lang="ts">
  export let fill: string = '';
</script>

<div style={`--fill: var(--${fill})`}>
  <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4485 6.66666L27.1247 16L18.4485 25.3333" stroke="#610BEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="25.78" y1="15.709" x2="4.87484" y2="15.709" stroke="#610BEF" stroke-width="2" stroke-linecap="round"/>
  </svg>
</div>

<style>
  path {
    fill: var(--fill);
  }
</style>