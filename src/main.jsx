import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/ui/Sidebar/index.jsx";
import { Explore, Home, Messages, Profile, Reels } from "./Pages";
import MenuProvider from "./providers/MenuProvider.jsx";
import SecondMenu from "./Components/ui/Sidebar/menuContent/SecondMenu.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <div className='layout'>
      <MenuProvider>
         <BrowserRouter>
            <Sidebar />
            <SecondMenu />
            <Routes>
               <Route index element={<Home />} />
               <Route path='reels' element={<Reels />} />
               <Route path='messages' element={<Messages />} />
               <Route path='profile' element={<Profile />} />
               <Route path='explore' element={<Explore />} />
            </Routes>
         </BrowserRouter>
      </MenuProvider>
   </div>
);
