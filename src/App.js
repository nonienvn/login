import logo from './logo.png';
import './App.css';
import back from "./back.png"

import Dropdown from "./components/Dropdown"
import LoginForm from "./components/loginForm"
import {Route, Link} from "react-router-dom";
import rect from "./Rectangle1.svg"
import recta from "./Rectangle404.svg"


function App() {
  return (
    <div className="App mt-10 " style={{ backgroundImage: `url('${back}')`,   backgroundRepeat: 'no-repeat',
    width:'1654px', height:"1103px",opacity:"1"}} >
       <div>
       <div class= "flex items center pt-4 " style= {{backgroundImage:`url('${rect}')`, background:"transparent",
width: "1600px",
height: "412px",backgroundRepeat: 'no-repeat',opacity:"1" }}  >
         <div><a className="text-white text-lg  w-32 h-5 px-10 py-11" href="/">ILRNU</a>
           <p className= "pt-0 w-32 font-roboto text-white text-center   h-2 px-10" style= {{fontSize: "8px"}}>A universe of learning</p>
         </div> <div class= " flex justify-around ">
           <div className="mt-1 pt-3 mr-10 justify-items-center text-white " style= {{ backgroundImage: `url("${recta}")`, backgroundRepeat: "no-repeat", opacity:"1", width:"168px", height:"45px", fontSize:"16px", marginLeft:"1150px"}}>Join as a Tutor</div>
        <Dropdown></Dropdown>
          
         </div>
      </div>
      <Route exact path="/login" component={LoginForm}></Route>
      </div>
    </div>
  );
}

export default App;
