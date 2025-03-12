import React, { useState } from "react";
import axios from "axios";
import "./LoginPopup.css";

function LoginPopup({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validateForm = () => {
    let validationErrors = {};
    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      axios
        .post("http://127.0.0.1:8000/login/", {
          email,
          password,
        })
        .then((response) => {
          if (response.data.status) {
            // On success, store token in localStorage and redirect to dashboard
            localStorage.setItem("token", response.data.data.token);
            window.location.href = "/dashboard"; // Redirect to Dashboard
          } else {
            setErrorMessage("Invalid credentials");
          }
        })
        .catch((error) => {
          setErrorMessage("An error occurred, please try again");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={handleSubmit}>
        <div className="user-icon-circle">
          <i className="fas fa-user"></i>
        </div>
        <h3>ADMIN</h3>

        <div className="input-with-icon">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Entrez votre email"
            className={errors.email ? "error" : ""}
          />
          <i className="fas fa-envelope icon"></i>
        </div>
        {errors.email && <p className="error-text">{errors.email}</p>}

        <div className="input-with-icon">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Entrez votre mot de passe"
            className={errors.password ? "error" : ""}
          />
          <i className="fas fa-key icon"></i>
        </div>
        {errors.password && <p className="error-text">{errors.password}</p>}

        {errorMessage && <p className="error-text">{errorMessage}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Connecting..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
}

export default LoginPopup;
