import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MemberList from "./MemberList";
import MemberForm from "./MemberForm";
import Payment from "./Payment";
import Charts from "./Charts";
import { Route, Switch, Redirect } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const history = useHistory();
  const [members, setMembers] = useState([]);
  const [editingMember, setEditingMember] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/");
    } else {
      fetchMembers();
    }
  }, [history]);

  const fetchMembers = async () => {
    try {
      const response = await fetch("http://localhost:8000/member/");
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error("Erreur de récupération des membres :", error);
    }
  };

  const handleAdd = () => {
    setEditingMember(null);
    setShowForm(true);
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce membre ?")) {
      try {
        await fetch(`http://localhost:8000/member/${id}/`, {
          method: "DELETE",
        });
        fetchMembers();
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
      }
    }
  };

  const handleSave = async (formData) => {
    const method = editingMember ? "PUT" : "POST";
    const url = editingMember
      ? `http://localhost:8000/member/${editingMember.id}/`
      : "http://localhost:8000/member/";

    try {
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      fetchMembers();
      setShowForm(false);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content">
          <h1>Bienvenue sur le Dashboard !</h1>
          <Charts />
          <Switch>
            <Route path="/payment" component={Payment} />
            <Route path="/dashboard">
              {showForm ? (
                <MemberForm member={editingMember} onSave={handleSave} onCancel={() => setShowForm(false)} />
              ) : (
                <MemberList members={members} onEdit={handleEdit} onDelete={handleDelete} onAdd={handleAdd} />
              )}
            </Route>
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
