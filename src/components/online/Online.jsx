import './online.css'

export default function online({user}) {
  return (
    <li className='online-friend-item'>
        <div className='online-friend-picture-container'>
            <img className='online-friend-picture' src={user.profilePicture} alt="" />
            <div className='online-cercle'></div>
        </div>
        <span>{user.username}</span>
    </li> 
  )
}
