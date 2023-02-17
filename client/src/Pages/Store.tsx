import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import { useMainContext } from '../Context';

function Store() {
  const { storeId } = useParams();
  const { productsList, storeList } = useMainContext();

  const store = storeList.find((s) => s.uniqueStoreId.toString() === storeId);
  const productsInStore = productsList.filter((p) => p.storeId.toString() === storeId);

  return (
    <div className="home">
      <div className="container">
        {store && <h1 className="text-center mt-5">{store.name}</h1>}
        {productsInStore && productsInStore.map((p) => <ProductCard product={p} key={p.id} />) }
      </div>
    </div>
  );
}

export default Store;
