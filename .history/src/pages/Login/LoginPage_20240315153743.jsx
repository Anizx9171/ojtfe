import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '/src/features/auth/authSlice.js';

function LoginPage() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { status, error } = useSelector((state) => state.);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username: 
          <input type="text" name="username" value={credentials.username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={credentials.password} onChange={handleChange} />
        </label>
        <button type="submit">Log In</button>
      </form>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
}
export default LoginPage;   