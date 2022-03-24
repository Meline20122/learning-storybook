import React from 'react';
import './ProductListItem.css';
import Card from '../../atoms/Card';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

export default function ProductListItem({data}) {
  console.log(data, 'mmm')
  return (
  <Card highlight={data.isOnSale}>
    <Heading>
    {data.name} {data.isOnSale && "(On Sale)"}
    </Heading>
    <img src={data.imageUrl} alt="" />
    <Text>{data.price}</Text>
    <Button onClick={data.onAddToCart} disabled={data.isSoldOut}>
      {data.isSoldOut ? "Sold out" : "Add to Cart"}
    </Button>
    <div id="login-box">
      <div>
        Login box here...
      </div>
    </div>
    <ul className="points">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  </Card>
  );
}
