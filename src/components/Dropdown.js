import React, {useState} from "react"
import user from "../user.svg"
import dot from "../dot.svg"
import bec from "../gray.svg"


function Dropdown () {

    const [showOptions, setShowOptions] = useState(false);

   const handleClick = () => {
        setShowOptions(!showOptions);
    }
    return (
        <div>
            <div class="relative inline-block text-left">
  <div>
    
      <div onClick = {handleClick} className="flex border container bg-white " style={{width: "36px",
height: "36px", borderRadius:"35px",opacity:"1"}}>
      <img class="w-5 ml-1 " src={user}></img>
      <img class="w-5 mb-4" style={{width:"11px", height:"11px"}} src={dot}></img>
      </div>
      
    
  </div>

 {showOptions && (
  <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      
      <a href="/login" class="text-black text-lg block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Login</a>
      <a href="/" class="text-gray-700 text-lg block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Sign up</a>
      <a href="/" class="text-gray-700 text-lg block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">How Online Tutoring works</a>
      <a href="/" class="text-gray-700 text-lg block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Help</a>

    </div>
  </div>
)}
        </div>
        </div>
    )
};

export default Dropdown;