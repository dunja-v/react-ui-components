import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CheckboxButton from '../components/CheckboxButton';

storiesOf('Checkbox', module)
  .add('Default Checkbox with no Label', () => <CheckboxButton
    onChange={action('click')}
    checkbox_id="id"
    name="name"
    value="value"
    checkedByDefault={false}
  />).add('Default Checkbox with Label', () => <CheckboxButton
    onChange={action('click')}
    checkbox_id="id"
    name="name"
    value="value"
    checkedByDefault={false}
    label="Label text"
/>).add('Default Checkbox with Styled Label', () => <CheckboxButton
    onChange={action('click')}
    checkbox_id="id"
    name="name"
    value="value"
    checkedByDefault={false}
    label="Label text"
    labelStyle={{color: "blue"}}
/>)