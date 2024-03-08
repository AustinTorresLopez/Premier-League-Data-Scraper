import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PlayerList = () => {
    // Fetch players data from the backend (IMPLEMENT)
    const [player, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
          try {
            const response = await fetch('http://localhost:8080/api/v1/player');
            const data = await response.json();
            setPlayers(data);
          } catch (error) {
            console.error('Error fetching players:', error);
          }
        };
    
        fetchPlayers();
      }, []);

    return (
        <div>
            <h2>Player List</h2>
            <u1>
            {player.map((player) => (
                    <li key={player.id}> 
                    <Link to={`/players/${player.id}`}>{player.name}</Link>
                    </li>
                ))}
            </u1>
        </div>
    );
};

export default PlayerList;