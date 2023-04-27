import React, { useContext } from 'react';
import { TeamsContext } from '../context/SquadContext';

export const TeamCard = () => {
  // const teams = useContext(TeamsContext);
  console.log(teams, 'teams');

  return <div>Teams data: {JSON.stringify(teams)}</div>;
};
