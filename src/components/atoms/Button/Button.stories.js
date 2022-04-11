import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
export default {
  title: 'Button',
  decorators: [withKnobs],
  argTypes: {
    children: {
      description: "The element(s) that should be rendered within the button",
      default: "undefined",
    },
    onClick: {
      description: "The action that is fired when the button is pressed",
    },
  },
  parameters: { docs: {
      description: {
        component:
          "The **button** is the component that should fire an action based on a click event.",
      },
    },
  },
};
export const button = () => (
  <Button
    onAddToCart={action("Add to cart clicked")}
  >
    Button
  </Button>
);
