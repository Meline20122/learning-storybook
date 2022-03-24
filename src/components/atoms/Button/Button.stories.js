import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
export default {
  title: 'Button',
  decorators: [withKnobs],
};
export const button = () => (
  <Button
    onAddToCart={action("Add to cart clicked")}
  >
    Button
  </Button>
);
