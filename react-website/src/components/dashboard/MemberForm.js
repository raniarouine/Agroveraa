import React, { useState, useEffect } from "react";
import "./MemberForm.css";

const MemberForm = ({ member, onClose, onMemberUpdated }) => {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    activity_type: "",
  });

  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name,
        telephone: member.telephone,
        email: member.email,
        activity_type: member.activity_type,
      });
    }
  }, [member]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = member
      ? `http://localhost:8000/member/${member.id}/`
      : "http://localhost:8000/member/";
    const method = member ? "PUT" : "POST";

    try {
      // Enlever le champ "payment_status" du formData avant de l'envoyer
      const { payment_status, ...dataToSend } = formData;
      await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });
      onMemberUpdated();
      onClose();
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du membre", error);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("member-form-overlay")) {
      onClose();
    }
  };

  return (
    <div className="member-form-overlay" onClick={handleOverlayClick}>
      <div className="member-form-container" onClick={(e) => e.stopPropagation()}>
        <h2>{member ? "Modifier le Membre" : "Ajouter un Membre"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="member-form-input-group">
            <div className="member-form-input-with-icon">
              <label>Nom :</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="member-form-input-with-icon">
              <label>Téléphone :</label>
              <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required />
            </div>
          </div>

          <div className="member-form-input-group">
            <div className="member-form-input-with-icon">
              <label>Email :</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>

          <div className="member-form-input-group">
            <div className="member-form-input-with-icon">
              <label>Activité :</label>
              <input type="text" name="activity_type" value={formData.activity_type} onChange={handleChange} required />
            </div>
          </div>

          <button type="submit" className="member-form-submit">{member ? "Modifier" : "Ajouter"}</button>
        </form>
      </div>
    </div>
  );
};

export default MemberForm;
