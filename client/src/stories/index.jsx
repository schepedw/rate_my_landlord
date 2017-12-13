import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button/Button';

storiesOf('Button', module)
  .add('with text', () => <Button handleClick={() => console.log('swag')} >Hello Button</Button>)
  .add('with some emoji', () => (<Button onClick={action('clicked')}>
    <span role="img" aria-label="lol">😀 😎 👍 💯</span>
  </Button>));
