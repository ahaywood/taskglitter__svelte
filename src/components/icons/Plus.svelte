<script lang="ts">
  export let fill: string = '';
</script>

<div style={`--fill: var(--${fill})`}>
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 13.0706H13.2863V22H8.71372V13.0706H0V8.92941H8.71372V0H13.2863V8.92941H22V13.0706Z"/>
  </svg>
</div>

<style>
  path {
    fill: var(--fill);
  }
</style>