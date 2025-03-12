import React, { useState, useEffect } from "react";
import "./MemberList.css";
import MemberForm from "./MemberForm";

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await fetch("http://localhost:8000/member/");
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des membres", error);
    }
  };

  const handleEdit = (member) => {
    setSelectedMember(member);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce membre ?")) {
      try {
        await fetch(`http://localhost:8000/member/${id}/`, { method: "DELETE" });
        fetchMembers();
      } catch (error) {
        console.error("Erreur lors de la suppression", error);
      }
    }
  };

  const handleAdd = () => {
    setSelectedMember(null);
    setIsFormOpen(true);
  };

  const handlePaymentStatusChange = async (id, status) => {
    try {
      await fetch(`http://localhost:8000/member/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payment_status: status }),
      });
      fetchMembers();
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut de paiement", error);
    }
  };

  return (
    <div className="member-list">
      <div className="header">
        <h2>Liste des Membres</h2>
        <button className="add-btn" onClick={handleAdd}>Ajouter</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Téléphone</th>
            <th>Email</th>
            <th>Activité</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.length > 0 ? (
            members.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.telephone}</td>
                <td>{member.email}</td>
                <td>{member.activity_type}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(member)}>Modifier</button>
                  <button className="delete-btn" onClick={() => handleDelete(member.id)}>Supprimer</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Aucun membre trouvé</td>
            </tr>
          )}
        </tbody>
      </table>
      {isFormOpen && <MemberForm member={selectedMember} onClose={() => setIsFormOpen(false)} onMemberUpdated={fetchMembers} />}
    </div>
  );
};

export default MemberList;
