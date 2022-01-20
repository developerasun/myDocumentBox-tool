import * as React from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { addToCart } from '../cart/cart.slice';
import { useAppDispatch } from '../hooks/store.hooks';
import { getProductSelector, Product, removeProduct } from './productSlice';

export function ProductList () {

    // A hook to access the redux store's state. 
    // This hook takes a selector function as an argument. 
    // The selector is called with the store state.
    const product = useSelector(getProductSelector)
    const dispatch = useAppDispatch()
    const removeFromStore = (id : string) => {
      // Dispatches a synthetic event event to target
      dispatch(removeProduct(id))
    }

    const addToCartHandler = (product:Product) => {
      dispatch(addToCart(product))
    }


  return (
    <div>
        <h2>Game list available</h2>
        {product.map((game) => {
            return (
            <div key={v4()}>
              <span>{game.title} is {game.price} dollars.</span>
              <button onClick={()=>addToCartHandler(game)}>Add to cart</button>
              <button onClick={()=>removeFromStore(game.id)}>Remove from store</button>
            </div>)  })}
    </div>
  );
}
