import ShopActionTypes from "./shop.types";

export const updateCollecitons = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
