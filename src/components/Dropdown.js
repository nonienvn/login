import React, {useState} from "react"
import user from "../user.png"


function Dropdown () {

    const [showOptions, setShowOptions] = useState(false);

   const handleClick = () => {
        setShowOptions(!showOptions);
    }
    return (
        <div>
            <div class="relative inline-block text-left">
  <div>
    <button type="button" onClick = {handleClick} class="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
      
      <img class="w-5" src={user}></img>
      
    </button>
  </div>

 {showOptions && (
  <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      
      <a href="/login" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">login</a>
      <a href="/" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">sinup</a>
      <a href="/" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">how tutor work</a>
      <form method="POST" action="#" role="none">
        <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">
          help
        </button>
      </form>
    </div>
  </div>
)}
        </div>
        </div>
    )
};

export default Dropdown;