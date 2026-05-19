function Register() {
  return (
    <div className="page">
      <h1>Register</h1>

      <form className="form small-form">
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="text" placeholder="Phone number" />

        <select>
          <option value="">Select role</option>
          <option value="STUDENT">Student</option>
          <option value="OWNER">Boarding Owner</option>
          <option value="ADMIN">Admin</option>
        </select>

        <button type="button" className="btn primary">Register</button>
      </form>
    </div>
  );
}

export default Register;