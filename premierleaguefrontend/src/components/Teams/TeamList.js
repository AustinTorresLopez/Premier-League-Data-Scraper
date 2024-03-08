import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const TeamList = () => {
    //Fetch team data from backend (IMPLEMENT)
    const [team, setTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
          try {
            const response = await fetch('http://localhost:8080/api/v1/player?teams');
            const data = await response.json();
            setTeams(data);
          } catch (error) {
            console.error('Error fetching teams:', error);
          }
        };
    
        fetchTeams();
      }, []);

    return (
        <div>
            <h2>Team List</h2>
            <u1>
                {team.map((team) => (
                    <li key={team.id}> 
                    <Link to = {'/teams/${team.id}'}>{team.name}</Link>
                    </li>
                ))}
            </u1>
        </div>
    );
};

export default TeamList;