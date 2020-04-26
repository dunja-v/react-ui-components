import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const buttonStyles = {
    background: 'white',
    outline: 'none',
    border: 'none',
    fontSize: '2em',
}

export default function Button(props) {
    return <button onClick={props.onClick} style={{...buttonStyles, ...props.style}}>
                <FontAwesomeIcon icon={props.icon}/>
            </button>
  }