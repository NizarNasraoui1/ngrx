import { Product } from "./product.model"

export class ProductWrapper{
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  constructor(){
    this.products=[];
    this.total=0;
    this.skip=0;
    this.limit=0;
  }
}
