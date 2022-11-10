export type ProductState = {
  isLoading: boolean;
  error: Error | string | null;
  products: string[][];
};

export type ResponseProducts = {
  data: {
    array: string[][];
  };
};
