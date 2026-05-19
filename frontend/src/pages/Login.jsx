function Login() {
  return (
    <div className="page">
      <h1>Login</h1>

      <form className="form small-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button" className="btn primary">Login</button>
      </form>
    </div>
  );
}

export default Login;