import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../components/Card';

storiesOf('Card', module)
  .add('Default Card', () => <Card
  title='Title'
  subtitle='Subtitle'>
  </Card>)
  .add('Style Card', () => <Card
  title='Title'
  subtitle='Subtitle'
  style={{background: 'grey'}}
  titleStyle={{color: 'white'}}
  subtitleStyle={{color: 'cyan'}}>
  </Card>)