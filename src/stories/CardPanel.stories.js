import React from 'react';
import { storiesOf } from '@storybook/react';

import CardPanel from '../components/CardPanel';

storiesOf('CardPanel', module)
  .add('Default Card', () => <CardPanel
  items={[
    {props: {title: "Card 1", subtitle: 'Some text'}},
    {props: {title: "Card 2", subtitle: 'Some more text'}},
    {props: {title: "Card 3", subtitle: 'Some more text, this time longer'}},
    {props: {title: "Card 4", subtitle: 'Even more text, longer than the one before it'}},
  ]}>
  </CardPanel>)