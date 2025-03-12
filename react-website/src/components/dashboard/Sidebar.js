import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faSignOutAlt, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css"; // Importer le fichier CSS

const Sidebar = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push("/"); // Redirection vers la page d'accueil
  };

  const handlePaymentClick = () => {
    history.push("/payment"); // Redirection vers la page des paiements
  };

  return (
    <div className="sidebar">
      {/* Logo et Nom de l'entreprise SANS redirection */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          Agrovera
          <img src="/images/img18.png" alt="Logo" className="sidebar-logo-img" />
        </div>
      </div>

      <div className="separator"></div>

      {/* Menu de navigation */}
      <ul>
        <li onClick={() => history.push("/dashboard")} className="dashboard">
          <FontAwesomeIcon icon={faTachometerAlt} />
          <span>Dashboard</span>
        </li>

        <li onClick={handlePaymentClick} className="paiement">
          <FontAwesomeIcon icon={faDollarSign} />
          <span>Paiement</span>
        </li>

        <li onClick={handleLogout} className="logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Déconnecter</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
