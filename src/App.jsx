import {
	createRoutesFromElements,
	RouterProvider,
	Route,
	Outlet,
	createBrowserRouter,
} from 'react-router-dom'
import React from "react";
// Pages
import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/404'

// components
import Header from './components/Header'
import Footer from './components/Footer'
import Logement from './pages/logement'

//import RootLayout from './layouts/RootLayout.jsx'
// USE LAYOUT AS A FC function to return the HTML for the page to be rendered in
const Layout = () => {
	return (
		<div className="container_general">
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />}/>
			<Route path="about" element={<About />} />
			<Route path="logement/:id" element={<Logement />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	),
	{basename: '/kasa'}
)

const App = () => {
	return <RouterProvider router={router} />
}

export default App
