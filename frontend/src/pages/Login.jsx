function Login() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <span className="premium-badge">🔐 User Login</span>

          <h1>Welcome Back</h1>

          <p>
            Login to search boardings, request bookings, manage your boarding
            details, and track booking status.
          </p>

          <div className="auth-feature-list">
            <div>🏠 Find suitable boardings</div>
            <div>📩 Track booking requests</div>
            <div>👤 Manage your account</div>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-icon">🔑</div>

          <h2>Login</h2>
          <p>Enter your email and password to continue.</p>

          <form className="auth-form">
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>

            <button type="button" className="btn primary auth-btn">
              Login
            </button>
          </form>

          <p className="auth-footer-text">
            Don&apos;t have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;