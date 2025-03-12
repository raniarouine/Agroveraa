import React, { useState } from 'react';
import './ForgetPassword.css';

function ForgetPassword({ closePopup }) {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const validateForm = () => {
    let validationErrors = {};
    if (!email) validationErrors.email = 'Email is required';
    if (!newPassword) validationErrors.newPassword = 'New password is required';
    if (newPassword !== confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        alert('Password reset successful. Please log in again.');
        closePopup(); // Close the popup on success
      }, 1000); // Simulating a delay
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-btn" onClick={closePopup}>×</button>

        <form onSubmit={handleSubmit} className="popup-content">
          <h3>Réinitialiser le mot de passe</h3>

          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <label>Nouveau mot de passe:</label>
          <input
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            className={errors.newPassword ? 'error' : ''}
          />
          {errors.newPassword && <p className="error-text">{errors.newPassword}</p>}

          <label>Confirmer le mot de passe:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={errors.confirmPassword ? 'error' : ''}
          />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Réinitialisation...' : 'Réinitialiser le mot de passe'}
          </button>
          {errors.reset && <p className="error-text">{errors.reset}</p>}
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
