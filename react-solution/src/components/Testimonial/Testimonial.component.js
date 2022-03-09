import React from 'react'
import './Testimonial.css'

function Testimonial(props) {
    return (
        <div className="Testimonial">
            <div className="profilePicture">
                <img className="profilePicture" src={props.image} alt="profile" />
            </div>

            <p>
                {props.body}
            </p>

            <div className="customerInfo">
                <span className="customerName">{props.name}</span>
                <span className="customerTitle">{props.role}</span>
            </div>
        </div>
    );
}

export default Testimonial;
