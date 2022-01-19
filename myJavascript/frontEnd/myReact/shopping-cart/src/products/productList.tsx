import * as React from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { getProductSelector } from './productSlice';

export interface  ProductListProps {
}

export function ProductList (props:  ProductListProps) {

    // A hook to access the redux store's state. 
    // This hook takes a selector function as an argument. 
    // The selector is called with the store state.
    const product = useSelector(getProductSelector)

  return (
    <div>
        <h2>Game list available</h2>
        {product.map((game) => {
            return (
            <div key={v4()}>
            <span>{game.title} is {game.price} dollars.</span>
            </div>)  })}
    </div>
  );
}
