import React from 'react';
import { useParams } from 'react-router-dom';

const TeamDetails = () => {
    const { id } = useParams();
    // Fetch team details based on the id from the backend (IMPLEMENT)

    return (
        <div>
            <h2>Team Details</h2>
            <p>Team ID: {id}</p>
            <p>Team Name: {TeamDetails.name}</p>
            
        </div>
    );
};
export default TeamDetails;   