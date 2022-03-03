import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from './global.styles';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = () => {
	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, [dispatch]);
	return (
		<div>
			<GlobalStyle />
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/shop/*" element={<ShopPage />} />
					<Route exact path="/checkout" element={<CheckoutPage />} />
					<Route
						path="/signIn"
						element={currentUser ? <Navigate replace to="/" /> : <SignInAndSignUpPage />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
