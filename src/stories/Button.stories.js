import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';

storiesOf('Button', module)
  .add('Default Button', () => <Button
    onClick={action('click')}
    label="Button"
  />)
  .add('Styled Button', () => <Button
    onClick={action('click')}
    label="Button"
    style={{background: "gray", border: "none"}}
  />)
  