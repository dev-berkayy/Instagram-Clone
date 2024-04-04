import Explore from "./Components/Pages/Explore";
import Home from "./Components/Pages/Home";
import Messages from "./Components/Pages/Messages";
import Profile from "./Components/Pages/Profile";
import Reels from "./Components/Pages/Reels";
import Sidebar from "./Components/Sidebar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
   return (
      <div className='layout'>
         <BrowserRouter>
            <Sidebar />
            <Routes>
               <Route index element={<Home />} />
               <Route path='reels' element={<Reels />} />
               <Route path='messages' element={<Messages />} />
               <Route path='profile' element={<Profile />} />
               <Route path='explore' element={<Explore />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
