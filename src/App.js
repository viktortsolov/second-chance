import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Catalogue from './components/Books/Catalogue/Catalogue'
import Contacts from './components/Contacts/Contacts'

function App() {
  return (
    <div className="App">
      <Header className="App-header" />

      {/* <LandingPage />
      <Catalogue /> */}

      <Contacts />

      <Footer className="App-footer" />
    </div>
  );
}

export default App;
