import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

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

      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route render={() => Error} />
          {/*         <Route render={() => ErrorPage()}/> */}
        </Routes>
      </BrowserRouter>

      <Footer className="App-footer" />
    </div>
  );
}

export default App;
