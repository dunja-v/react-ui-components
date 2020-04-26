import React from 'react';

const buttonStyles = {
    
}

const labelStyles = {
    fontFamily: 'Arial',
    paddingLeft: '5px',
}

export default function CheckboxButton(props) {
    return (<>
    <input type="checkbox" onChange={props.onChange} style={{...buttonStyles, ...props.style}}
                                id={props.checkbox_id} name={props.name} value={props.value}
                                defaultChecked={props.checkedByDefault}>
            </input>
            <span class="checkmark"></span>
            {props.label && <label for={props.value} style={{...labelStyles, ...props.labelStyle}}>
                {props.label}
            </label>}
    </>);
}