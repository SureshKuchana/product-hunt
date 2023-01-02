import { ProductListProps } from '../types';
import { Flex } from '@chakra-ui/react';

const ProductList = ({ children }: ProductListProps) => {
  return (
    <>
      <Flex
        minWidth="max-content"
        gap="4"
        direction={{ base: 'row', md: 'column' }}
      >
        {children}
      </Flex>
    </>
  );
};

export default ProductList;
