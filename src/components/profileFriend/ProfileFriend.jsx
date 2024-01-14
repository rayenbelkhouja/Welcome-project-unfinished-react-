import './profileFriend.css'

export default function ProfileFriend({user}) {
  return (
    <>
      <div className="profile-friend-item">
        <img className='profile-friend-picture' src={user.profilePicture} alt="" />
        <span className='profile-friend-name'>{user.username}</span>
      </div>
    </>
    
        
 
  )
}
