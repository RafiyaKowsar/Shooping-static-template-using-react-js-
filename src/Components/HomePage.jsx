import React from "react";

const HomePage =() =>{

const ladiesFashion = [
  {
    
    name: "western wear tops",
    price: 2999,
    category: "Ladies",
    description: "Lightweight western wear tops",
   inStock: true
  },
 
  // more products...
];

const menFashion = [
  {
 
    name: "Slim Fit T-Shirt",
    price: 1999,
    category: "Men",
    description: "Cotton slim fit T-shirt",
    inStock: true
  },
  // more products...
];

const kidFashion = [
  {
  
    name: "Kids Dresses",
    price: 2499,
    category: "Kids",
    description: "Kids Dresses for boys and girls",
    inStock: true
  },
  // more products...
];


 return(
      <div className="b1">
      {ladiesFashion.map((x,i)=>{
        return(
            <div key={i}>
              
              <p>name:{x.name} </p>
             <p> price: {x.price}</p>
             <p>category:  {x.category }</p>
            <p>  description:{x.description} </p>

            </div>
        )
      })}
       {menFashion .map((x,i)=>{
        return(
            <div key={i}>
              <p>id:{x.id}</p> 
              <p>name:{x.name} </p>
             <p> price: {x.price}</p>
             <p>category:  {x.category }</p>
            <p>  description:{x.description} </p>

            </div>
        )
      })}
       {kidFashion.map((x,i)=>{
        return(
            <div key={i}>
              
              <p>name:{x.name} </p>
             <p> price: {x.price}</p>
             <p>category:  {x.category }</p>
            <p>  description:{x.description} </p>

            </div>
        )
      })}
      </div> 
 )

}
export default HomePage