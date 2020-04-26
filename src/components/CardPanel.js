import React from 'react';
import Card from './Card'

const cardPanelStyle = {
    display: 'flex',
    flexWrap: 'wrap',
}

const defaultCardProps = {
    style: {
        margin: '10px',
    }
}

export default function CardPanel(props) {
    return <div style={{...cardPanelStyle, ...props.style}}>
        {props.items.map((item, index) => <Card
                    key={"panel-card" + index}
                    {...{...defaultCardProps, ...item.props}}> 
                    </Card>)}
    </div>
  }