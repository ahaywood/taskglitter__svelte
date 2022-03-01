<script>
  import Arrow from "$components/icons/Arrow.svelte";
</script>

<h1>Sign Up</h1>
<div class="row">
  <input type="text" name="firstName" placeholder="First Name" />
  <input type="text" name="lastName" placeholder="Last Name" />
</div>
<input type="email" name="email" placeholder="Email Address" />
<input type="password" name="password" placeholder="Password" />
<input type="password" name="confirmPassword" placeholder="Confirm Password" />
<button class="submit">
  Sign Up
  <Arrow />
</button>
<p>
  Already have an account?<br />
  <a href="/auth/login">Login</a>
</p>

<style>
  h1 {
    font-size: 3.875rem;
  }

  .row {
    display: flex;
    gap: 20px;
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
