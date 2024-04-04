import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegCompass, FaRegHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { RiMessengerLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbPhotoVideo } from "react-icons/tb";
import { Link } from "react-router-dom";

function Links() {
   const [click, setClick] = useState(false);
   const [search, setSearch] = useState("openbar visible");
   const [aChangeClass, setAChangeClass] = useState("");
   const [aChangeButton, setaChangeButton] = useState("");
   const [aChangeSearchButton, setaChangeSearchButton] = useState("search");

   const opensearch = () => {
      if (!click) {
         setSearch("openbar");
         setAChangeClass("aclass");
         setaChangeButton("updatebutton");
         // setaChangeSearchButton("search searchvisible")
      } else {
         setSearch("openbar visible");
         setAChangeClass("aclass aclassvisible");
         setaChangeButton("");
         // setaChangeSearchButton("search ")
      }
      setClick(!click);
   };

   return (
      <div className='iconbox'>
         <div className='linksbox '>
            <div>
               {" "}
               <Link to='/' className='instagram'>
                  Instagram
               </Link>
            </div>
            <div className='links'>
               <Link to='/' className={aChangeButton}>
                  <GoHomeFill className='homeicon' /> <p className={aChangeClass}>Home</p>{" "}
               </Link>
               <button className={aChangeSearchButton} onClick={opensearch}>
                  <IoIosSearch className='search2' />{" "}
                  <p className={aChangeClass}>Search</p>
               </button>
               <Link to='explore' className={aChangeButton}>
                  {" "}
                  <FaRegCompass className='Exploreicon' />
                  <p className={aChangeClass}>Explore</p>
               </Link>
               <Link to='reels' className={aChangeButton}>
                  {" "}
                  <TbPhotoVideo className='reelsicon' />
                  <p className={aChangeClass}>Reels</p>
               </Link>
               <Link to='messages' className={aChangeButton}>
                  {" "}
                  <RiMessengerLine className='messagesicon' />
                  <p className={aChangeClass}>Messages</p>
               </Link>
               <button className={aChangeSearchButton}>
                  {" "}
                  <FaRegHeart className='notifactionsicon' />
                  <p className={aChangeClass}>Notifactions</p>
               </button>
               <Link to='profile' className={aChangeButton}>
                  <CgProfile className='profile' />{" "}
                  <p className={aChangeClass}>Profile</p>
               </Link>
            </div>
         </div>

         <button className='burgerbutton'>
            <RxHamburgerMenu className='burgericon' />
            <p className={aChangeClass}>More</p>
         </button>

         <div className={search}>berkay</div>
      </div>
   );
}

export default Links;
