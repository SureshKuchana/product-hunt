export type ProductListProps = {
  children?: React.ReactNode;
};

export type Products = {
  id: number;
  title: string;
  description: string;
  url: string;
  votes: number;
  submitterAvatarUrl: string;
  productImageUrl: string;
};
