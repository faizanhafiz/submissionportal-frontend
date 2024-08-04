import { useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
function Signup() {

                  const [email, setEmail] = useState('');
                  const [password, setPassword] = useState('');
                  const [confirmPassword, setConfirmPassword] = useState('');
                  const [error, setError] = useState('');

                  const handleSubmit = (e) => {
                                    e.preventDefault();

                                    if (password !== confirmPassword) {
                                                      setError('Passwords do not match');
                                                      return;
                                    }

                                    // Implement your signup logic here
                                    // Example: call an API to register the user
                                    window.alert('Email: '+email);
                                    window.alert('Password:'+ password);

                                    // Clear the form and error message after successful submission
                                    setEmail('');
                                    setPassword('');
                                    setConfirmPassword('');
                                    setError('');
                  };

                  return (<div className="signup-container">
                                    <h2>Sign Up</h2>
                                    {error && <p className="error">{error}</p>}
                                    <form onSubmit={handleSubmit}>
                                                      <div className="input-group">
                                                                        <label htmlFor="email">Email</label>
                                                                        <input
                                                                                          type="email"
                                                                                          id="email"
                                                                                          name="email"
                                                                                          value={email}
                                                                                          onChange={(e) => setEmail(e.target.value)}
                                                                                          required
                                                                        />
                                                      </div>
                                                      <div className="input-group">
                                                                        <label htmlFor="password">Password</label>
                                                                        <input
                                                                                          type="password"
                                                                                          id="password"
                                                                                          name="password"
                                                                                          value={password}
                                                                                          onChange={(e) => setPassword(e.target.value)}
                                                                                          required
                                                                        />
                                                      </div>
                                                      <div className="input-group">
                                                                        <label htmlFor="confirm-password">Confirm Password</label>
                                                                        <input
                                                                                          type="password"
                                                                                          id="confirm-password"
                                                                                          name="confirm-password"
                                                                                          value={confirmPassword}
                                                                                          onChange={(e) => setConfirmPassword(e.target.value)}
                                                                                          required
                                                                        />
                                                      </div>
                                                      <button type="submit">Sign Up</button>
                                    </form>

                                    <small>
                I have already an account{' '}
                <Link to="/login" style={{ cursor: 'pointer', color: 'blue',padding:'10px' }}>
                    login
                </Link>
            </small>
                  </div>)
}

export default Signup;