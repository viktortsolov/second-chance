import { Routes, Route} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Catalogue from './components/Books/Catalogue/Catalogue'
import Contacts from './components/Contacts/Contacts'
import MyBooks from "./components/MyBooks/MyBooks";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

      <Footer className="App-footer" />
    </div>
  );
}

export default App;
