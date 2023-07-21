interface ICartControl {
  readonly count: number;
}

export const useCartCOntrol = (): ICartControl => {
  return {
    count: 2,
  };
};
