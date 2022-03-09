import React from 'react'
import './Blurb.css'

function Blurb(props) {
  return (
    <div className="Blurb">
      <h1>
        {props.title}
      </h1>

      <p>
        {props.body}
      </p>

      <div className="action">
        LEARN MORE
        <div style={{ background: props.highlightColour }} className="highlight">
        </div>
      </div>
    </div>
  );
}

export default Blurb;