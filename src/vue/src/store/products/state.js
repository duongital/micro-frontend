export const state = {
  products: ['product 1', 'product 2', 'product 3'],
  bundles: [],
  cards: []
};

export const getters = {
  getProducts: state => state.products,
  getBundles: state => state.bundles,
  getCards: state => state.cards
};
