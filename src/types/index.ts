export type TTeame = {
  id: number;
  imgUrl: string;
  name: string;
  role: string;
};

export type catalogKros = {
  id: number;
  vendorСode: string;
  inStock: number;
  title: string;
  description: string;
  imgUrl: string;
  stars: number;
  sizes: number[];
  price: number;
  oldPrice: number;
  gender: string;
  color: string;
  compound: string;
  country: string;
};

export type shoeSelection = {
  imgUrl: string;
  name: string;
};
