import { useReducer, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';

import AddBook from "./components/MyBooks/Profile/AddBook/AddBook";
import Ask from "./components/Ask/Ask";
import Catalogue from './components/Books/Catalogue/Catalogue'
import Contacts from './components/Contacts/Contacts'
import ErrorPage from './components/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Login from "./components/Authentication/Login/Login";
import Logout from './components/Authentication/Logout/Logout';
import MyBooks from "./components/MyBooks/MyBooks";
import NoMatch from "./components/NoMatch/NoMatch";
import Register from "./components/Authentication/Register/Register";

import userContext from "./contexts/userContext";
import BookInfo from './components/Books/BookList/Book/BookInfo/BookInfo';

function App() {
  const [user, setUser] = useState({ uid: 101, name: 'Guest', url: '', phone: '' });

  return (
    <div className="App">
      <userContext.Provider value={[user, setUser]} >
        <Header className="App-header" />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/MyBooks" element={<MyBooks />} />
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/AddBook" element={<AddBook />} />
          <Route path="/BookInfo/:id" element={<BookInfo />} />
          <Route path="/Ask" element={<Ask />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="*" element={<NoMatch/>}/>
          <Route render={() => ErrorPage()} />
        </Routes>

        <Footer className="App-footer" />
      </userContext.Provider>
    </div>
  );
}

export default App;
