import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TeamsContext = createContext();

const TeamsContextProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/teams")
      .then((response) => {
        setTeams(response);
        console.log(teams, "teams");
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <TeamsContext.Provider value={{ teams }}>{children}</TeamsContext.Provider>
  );
};

export default TeamsContextProvider;
