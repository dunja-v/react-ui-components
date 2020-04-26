import React from 'react';

const cardStyle = {
    background: 'white',
    width: '250px',
    padding: '10px 10px 20px 10px',
    outline: 'none',
    boxShadow: '3px 3px 2px grey',
    fontFamily: 'Arial',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-evenly'

}

const cardTitleStyle = {
    fontSize: '1.2em',
    padding: '0px',
    margin: '0px 0px 10px 0px',
}

const cardSubtitleStyle = {
    fontSize: '1em',
    color: 'gray',
    padding: '0px',
    margin: '0px',
}

export default function Card(props) {
    return <div style={{...cardStyle, ...props.style}}> 
        <h3 style={{...cardTitleStyle, ...props.titleStyle}}>{props.title}</h3>
        <div style={{...cardSubtitleStyle, ...props.subtitleStyle}}>{props.subtitle}</div>
    </div>
  }