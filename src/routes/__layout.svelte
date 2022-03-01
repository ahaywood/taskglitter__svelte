<script lang="ts">
  import "../app.css";
</script>

<div class="page">
  <div class="stars-3" />
  <div class="stars-2" />
  <div class="stars-1" />

  <div class="grid">
      <slot><!-- optional fallback --></slot>
  </div>
</div>

<style>
  .page {
    background: url('/images/bg.jpg') center center no-repeat fixed;
    background-size: cover;
    min-height: 100vh;
    min-width: 100vw;
  }

  @keyframes fadeInOut {
    from {
      opacity: 0;
    }

    25% {
      opacity: .5;
    }

    75% {
      opacity: 0;
    }

    to {
      opacity: 0;
    }
  }

  .stars-1 {
    animation-duration: 5s;
    animation-delay: -2s;
    background: url('/images/stars-1.png') center center repeat;
  }

  .stars-2 {
    animation-duration: 10s;
    background: url('/images/stars-2.png') center center repeat; /* twinkle stars */
  }

  .stars-3 {
    animation-duration: 15s;
    animation-delay: -10s;
    background: url('/images/stars-1.png') 50% 50% repeat; /* twinkle stars */
  }

  .stars-1,
  .stars-2,
  .stars-3 {
    animation-name: fadeInOut;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    height: 100vh;
    left: 0;
    mix-blend-mode: screen;
    position: absolute;
    top: 0;
    width: 100vw;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-column-gap: 20px;
    height: 100vh;
    width: 100vw;
    position: relative;
    z-index: 100;
  }
</style>