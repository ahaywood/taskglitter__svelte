<script>
  import Arrow from "$components/icons/Arrow.svelte";
</script>

<h1>Login</h1>
<input type="email" name="email" placeholder="Email Address" />
<input type="password" name="password" placeholder="Password" />
<button class="submit">
  Log In
  <Arrow />
</button>
<p>
  Don't already have an account<br />
  <a href="/auth/signup">Create an account</a>
</p>

<style>
  h1 {
    font-size: 3.875rem;
  }

  p {
    color: white;
  }

  p a {
    font-weight: bold;
    color: white;
    font-size: 1rem;
    line-height: 2;
  }

  p a:hover {
    text-decoration: none;
  }
</style>
