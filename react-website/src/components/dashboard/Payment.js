import React, { useState, useEffect } from "react";
import "./Payment.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import PaymentForm from "./PaymentForm"; // Importer le formulaire

const Payment = () => {
  const [payments, setPayments] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await fetch("http://localhost:8000/payment/");
      const data = await response.json();
      setPayments(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des paiements", error);
    }
  };

  const handleEdit = (payment) => {
    setSelectedPayment(payment);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce paiement ?")) {
      try {
        await fetch(`http://localhost:8000/payment/${id}/`, { method: "DELETE" });
        fetchPayments();
      } catch (error) {
        console.error("Erreur lors de la suppression", error);
      }
    }
  };

  const handleAdd = () => {
    setSelectedPayment(null);
    setIsFormOpen(true);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content">
          <h1>Gestion des paiements</h1>
          <div className="payment-list">
            <div className="header">
              <h2>Liste des paiements</h2>
              <button className="add-btn" onClick={handleAdd}>Ajouter</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Téléphone</th> {/* Ajout de la colonne téléphone */}
                  <th>Statut de Paiement</th>
                  <th>Date de Paiement</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.length > 0 ? (
                  payments.map((payment) => (
                    <tr key={payment.id}>
                      <td>{payment.name}</td>
                      <td>{payment.phone}</td> {/* Affichage du téléphone */}
                      <td>
                        <span
                          style={{
                            backgroundColor: payment.payment_status === "paid" ? "green" : "red",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                          }}
                        >
                          {payment.payment_status === "paid" ? "A payé" : "N'a pas payé"}
                        </span>
                      </td>
                      <td>{payment.payment_date}</td>
                      <td>
                        <button className="edit-btn" onClick={() => handleEdit(payment)}>Modifier</button>
                        <button className="delete-btn" onClick={() => handleDelete(payment.id)}>Supprimer</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">Aucun paiement trouvé</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isFormOpen && <PaymentForm payment={selectedPayment} onClose={() => setIsFormOpen(false)} onPaymentUpdated={fetchPayments} />}
    </div>
  );
};

export default Payment;
