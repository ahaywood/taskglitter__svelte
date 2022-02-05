<script lang="ts">
  import Arrow from "$components/icons/Arrow.svelte";

  export let placement: string;
  export let link: string;
</script>

<a
  href={link}
  class="wrapper"
  class:right={placement === 'right'}
  class:left={placement === 'left'}
  >
  <div class="triangle">
  </div>
  <div class="arrow">
    <Arrow />
  </div>
</a>

<style>
  .wrapper {
    position: absolute;
    overflow: hidden;
    width: 100px;
    height: 100px;
    top: 0;

  }

  .wrapper.right {
    right: 0;
  }

  .wrapper.left {
    left: 0;
  }

  .triangle {
    background: var(--melrose);
    display: block;
    height: 200px;
    width: 200px;
    position: relative;
    top: -150px;
    transform: rotate(45deg);
  }

  a:hover .triangle {
    background: var(--goldenTainoi);
  }

  .wrapper.left .triangle {
    left: -100px;
  }

  .arrow {
    position: absolute;
  }

  .wrapper.right .arrow {
    right: 14px;
    top: 12px;
  }

  .wrapper.left .arrow {
    left: 10px;
    top: 5px;
    transform: rotate(180deg);
  }
</style>