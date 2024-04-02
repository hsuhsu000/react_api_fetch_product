import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center">Fake Store Api Products</h1>
      <section className="flex-ctr">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </section>
      {isLoading && <h1>Loading Products...</h1>}
    </>
  );
};

export default App;
