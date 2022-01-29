import { all, call } from "redux-saga/effects";

import { onFetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/caert.sagas";

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart), call(userSagas), call(cartSagas)]);
}
