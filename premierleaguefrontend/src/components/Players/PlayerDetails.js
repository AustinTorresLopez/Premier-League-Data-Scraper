import React from 'react';
import { useParams } from 'react-router-dom';

const PlayerDetails = () => {
    const { id } = useParams();
    //Fetch player details based on the id from the backend (IMPLEMENT)
    const PlayerDetails = {}; // replace with fetched data

    return (
        <div>
            <h2>Player Details</h2>
            <p>Player ID: {id}</p>
            <p>Player Name: {PlayerDetails.name}</p>

        </div>
    );
};
export default PlayerDetails;