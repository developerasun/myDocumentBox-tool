import * as React from 'react';

export interface IProductFormProps {
}

export function ProductForm (props: IProductFormProps) {
  return (
    <div>
      <h2>Add Game To Store</h2>
      <form>
        <input type="text" name="" id="" placeholder='title'/>
        <input type="text" name="" id="" placeholder='price'/>
        <button>Add price</button>
      </form>
    </div>
  );
}
