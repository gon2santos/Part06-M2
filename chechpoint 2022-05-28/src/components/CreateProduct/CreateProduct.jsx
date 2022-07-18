import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateProduct = () => {

   const [description, setDescription] = useState('');
   const [name, setName] = useState('');
   const [price, setPrice] = useState(0);
   const [stock, setStock] = useState(0);

  /*  useEffect(() => {
      setName('');
      setDescription('');
      setPrice(0);
      setStock(0);
   }) */

   return (
      <div>
         <div>Create Product</div>
         <form onSubmit={(e) => handleSubmit(e)}>
            <div>
               <label>Name: </label>
               <input name="name" type="text" value={name} placeholder="" onChange={(e) => setName(e.target.value)}/>
               <label>Price: </label>
               <input name="price" type="number" value={price} placeholder="0" onChange={(e) => setPrice(e.target.value)}/>
               <label>Description: </label>
               <textarea name="description" value={description} placeholder="" onChange={(e) => setDescription(e.target.value)}/>
               <label>Stock: </label>
               <input name="stock" type="number" value={stock} placeholder="0" onChange={(e) => setStock(e.target.value)}/>
            </div>
            <button type="submit">Create Product</button>
         </form>
      </div>
   );
};

const handleSubmit = (event) => {
   event.preventDefault();
 }


export default CreateProduct;
