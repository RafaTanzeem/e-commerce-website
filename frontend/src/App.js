import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            {" "}
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route
              exact
              path="/product/:id"
              element={<ProductScreen />}
            ></Route>
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
