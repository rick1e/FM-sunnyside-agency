import React from 'react'
import './Descriptor.css'

function Descriptor(props) {
    return (
        <div className="Descriptor">
            <img src={props.image} alt={props.title} />
            <div className="description" style={{ color: props.color }}>
                <span className="description-title">{props.title}</span>
                <p style={{ color: props.color }}>{props.body}</p>
            </div>
        </div>
    );
}

export default Descriptor;
