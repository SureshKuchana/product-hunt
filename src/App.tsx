import { useState } from 'react';
import Product from './components/Product';
import ProductList from './components/ProductList';
import { productsData, sortData } from './util';
import { Products } from './types';

function App() {
  const data = sortData(productsData);
  const [products, setProducts] = useState<Products[]>(data);

  const handleProductUpVote = (productId: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, votes: product.votes + 1 };
      } else {
        return product;
      }
    });
    const sortedProducts = sortData(updatedProducts);
    setProducts(sortedProducts);
  };

  return (
    <ProductList>
      {products.length > 0 &&
        products.map((product) => {
          return (
            <Product
              id={product.id}
              key={`product-${product.id}`}
              title={product.title}
              description={product.description}
              url={product.url}
              votes={product.votes}
              submitterAvatarUrl={product.submitterAvatarUrl}
              productImageUrl={product.productImageUrl}
              upVote={handleProductUpVote}
            />
          );
        })}
    </ProductList>
  );
}

export default App;
