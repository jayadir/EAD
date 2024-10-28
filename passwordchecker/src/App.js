import './App.css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [strength, setStrength] = useState('');

  const checkStrength = (password) => {
    const isLongEnough = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNum = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!isLongEnough) {
      return 'Minimum 8 characters are required';
    } else if (isLongEnough && hasLower && hasUpper && hasNum && hasSymbol) {
      return 'Strong';
    } else if (isLongEnough && hasLower && (hasUpper || hasNum || hasSymbol)) {
      return 'Medium';
    } else {
      return 'Weak'; 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${user}, Password Strength: ${strength}`);
  };

  const handlePassChange = (e) => {
    const newPass = e.target.value;
    setPass(newPass);
    setStrength(checkStrength(newPass));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Username:</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label>
          <input
            type="password"
            value={pass}
            onChange={handlePassChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>Password Strength: {strength}</strong>
        </div>
        <button type="submit" style={{ padding: '10px 15px' }}>Login</button>
      </form>
    </div>
  );
}

export default App;
