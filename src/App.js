import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Catalogue from './components/Books/Catalogue/Catalogue'

function App() {
  return (
    <div className="App">
      <Header className="App-header" />

      <Catalogue />

      <Footer className="App-footer" />
    </div>
  );
}

export default App;
