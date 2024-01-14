import './share.css'
import { AiFillPicture, AiFillTag } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { IoIosHappy} from 'react-icons/io'

export default function Share() {
  return (
    <div className="share-container">
        <div className="top-share">
            <div className="top-left-share">
                <img className='share-image' src="assets/profile picture/rayen.jpg" alt="" />
            </div>
            <div className="top-right-share">
                <input className='share-input' placeholder="Write something u udiot"/>
            </div>
        </div>
        <hr className='share-hr'/>
        <div className="bot-share">
            <div className="bot-left-share">
                <div className='bot-left-share-item'>
                    <AiFillPicture className='share-icon'/>
                    <span className='share-icon-name'>Photo or Video</span>
                </div>
                <div className='bot-left-share-item'>
                    <AiFillTag className='share-icon' />
                    <span className='share-icon-name'>Tag</span>
                </div>
                <div className='bot-left-share-item'>
                    <MdLocationPin className='share-icon' />
                    <span className='share-icon-name'>Location</span>
                </div>
                <div className='bot-left-share-item'>
                    <IoIosHappy className='share-icon' />
                    <span className='share-icon-name'>Feelings</span>
                </div>
            </div>
            <div className="bot-right-share">
                <button className='share-button'>share</button>
            </div>
        </div>
    </div>
  )
}
