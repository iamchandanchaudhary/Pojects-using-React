import { useState } from "react";
import "./DarkLight.css";
// import "./DarkLight.js";

function DarkLightMode() {

    let [lightBtn, setLightBtn] = useState(false);
    let [darkBtn, setDarkBtn] = useState(true);
    let [darkMode, setDarkMode] = useState(true);

    let lightBtnChange = () => {
        setLightBtn(!lightBtn);
        setDarkBtn(!darkBtn);

        setDarkMode(!darkMode);
    }

    let condition1 = lightBtn ? "show" : "not-show";
    let condition2 = darkBtn ? "show" : "not-show";

    let modeChange = darkMode ? "dark" : "";
    
    let darkBtnChange = () => {
        setDarkBtn(!darkBtn);
    }
    
    return (
        <div className={`absolute top-6 right-12 text-[#1848a1] dark:text-white bg-[#fff1e6] dark:bg-transparent border-2 border-[#1848a1] dark:border-white px-3 py-2 rounded-full`}>
              <button className={`light-btn hidden h-5 sm:h-6 w-max gap-2 ${condition1}`} onClick={lightBtnChange}
              >Light Mode
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 sm:w-6 feather feather-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              </button>
              
              <button className={`dark-btn hidden h-5 sm:h-6 w-max gap-2 ${condition2}`} onClick={lightBtnChange}
              >Dark Mode
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 sm:w-6 feather feather-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              </button>
        </div>
    );
}

export default DarkLightMode;