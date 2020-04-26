import React from 'react';

const buttonStyles = {
    background: 'white',
    fontSize: '1em',
    width: '150px',
    padding: '10px',
    borderRadius: '5px',
    outline: 'none',
    border: '3px solid #66d9ff',
}

export default function Button(props) {
    return <button onClick={props.onClick} style={{...buttonStyles, ...props.style}}>
                {props.label && <span>{props.label}</span>}
            </button>
  }