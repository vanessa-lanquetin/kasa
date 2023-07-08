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
import Logement from "./pages/logement";

// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";



const Layout = () => {
	return (
		<div className="container_general">
			<Header />
			<main className="main">
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
