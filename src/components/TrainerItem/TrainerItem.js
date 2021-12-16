import React from 'react'
import { Link } from 'react-router-dom'
import userProfileAPI from '../../api/userProfileAPI';
import './TrainerItem.css'

function TrainerItem() {
    let id = 1;
    let response = userProfileAPI.getProfileTrainer();

    console.log(response);
     
    return (
        <div className="col l-3 m-4 c-6">
            <Link to={`detail/${id}`} className="trainer-link">
                <div className="trainer-wrapper">
                    
                </div>
            </Link>
        </div>
    )
}

export default TrainerItem
