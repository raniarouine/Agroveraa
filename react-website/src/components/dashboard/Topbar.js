import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar } from "react-calendar"; // Assurez-vous d'installer react-calendar pour afficher un calendrier complet
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // Icône utilisateur
import "react-calendar/dist/Calendar.css"; // Assurez-vous d'importer le style du calendrier
import "./Dashboard.css";

const Topbar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate] = useState(format(new Date(), "EEE dd MMM yyyy")); // Format: Jeu. 22 août 2024

  // Handle click outside calendar to close it
  const handleClickOutside = (event) => {
    if (event.target.closest(".calendar-popup") || event.target.closest(".date-display")) {
      return;
    }
    setShowCalendar(false);
  };

  // Event listener for clicking outside the calendar
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="topbar">
      {/* Date display */}
      <div
        className="date-display"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        {currentDate}
      </div>

      {/* User icon */}
      <div className="user-icon">
        <FontAwesomeIcon icon={faUser} />
      </div>

      {/* Calendar Popup */}
      {showCalendar && (
        <div className="calendar-popup">
          <Calendar />
        </div>
      )}
    </div>
  );
};

export default Topbar;