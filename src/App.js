import "./App.css";
import "@fortawesome/react-fontawesome";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
