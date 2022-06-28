import { Route, Routes, useLocation } from "react-router";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import Sidebar from './Components/Sidebar';

import ListAll from './Pages/List';
import NewCard from './Pages/NewCard';
import Options from './Pages/Options';
import Profile from './Pages/Profile';


const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: top;
`;

function App() {

  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>

        <AnimatePresence exitBeforeEnter>
          <Routes location={ location } key={ location.pathname }>
            <Route path="/:id"       element={ <ListAll /> } />
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
