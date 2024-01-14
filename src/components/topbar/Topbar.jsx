import "./topbar.css";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill, BsFillChatSquareDotsFill } from "react-icons/bs";
import { AiFillBell } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"


export default function Topbar() {
    return (
        <div className="topbar">
           <div className="topbar-left">
                <div className="logo"><span className="w-color">W</span>elcome</div>
           </div>
           <div className="topbar-middle">
                <div className="search-bar">
                    <BiSearch className="search-icon"/>
                    <input className="search-bar-input" type="text" placeholder="Search for Friends, Posts or Videos" name="" id="" />
                </div>
           </div>
            <div className="links">
                <div className="topbar-Text">Home page</div>
                <div className="topbar-Text">Time line</div>
            </div>
            <div className="topbar-icons-container">
                <div>
                    <div> < BsFillPersonFill  className="topbar-icons"/> </div>
                </div>
                <div>
                    <div> < BsFillChatSquareDotsFill  className="topbar-icons-parasite"/></div>
                </div>
                <div>
                    <div> < AiFillBell  className="topbar-icons"/></div>
                </div>

                <div>
                    < GiHamburgerMenu className="hamburger-menu"/>
                </div>
            </div>
            
            <div className="profile-pic-container">
                <img className="profile-pic" src="assets/profile picture/rayen.jpg" alt="" />
                <div></div>
            </div>

        </div>

    )
}