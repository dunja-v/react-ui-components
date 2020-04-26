import React from 'react';
import { storiesOf } from '@storybook/react';

import Toolbar from '../components/Toolbar';

storiesOf('Toolbar', module)
  .add('Default Toolbar with 3 Buttons', () => <Toolbar
    items={[
        {props: {label: "Button 1"}},
        {props: {label: "Button 2"}},
        {props: {label: "Button 3"}},
    ]}
  />)
