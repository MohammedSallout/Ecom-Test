import { useState, useEffect } from "react";

function App () {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .then((data) => setProducts(data));
  }, [])

  return (
    <>
      <h1>Welcome React</h1>
      <br />
      {products.map(product => {
        return(
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>{`Price: $${product.price}`}</span>
          </div>
        )
      })}
    </>
  )
}

export default App
