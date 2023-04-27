import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TeamsContext = createContext();

const TeamsContextProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/teams") // Cambia la URL según la ubicación de tu archivo JSON Server
      .then((response) => {
        setTeams(response.data);
        console.log(response.data, "teams");
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <TeamsContext.Provider value={{ teams, error }}>
      {children}
    </TeamsContext.Provider>
  );
};

export default TeamsContextProvider;
