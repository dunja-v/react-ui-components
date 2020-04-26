import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { faHome, faAtom } from "@fortawesome/free-solid-svg-icons";

import IconButton from '../components/IconButton';

storiesOf('Icon Button', module)
  .add('Default Icon Button', () => <IconButton
    onClick={action('click')}
    icon={faHome}
  />)
  .add('Styled Icon Button', () => <IconButton
    onClick={action('click')}
    style={{background: "gray", color:"white"}}
    icon={faHome}
  />)
  .add('Atom Icon Button', () => <IconButton
    onClick={action('click')}
    icon={faAtom}
  />)
  