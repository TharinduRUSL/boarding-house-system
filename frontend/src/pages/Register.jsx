function Register() {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-info">
          <span className="premium-badge">📝 Create New Account</span>

          <h1>Start Your Boarding Journey</h1>

          <p>
            Register as a student, boarding owner, or admin to use the Boarding
            House Finding and Booking System.
          </p>

          <div className="register-benefits">
            <div>
              <span>👩‍🎓</span>
              <div>
                <h3>Students / Workers</h3>
                <p>Find suitable boarding places easily.</p>
              </div>
            </div>

            <div>
              <span>🧑‍💼</span>
              <div>
                <h3>Boarding Owners</h3>
                <p>Add boarding details and manage requests.</p>
              </div>
            </div>

            <div>
              <span>🛡️</span>
              <div>
                <h3>Admins</h3>
                <p>Manage users, boardings and bookings.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="register-card">
          <div className="register-card-header">
            <div className="register-icon">👤</div>
            <div>
              <h2>Create Account</h2>
              <p>Fill your details correctly.</p>
            </div>
          </div>

          <form className="register-form">
            <div className="register-grid">
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" />
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter email address" />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Create password" />
              </div>

              <div className="input-group">
                <label>Phone Number</label>
                <input type="text" placeholder="Enter phone number" />
              </div>

              <div className="input-group">
                <label>Gender</label>
                <select>
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="input-group">
                <label>Account Type</label>
                <select>
                  <option value="">Select account type</option>
                  <option value="STUDENT">Student / User</option>
                  <option value="OWNER">Boarding Owner</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
            </div>

            <button type="button" className="btn primary register-btn">
              Create Account
            </button>
          </form>

          <p className="register-login-text">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;