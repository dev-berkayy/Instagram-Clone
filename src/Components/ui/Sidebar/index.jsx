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

function Sidebar() {
   const { active, openMenu, closeMenu } = useContext(MenuContext);

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
            openMenu();
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
            closeMenu();
         },
      },
      {
         type: "button",
         name: "Notifactions",
         icon: <Heart />,
         onclick: () => {
            openMenu();
         },
      },
      {
         type: "button",
         name: "Create",
         icon: <CreatePost />,
         onclick: () => {
            openMenu();
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
                                 src={"https://github.com/fatihsen-dev.png"}
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
         <div className={styles.Menu}>berkay</div>
      </div>
   );
}

export default Sidebar;
