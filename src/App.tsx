import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListScreen from "./screens/ListScreen";
import { NavLink } from "react-router-dom";
import FocusScreen from "./screens/FocusScreen";
import { Task } from "./types";
import { shuffle } from "lodash";
import { nanoid } from "nanoid";
import useLocalStorage from "./hooks/use-local-storage";
import TaskContext from "./contexts/task-store";
import styled from "styled-components";
import { colors, GlobalStyle } from "./styles";

const Layout =styled.div`
align-items: center;
display: flex;
flex-direction: column;
/* justify-content: center; */
min-height: 100vh;
padding: 35px;
`


const Nav = styled.nav`
  display: flex;
  margin-bottom: 45px;
`

const TabButton = styled(NavLink)`
width: 120px;
align-items: center;
height: 62px;
display: flex;
background: #000;
justify-content: center;
text-decoration: none  ;
color: #fff;

&:first-child {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

&:last-child {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

&.active {
  background: ${colors.primary};
  color: #000;
}
`;


function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  

  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <TaskContext.Provider value={[tasks, setTasks]}>
      <Layout>
      <Nav>
        {/* activeStyle={{fontWeight: 'bold'}} */}
        <TabButton to="/" className="active">List</TabButton>
        <TabButton to="/focus">Focus</TabButton>
      </Nav>
      

      <Routes>
        <Route path="/" element={<ListScreen  />}></Route>
        <Route path="/focus" element={<FocusScreen  />}></Route>
      </Routes>
      </Layout>
      </TaskContext.Provider> 
    </BrowserRouter>
    </>
  );
}
 
export default App;
