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
<button>
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
    color: var(--white);
    margin-bottom: 20px;
  }

  .row {
    display: flex;
    gap: 20px;
  }

  input[type=text],
  input[type=email],
  input[type=password] {
    background: var(--electricIndigo);
    border: none;
    color: white;
    margin-bottom: 20px;
  }

  ::placeholder {
    color: var(--melrose);
  }

  button {
    background: var(--goldenTainoi);
    color: var(--purple);
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
    border: none;
    padding: 20px 0;
    border-radius: 1rem;
  }

  button:hover {
    background: white;
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
