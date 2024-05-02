import { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../../providers/MenuProvider";

import {
   CreatePost,
   Explore,
   Hamburger,
   Heart,
   Home,
   Logo,
   Messenger,
   Reels,
   Search,
   TextLogo,
} from "../../Icons";
import styles from "./styles.module.css";
import SearchContent from "./menuContent/SearchContent";
import Notification from "./menuContent/Notification";
import Message from "./menuContent/Message";


function Sidebar() {
   const { active, state, openMenu, closeMenu } = useContext(MenuContext);

   const MenuContent = () => {
      switch (state) {
         case "search":
            return <SearchContent />;
         case "notification":
            return <Notification />;
         case "message":
            return <Message />;
         default:
            return "";
      }
   }


   const pages = [
      {
         type: "link",
         name: "Home",
         icon: <Home />,
         link: "/",
         onclick: () => {
            closeMenu();
         },
      },
      {
         type: "button",
         name: "Search",
         icon: <Search />,
         onclick: () => {
            openMenu("search");
         },
      },
      {
         type: "link",
         name: "Explore",
         icon: <Explore />,
         link: "/explore",
         onclick: () => {
            closeMenu();
         },
      },
      {
         type: "link",
         name: "Reels",
         icon: <Reels />,
         link: "/reels",
         onclick: () => {
            closeMenu();
         },
      },
      {
         type: "link",
         name: "Messages",
         icon: <Messenger />,
         link: "/messages",
         onclick: () => {
            openMenu("message");
         },
      },
      {
         type: "button",
         name: "Notifactions",
         icon: <Heart />,
         onclick: () => {
            openMenu("notification");
         },
      },
      {
         type: "button",
         name: "Create",
         icon: <CreatePost />,
         onclick: () => {

         },
      },
      {
         type: "link-img",
         img: "https://github.com/fatihsen-dev.png",
         name: "Profile",
         icon: "",
         link: "/profile",
         onclick: () => {
            closeMenu();
         },
      },
   ];

   return (
      <div className={`${styles.Sidebar} ${active ? styles.Active : ""}`}>
         <div className={styles.Inner}>
            <div className={styles.PageList}>
               <div className={styles.Logo}>
                  <Link to='/'>
                     <div className={styles.First}>
                        <Logo />
                     </div>
                     <div className={styles.Second}>
                        <TextLogo />
                     </div>
                  </Link>
               </div>
               <div className={styles.Lists}>
                  {pages.map((page, index) => {
                     if (page.type === "link") {
                        return (
                           <Link key={index} to={page.link} onClick={page.onclick}>
                              {page.icon}
                              <p>{page.name}</p>
                           </Link>
                        );
                     } else if (page.type === "button") {
                        return (
                           <button key={index} onClick={page.onclick}>
                              {page.icon}
                              <p>{page.name}</p>
                           </button>
                        );
                     } else {
                        return (
                           <Link key={index} to={page.link} onClick={page.onclick}>
                              <img
                                 src={"https://avatars.githubusercontent.com/u/152439115?v=4"}
                                 alt={page.name}
                              />
                              <p>{page.name}</p>
                           </Link>
                        );
                     }
                  })}
               </div>
               <button className={styles.HamburgerMenu}>
                  <Hamburger />
                  <p>More</p>
               </button>
            </div>
         </div>
         <div className={styles.Menu}>
            <MenuContent />

         </div>

      </div>
   );
}

export default Sidebar;
