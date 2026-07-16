import React from 'react'
import '../auth.form.scss'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  }

  const goToRegister = () => {
    navigate('/register');
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="Enter your email" />
          </div>
          <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required placeholder="Enter your password" />
          </div>
          <button type="submit" className="button primary-button">
            Login
          </button>
        </form>

        <p>Don't have an account? <a type="button" className="link-button" onClick={goToRegister}>Register</a></p>

      </div>
    </main>
  )
}


export default Login
