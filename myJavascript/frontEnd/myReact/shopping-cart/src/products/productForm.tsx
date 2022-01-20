import * as React from 'react';
import { useAppDispatch } from '../store';
import { addProduct, Product } from './productSlice';

// state in form recommended to be local, not in Redux store.
export function ProductForm () {

  const dispatch = useAppDispatch()
  const [product, setProduct] = React.useState<Product>({
    id : '',
    title : '',
    price : 0 
  })

  // when single HTMLInputElement state changes => event : React.ChangeEvent<HTMLInputElement>
  // when multiple HTMLInputElement => { target : { name, value }} : React.ChangeEvent<HTMLInputElement>
  const handleChange = ( { target : { name, value }} : React.ChangeEvent<HTMLInputElement> ) => {

    // setProduct takes an argument, which is a previous state(Product)
    setProduct( prev => { 
      
      // Object[input name] = input value
      (prev as any)[name] = value
      const newValue = { ...prev }
      return newValue
    })
  }

  const handleSubmit = (event : React.FormEvent) => {
    event.preventDefault() // prevent that input values are displayed in URL
    console.log( product.id, product.title, product.price )
    dispatch(addProduct(product))
  }

  return (
    <div>
      <h2>Add Game To Store</h2>
      <form onSubmit={handleSubmit}>
        {/* input name and value are used above useState(setState) */}
        <input type="text" name="title" id="title" placeholder='title' value={product.title} onChange={handleChange} />
        <input type="text" name="price" id="price" placeholder='price' value={product.price} onChange={handleChange} />
        <input type="text" name="id" id="id" placeholder='id' value={product.id} onChange={handleChange} />
        <button type='submit'>Add price</button>
      </form>
    </div>
  );
}
