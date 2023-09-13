//import logo from './logo.svg';
import './App.css';

import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Message from './Components/Message';
import Counter from './Components/Counter';
import Function_Clicked from './Components/Function_Clicked';
import Class_click from './Components/Class_click';
import Event_binding from './Components/Event_binding';
import Parent_Cmomponent from './Components/Parent_Cmomponent';
import Conditionla from './Components/Conditionla';
import Name_list from './Components/Name_list';
import Person from './Components/person';
function App() {
  return (
    <div className="App">
      {/* <Conditionla/> */}
      <person />
      <Name_list/>

      {/* <Parent_Cmomponent /> */}

      {/* <Counter /> */}

      {/* <Message /> */}

      {/* <Function_Clicked />
      <Class_click /> */}
{/* 
      <Event_binding /> */}


 
    </div>
  );
}

export default App;
