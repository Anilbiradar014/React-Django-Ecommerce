import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          {/* <HomeScreen /> */}
          <Routes>
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path='product/:id' element={<ProductScreen/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
