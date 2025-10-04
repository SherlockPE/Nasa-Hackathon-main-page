import './App.css'
import Body from './Body.tsx'
import Footer from './Footer.tsx'
import Nav from './Navigation.tsx'

function Logo() {
	return (
		<div p-4 className="fixed top-0 left-0 z-50 m-4 p-4">
			<p className="font-semibold text-primary-foreground/90">
					Los Argonautas 🚀🐈
			</p>
		</div>
	)
}


function App() {
	return (
		<>
			<Logo />
			<Nav></Nav>
			<Body></Body>
			<Footer></Footer>
		</>
	)
}

export default App
