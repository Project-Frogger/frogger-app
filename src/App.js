// import logo from './logo.svg';
import './App.css';

import { Route, Routes, useLocation } from "react-router";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import Sidebar from './Components/Sidebar';

import { 
  ListAll, 
  ListArchive, 
  ListDrafts, 
  ListPublished, 
  ListBin 
} from './Pages/List';
import NewCard from './Pages/NewCard';
import Options from './Pages/Options';
import Profile from './Pages/Profile';


const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: Manrope-ExtraBold;
    font-size: calc(2rem + 2vw);
    background: linear-gradient(
      to right,
      var(--purple) 30%,
      var(--blue) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {

  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>

        <AnimatePresence exitBeforeEnter>
          <Routes location={ location } key={ location.pathname }>
            <Route path="/all"       element={ <ListAll /> } />
            <Route path="/published" element={ <ListPublished /> } />
            <Route path="/drafts"    element={ <ListDrafts /> } />
            <Route path="/archive"   element={ <ListArchive /> } />
            <Route path="/bin"       element={ <ListBin /> } />
            <Route path="/new-card"  element={ <NewCard /> } />
            <Route path="/options"   element={ <Options /> } />
            <Route path="/profile"   element={ <Profile /> } />
          </Routes>
        </AnimatePresence>
        
      </Pages>
    </>
  );
}

export default App;
