import React, { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from './global.styles';
import Header from './components/header/header.component';

import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

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
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route exact path="/" element={<HomePage />} />
							<Route path="/shop/*" element={<ShopPage />} />
							<Route exact path="/checkout" element={<CheckoutPage />} />
							<Route
								path="/signIn"
								element={currentUser ? <Navigate replace to="/" /> : <SignInAndSignUpPage />}
							/>
						</Routes>
					</Suspense>
				</ErrorBoundary>
			</BrowserRouter>
		</div>
	);
};

export default App;
