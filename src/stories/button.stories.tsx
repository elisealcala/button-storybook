import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { Button } from '../components/button';

storiesOf('Button', module)
  .add(
    'default',
    () => (
      <div className="flex p-10 max-w-xs">
        <Button
          disabled={boolean('disabled', false)}
          label={text('label', 'Button')}
        />
      </div>
    ),
    { info: { inline: true } },
  )
  .add('small', () => (
    <div className="flex p-10 max-w-xs">
      <Button
        small
        disabled={boolean('disabled', false)}
        label={text('label', 'Button')}
      />
    </div>
  ))
  .add('inverse', () => (
    <div className="flex p-10 max-w-xs">
      <Button
        inverse
        disabled={boolean('disabled', false)}
        label={text('label', 'Button')}
      />
    </div>
  ));
