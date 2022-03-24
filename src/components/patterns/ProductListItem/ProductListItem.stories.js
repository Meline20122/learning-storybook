import React from 'react';
import ProductListItem from './ProductListItem';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
export default {
  title: 'ProductListItem',
  decorators: [withKnobs],
};
const standartData = {
  name: text("Name", "Standard Coffee"),
  price: text("price", "2.50"),
  onAddToCart: action("Add to cart clicked"),
  imageUrl: text("imageUrl", "https://source.unsplash.com/tNALoIZhqVM/200x100/"),
  isOnSale: true,
}
const soldOutData = {
  name: text("Name", "Standard Coffee"),
  price: text("price", "2.50"),
  onAddToCart: action("Add to cart clicked"),
  imageUrl: text("imageUrl", "https://source.unsplash.com/ tNALoIZhqVM/200x100/"),
  isSoldOut: true,
}
export const standard = () => (
  <ProductListItem
    data={standartData}
  />
);

export const soldOut = () => (
  <ProductListItem
    data={soldOutData}
  />
);

