
import React, { useState, useEffect } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    Password: '',
    ConfirmPassword: '',
  });
  const [strength, setStrength] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!formData.Password) {
      setStrength('');
    } else if (formData.Password.length < 8) {
      setStrength('Weak');
    } else if (formData.Password.match(/[A-Z]/) && formData.Password.match(/[0-9]/)) {
      setStrength('Strong');
    } else {
      setStrength('Medium');
    }
  }, [formData.Password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.Password !== formData.ConfirmPassword) {
      setMessage('❌ Passwords do not match!');
      return;
    }
    setMessage('✅ Account created successfully!');
    console.log('Account created with:', formData);

   alert(JSON.stringify(formData),"formdata") ;
   setFormData({ name: '', Password: '', ConfirmPassword: '' });
  };

  return (
    <section id="Footer">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Sign in</h2>

        <div className="form-group">
          <label>User Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your UserName" required />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="Password" value={formData.Password} onChange={handleChange} placeholder="Enter your Password" required />
          <p style={{ color: strength === 'Strong' ? 'green' : strength === 'Medium' ? 'orange' : 'red' }}>{strength}</p>
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="ConfirmPassword" value={formData.ConfirmPassword} onChange={handleChange} placeholder="Confirm your Password" required />
        </div>

        {message && <p style={{ marginTop: '10px' }}>{message}</p>}

        <button className="submit-btn" type="submit">Create an Account</button>
      </form>
    </section>
  );
}

export default Form;
