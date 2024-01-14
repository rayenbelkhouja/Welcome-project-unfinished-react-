import './rightbar.css'
import { FaBirthdayCake } from 'react-icons/fa'
import {Users} from '../../dummydata'
import Online from '../online/Online'
import ProfileFriend from '../profileFriend/ProfileFriend'

export default function Rightbar({profile}) {
  const HomeRightbar=()=>{
    return(
        <>
          <div className='birthday'>
            <div className="birthday-icon"><FaBirthdayCake /></div>
            <div className="freind-who-has-birthday">
              <span className='name-birthday'> Farah Belkhouja </span>  and <span className='name-birthday'> 3 other freinds </span> have a birthday today
            </div>
          </div>
          <div className='rightbar-picture-container'>
            <img className='rightbar-picture' src="assets/photos/rightbarpicture.jpg" alt="" />
          </div>
          <hr />
          <div className='online-friend'>
            <div className='online-friend-word'>Online Friends</div>
            <ul className='online-friend-liste'>
              {Users.map((u) => (
                <Online key={u.id} user={u} />
              ))}
            </ul>
          </div>
        </>
      
    );
  };

 

  const ProfileRightbar = () => {
    return(
      <>
        <div className='profile-friend-word'>Friends</div>
      <div className='profile-friend-container'>
          {Users.map((u) => (
            <ProfileFriend key={u.id} user={u} />
          ))}
        
      </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      {profile? <ProfileRightbar/> : <HomeRightbar/>}
    </div>
  )
}
