import React, { useState } from "react";
import "./Form.css";

function Form({ onMemberAdded }) {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    activite: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.nom) validationErrors.nom = "Le nom complet est requis";
    if (!formData.telephone) validationErrors.telephone = "Le numéro de téléphone est requis";
    if (!formData.email) validationErrors.email = "L'adresse e-mail est requise";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = "Veuillez entrer un email valide";
    if (!formData.activite) validationErrors.activite = "Sélectionnez un type d'activité agricole";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:8000/member/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.nom,
            telephone: formData.telephone,
            email: formData.email,
            activity_type: formData.activite,
          }),
        });

        if (response.ok) {
          alert("Adhésion réussie !");
          setFormData({ nom: "", telephone: "", email: "", activite: ""});

          // Update the members list in the dashboard
          if (onMemberAdded) onMemberAdded();
        } else {
          console.error("Erreur lors de l'inscription");
        }
      } catch (error) {
        console.error("Erreur de connexion à l'API", error);
      }
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Adhésion à l'Association</h2>

        <label htmlFor="nom">Nom complet :</label>
        <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
        {errors.nom && <p className="error">{errors.nom}</p>}

        <label htmlFor="telephone">Numéro de téléphone :</label>
        <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required />
        {errors.telephone && <p className="error">{errors.telephone}</p>}

        <label htmlFor="email">Adresse e-mail :</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="activite">Type d’activité agricole :</label>
        <select id="activite" name="activite" value={formData.activite} onChange={handleChange} required>
          <option value="">Sélectionner une activité</option>
          <option value="culture">Culture</option>
          <option value="elevage">Élevage</option>
          <option value="apiculture">Apiculture</option>
          <option value="maraichage">Maraîchage</option>
          <option value="arboriculture">Arboriculture</option>
          <option value="autre">Autre</option>
        </select>
        {errors.activite && <p className="error">{errors.activite}</p>}

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Form;
