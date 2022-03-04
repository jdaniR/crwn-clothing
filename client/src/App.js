import React, { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from './global.styles';
import Header from './components/header/header.component';

import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import SuspenseComponent from './components/suspense/suspense.component';
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
					<Routes>
						<Route exact path="/" element={SuspenseComponent(HomePage)} />
						<Route path="/shop/*" element={SuspenseComponent(ShopPage)} />
						<Route exact path="/checkout" element={SuspenseComponent(CheckoutPage)} />
						<Route
							path="/signIn"
							element={
								currentUser ? (
									<Suspense fallback={<Spinner />}>
										<Navigate replace to="/" />{' '}
									</Suspense>
								) : (
									<Suspense fallback={<Spinner />}>
										<SignInAndSignUpPage />
									</Suspense>
								)
							}
						/>
					</Routes>
				</ErrorBoundary>
			</BrowserRouter>
		</div>
	);
};

export default App;
