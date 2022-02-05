<script lang="ts">
  export let fill: string;
</script>

<div style={`--fill: var(--${fill})`}>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.94873 4H22.0512L21.3362 18.2996C21.1766 21.4929 18.541 24 15.3437 24H8.65622C5.45898 24 2.82337 21.4929 2.66371 18.2996L1.94873 4ZM4.05123 6L4.66122 18.1997C4.76766 20.3286 6.52473 22 8.65622 22H15.3437C17.4752 22 19.2323 20.3286 19.3387 18.1997L19.9487 6H4.05123Z" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 5V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V5H18V4C18 1.79086 16.2091 0 14 0H10C7.79086 0 6 1.79086 6 4V5H8Z" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 4.44772 0.447715 4 1 4H23C23.5523 4 24 4.44772 24 5C24 5.55228 23.5523 6 23 6H1C0.447715 6 0 5.55228 0 5Z" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 10C15.5523 10 16 10.4477 16 11V16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16V11C14 10.4477 14.4477 10 15 10Z" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 10C9.55228 10 10 10.4477 10 11V16C10 16.5523 9.55228 17 9 17C8.44772 17 8 16.5523 8 16V11C8 10.4477 8.44772 10 9 10Z" />
  </svg>
</div>

<style>
  path {
    fill: var(--fill);
  }
</style>