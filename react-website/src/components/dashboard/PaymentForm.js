import React, { useState, useEffect } from "react";
import "./PaymentForm.css";

const PaymentForm = ({ payment, onClose, onPaymentUpdated }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "", // Ajout du champ phone
    payment_status: "not_paid",
    payment_date: "",
  });

  useEffect(() => {
    if (payment) {
      setFormData({
        name: payment.name,
        phone: payment.phone, // Récupérer la valeur du téléphone
        payment_status: payment.payment_status,
        payment_date: payment.payment_date,
      });
    }
  }, [payment]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = payment
      ? `http://localhost:8000/payment/${payment.id}/`
      : "http://localhost:8000/payment/";
    const method = payment ? "PUT" : "POST";

    try {
      await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      onPaymentUpdated();
      onClose();
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du paiement", error);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("payment-form-overlay")) {
      onClose();
    }
  };

  return (
    <div className="payment-form-overlay" onClick={handleOverlayClick}>
      <div className="payment-form-container" onClick={(e) => e.stopPropagation()}>
        <h2>{payment ? "Modifier le Paiement" : "Ajouter un Paiement"}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nom :</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Téléphone :</label> {/* Nouveau champ pour le téléphone */}
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Statut de Paiement :</label>
            <select
              name="payment_status"
              value={formData.payment_status}
              onChange={handleChange}
            >
              <option value="paid">A payé</option>
              <option value="not_paid">N'a pas payé</option>
            </select>
          </div>
          <div>
            <label>Date de Paiement :</label>
            <input
              type="date"
              name="payment_date"
              value={formData.payment_date}
              onChange={handleChange}
            />
          </div>
          <button type="submit">{payment ? "Modifier" : "Ajouter"}</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
