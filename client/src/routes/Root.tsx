import React, { useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContext } from '../Context';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import { IProducts, IStores } from '../Types';

function Root() {
  const [productsList, setProductsList] = useState<IProducts[]>([
    {
      id: 1,
      title: 'Star Bulk Carriers Corp.',
      description: 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
      imageUrl: 'http://dummyimage.com/162x100.png/ff4444/ffffff',
      storeId: 7,
      price: '$3.56',
      quantity: 33,
      category: 'Movies',
    },
    {
      id: 2,
      title: 'Sally Beauty Holdings, Inc.',
      description: 'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
      imageUrl: 'http://dummyimage.com/133x100.png/ff4444/ffffff',
      storeId: 1,
      price: '$3.90',
      quantity: 48,
      category: 'Shoes',
    },
    {
      id: 3,
      title: 'Anthera Pharmaceuticals, Inc.',
      description: 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      imageUrl: 'http://dummyimage.com/204x100.png/5fa2dd/ffffff',
      storeId: 5,
      price: '$5.75',
      quantity: 28,
      category: 'Grocery',
    },
  ]);

  const [storeList, setStoreList] = useState<IStores[]>([
    {
      name: 'Hansen and Sons',
      uniqueStoreId: 1,
    },
    {
      name: 'Littel, Walter and Bartoletti',
      uniqueStoreId: 2,
    },
    {
      name: 'Kassulke-Cole',
      uniqueStoreId: 3,
    },
  ]);

  const contextValue = useMemo(() => ({
    productsList,
    setProductsList,
    storeList,
    setStoreList,
  }), [
    productsList,
    setProductsList,
    storeList,
    setStoreList,
  ]);

  return (
    <MainContext.Provider value={contextValue}>
      <Navigation />
      <Outlet />
      <Footer />
    </MainContext.Provider>
  );
}

export default Root;
