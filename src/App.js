import logo from './logo.png';
import './App.css';
import back from "./back.jpg"

import Dropdown from "./components/Dropdown"
import LoginForm from "./components/loginForm"
import {Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App h-screen w-full px-10 " style={{ backgroundImage: `url('${back}')` }} >
       <div>
       <div class= "flex justify-between items center pt-4 " >
         <div><a href="/"><img className="w-20 justify-self-end ml-10 mr-96" src={logo}></img></a></div> <div class= "flex justify-end ">
           <button class="bg-none  rounded-md hover:bg-gray-100 text-gray-800 font-semibold h-10 py-2 px-4 border  border-gray-400 rounded shadow mr-10">
           login as tutor
           </button>
        <Dropdown></Dropdown>
          
         </div>
      </div>
      <Route exact path="/login" component={LoginForm}></Route>
      </div>
    </div>
  );
}

export default App;
