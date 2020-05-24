import React, { useState, useEffect } from 'react';

export const Login = () => {
  const initialState = {
    email: '',
    password: '',
    isSubmitting: false,
    errorMessage: null,
  };
  const [data, setData] = useState(initialState);
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <div className="login-container">
      <div className="card">
        <div className="container">
          <form>
            <h1>Login</h1>

            <label htmlFor="email">
              Email Address
              <input
                type="text"
                value={data.email}
                onChange={handleInputChange}
                name="email"
                id="email"
              />
            </label>

            <label htmlFor="password">
              Password
              <input
                type="password"
                value={data.password}
                onChange={handleInputChange}
                name="password"
                id="password"
              />
            </label>

            {data.errorMessage && (
            <span className="form-error">{data.errorMessage}</span>
            )}

            <button disabled={data.isSubmitting}>
              {data.isSubmitting ? (
                'Loading...'
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};
export default Login;
