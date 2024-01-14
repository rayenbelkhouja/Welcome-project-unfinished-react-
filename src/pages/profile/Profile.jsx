import './profile.css' 
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";

export default function Profile() {
  return (
    <>
        <Topbar /> 
        <Leftbar />  
        <div className='profile'>
            <div className='profile-top'>
                <div className="cover-and-profile-container">
                    <img className='cover-picture' src="assets/photos/4.jpg" alt="" />
                    <img className='profile-user-picture' src="assets/profile picture/rayen.jpg" alt="" />
                    
                </div>
                <div className="profile-info">
                        <div className="profile-name">Rayen Belkhouja</div>
                        <div className="profile-bio">hiiiiiiiiiiiiiiiiii !! </div>
                    </div>
                
            </div>
            <div className='profile-bot'>
                <Feed />
                <Rightbar profile/>
            </div>
        </div>
        
        
    </>
  )
}
