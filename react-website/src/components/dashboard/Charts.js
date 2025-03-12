import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import "./Charts.css";

const continentColors = {
  Africa: "#5784BA",
  Europe: "#606C5A",
  Asia: "#DB6A8F",
  America: "#FFBF66",
  Oceania: "#955149",
};

const paymentColors = {
  paid: "#528f31", 
  not_paid: "#d9534f"
};

const locations = [
  { name: "Sousse, Tunisia", continent: "Africa" },
  { name: "Mahdia, Tunisia", continent: "Africa" },
  { name: "Tozeur, Tunisia", continent: "Africa" },
  { name: "Gabès, Tunisia", continent: "Africa" },
  { name: "Algiers, Algeria", continent: "Africa" },
  { name: "Oran, Algeria", continent: "Africa" },
  { name: "Constantine, Algeria", continent: "Africa" },
  { name: "Annaba, Algeria", continent: "Africa" },
  { name: "Rabat, Morocco", continent: "Africa" },
  { name: "Cairo, Egypt", continent: "Africa" },
  { name: "Accra, Ghana", continent: "Africa" },
  { name: "Nairobi, Kenya", continent: "Africa" },
  { name: "Abuja, Nigeria", continent: "Africa" },
  { name: "Lagos, Nigeria", continent: "Africa" },
  { name: "Addis Ababa, Ethiopia", continent: "Africa" },
  { name: "Cape Town, South Africa", continent: "Africa" },
  { name: "Dakar, Senegal", continent: "Africa" },
  { name: "Abidjan, Ivory Coast", continent: "Africa" },
  { name: "Kigali, Rwanda", continent: "Africa" },
  { name: "Dar es Salaam, Tanzania", continent: "Africa" },
  { name: "Lusaka, Zambia", continent: "Africa" },
  { name: "Kampala, Uganda", continent: "Africa" },
  { name: "Gaborone, Botswana", continent: "Africa" },
  { name: "Harare, Zimbabwe", continent: "Africa" },
  { name: "Lilongwe, Malawi", continent: "Africa" },
  { name: "Mogadishu, Somalia", continent: "Africa" },
  { name: "Brussels, Belgium", continent: "Europe" },
  { name: "Antwerp, Belgium", continent: "Europe" },
  { name: "Ghent, Belgium", continent: "Europe" },
  { name: "Paris, France", continent: "Europe" },
  { name: "Madrid, Spain", continent: "Europe" },
  { name: "Berlin, Germany", continent: "Europe" },
  { name: "London, United Kingdom", continent: "Europe" },
  { name: "Rome, Italy", continent: "Europe" },
  { name: "Athens, Greece", continent: "Europe" },
  { name: "Lisbon, Portugal", continent: "Europe" },
  { name: "Amsterdam, Netherlands", continent: "Europe" },
  { name: "Oslo, Norway", continent: "Europe" },
  { name: "Copenhagen, Denmark", continent: "Europe" },
  { name: "Vienna, Austria", continent: "Europe" },
  { name: "Dublin, Ireland", continent: "Europe" },
  { name: "Tallinn, Estonia", continent: "Europe" },
  { name: "Helsinki, Finland", continent: "Europe" },
  { name: "Geneva, Switzerland", continent: "Europe" },
  { name: "Beijing, China", continent: "Asia" },
  { name: "Bangkok, Thailand", continent: "Asia" },
  { name: "Istanbul, Turkey", continent: "Asia" },
  { name: "New Delhi, India", continent: "Asia" },
  { name: "Seoul, South Korea", continent: "Asia" },
  { name: "Tokyo, Japan", continent: "Asia" },
  { name: "Dubai, UAE", continent: "Asia" },
  { name: "Jakarta, Indonesia", continent: "Asia" },
  { name: "Tehran, Iran", continent: "Asia" },
  { name: "New York City, USA", continent: "America" },
  { name: "Los Angeles, USA", continent: "America" },
  { name: "Toronto, Canada", continent: "America" },
  { name: "São Paulo, Brazil", continent: "America" },
  { name: "Buenos Aires, Argentina", continent: "America" },
  { name: "Mexico City, Mexico", continent: "America" },
  { name: "Lima, Peru", continent: "America" },
  { name: "Bogotá, Colombia", continent: "America" },
  { name: "Santiago, Chile", continent: "America" },
  { name: "Sydney, Australia", continent: "Oceania" },
  { name: "Melbourne, Australia", continent: "Oceania" },
  { name: "Auckland, New Zealand", continent: "Oceania" },
];

const getContinentCounts = () => {
  const counts = {};
  locations.forEach(({ continent }) => {
    counts[continent] = (counts[continent] || 0) + 1;
  });
  return counts;
};

const Charts = () => {
  const [chartData, setChartData] = useState([]);
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    const counts = getContinentCounts();
    const data = Object.keys(counts).map((continent) => ({
      continent,
      count: counts[continent],
      fill: continentColors[continent],
    }));
    setChartData(data);
  }, []);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await fetch("http://localhost:8000/payment/");
      const members = await response.json();
      updateCharts(members);
    } catch (error) {
      console.error("Erreur lors de la récupération des membres", error);
    }
  };

  const updateCharts = (members) => {
    // Calcul du nombre de membres payants et non payants
    const paidCount = members.filter(m => m.payment_status === "paid").length;
    const notPaidCount = members.length - paidCount;
    
    // Calcul des pourcentages
    const total = members.length;
    const paidPercentage = ((paidCount / total) * 100).toFixed(2);
    const notPaidPercentage = ((notPaidCount / total) * 100).toFixed(2);
    
    setPaymentData([
      { name: `A payé (${paidPercentage}%)`, value: paidCount, fill: paymentColors.paid },
      { name: `N'a pas payé (${notPaidPercentage}%)`, value: notPaidCount, fill: paymentColors.not_paid }
    ]);
  };

  return (
    <div className="charts-wrapper">
      <div className="chart-container">
        <h2>Localisations et Nombres des parcelles</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="continent" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#528f31" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="chart-container">
        <h2>Paiements des Membres</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie 
              data={paymentData} 
              dataKey="value" 
              nameKey="name" 
              cx="50%" 
              cy="50%" 
              outerRadius={100} 
              label
            >
              {paymentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
