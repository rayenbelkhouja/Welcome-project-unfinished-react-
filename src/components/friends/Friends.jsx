import './friends.css'

export default function Friends({user}) {
  return (
    <li className='lower-leftbar-items'>
        <img className='leftbar-profile-picture' src={user.profilePicture} alt="" />
        <span className='leftbar-profile-name'>{user.username}</span>
    </li>
  )
}
