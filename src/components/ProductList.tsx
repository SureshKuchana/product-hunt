import { ProductListProps } from '../types';

const ProductList = ({ children }: ProductListProps) => {
  return <div className="ui unstackable items">{children}</div>;
};

export default ProductList;
