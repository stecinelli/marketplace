export interface IContext {
  productsList: Array<IProducts>,
  setProductsList: React.Dispatch<React.SetStateAction<Array<IProducts>>>,
  storeList: Array<IStores>,
  setStoreList: React.Dispatch<React.SetStateAction<Array<IStores>>>
}

export interface IProducts {
  id: number,
  title: string,
  description: string,
  imageUrl: string,
  storeId: number,
  price: string,
  quantity: number,
  category: string,
}

export interface IStores {
  uniqueStoreId: number,
  name: string,
}

export interface ISectionTitle {
  sectionTitle: string,
}

export interface IProductProp {
  product: IProducts
}
