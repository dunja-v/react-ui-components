import React from 'react';
import Button from './Button';

const toolbarStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: '5px',
}

const buttonStyle = {
    margin: '5px',
}

const defaultButtonProps = {
    style: buttonStyle,
}

export default function Toolbar(props) {
    return <div className='Toolbar' style={{...toolbarStyles, ...props.style}}>
                {props.items.map((item, index) => <Button
                    key={"toolbar-button" + index}
                    {...{...defaultButtonProps, ...item.props}}> 
                    </Button>)}
            </div>
}