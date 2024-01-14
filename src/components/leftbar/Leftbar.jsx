import './leftbar.css'
import { MdRssFeed, MdGroup, MdWork } from 'react-icons/md'
import { BsChatSquareDotsFill, BsFillBookmarkFill, BsFillCalendar3EventFill } from 'react-icons/bs'
import { HiVideoCamera } from 'react-icons/hi'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'
import Friends from '../../components/friends/Friends'
import { Users } from '../../dummydata'

 

export default function Leftbar() {
  return (
    <div className='leftbar'>
      <ul className='upper-leftbar'>
        <li className='upper-leftbar-items'>
          <MdRssFeed className='upper-leftbar-icons' />
          <span className='upper-leftbar-icons-names'>Feed</span>
        </li>
        <li className='upper-leftbar-items'>
          <BsChatSquareDotsFill className='upper-leftbar-icons' />
          <span className='upper-leftbar-icons-names'>Chats</span>
        </li>
        <li className='upper-leftbar-items'>
          <HiVideoCamera className='upper-leftbar-icons' /> 
          <span className='upper-leftbar-icons-names'>Videos</span>
        </li>
        <li className='upper-leftbar-items'>
          <MdGroup className='upper-leftbar-icons' />
          <span className='upper-leftbar-icons-names'>Groups</span>
        </li>
        <li className='upper-leftbar-items'>
          <BsFillBookmarkFill className='upper-leftbar-icons' />
          <span className='upper-leftbar-icons-names'>Bookmarks</span>
        </li>
        <li className='upper-leftbar-items'>
          <AiFillQuestionCircle className='upper-leftbar-icons' />
          <span className='upper-leftbar-icons-names'>Questions</span>
        </li>
        <li className='upper-leftbar-items'>
          <MdWork className='upper-leftbar-icons' />
          <span className='upper-leftbar-icons-names'>Jobs</span>
        </li>
        <li className='upper-leftbar-items'>
          <BsFillCalendar3EventFill className='upper-leftbar-icons' />
          <span className='upper-leftbar-icons-names'>Events</span>
        </li>
        <li className='upper-leftbar-items'>
          <FaGraduationCap className='upper-leftbar-icons' />
          <span className='upper-leftbar-icons-names'>Courses</span>
        </li>
      </ul>

      <button className="seemore-button">See More</button>
      <hr className='leftbar-hr'/>

      <ul className='lower-leftbar'>
        {Users.map((u)=>(
          <Friends key={u.id} user={u}/>
        ))}
      </ul>
    </div>
  )

  
}
