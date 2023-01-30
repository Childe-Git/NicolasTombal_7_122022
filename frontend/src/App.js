import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Router from "./routes/Router";

function App() {
	return (
		<div className="app">
			<div className="content">
				<Header />
				<Router />
			</div>
			<Footer />
		</div>
	);
}

export default App;
