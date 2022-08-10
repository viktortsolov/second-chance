import { Routes, Route} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Catalogue from './components/Books/Catalogue/Catalogue'
import Contacts from './components/Contacts/Contacts'
import MyBooks from "./components/MyBooks/MyBooks";
import Book from "./components/Books/BookList/Book/Book";
import AddBook from "./components/MyBooks/Profile/AddBook/AddBook";
import Ask from "./components/Ask/Ask";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/ask" element={<Ask />} />
        </Routes>

      <Footer className="App-footer" />
    </div>
  );
}

export default App;
