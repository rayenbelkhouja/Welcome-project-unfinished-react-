import './post.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import {Users} from '../../dummydata'
import { useState } from 'react'



export default function Post({post}) {

    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)
    const [dislike,setDislike] = useState(post.dislike)
    const [isDisliked,setIsDisLicked] = useState(false)

    

    const likeHundler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
       
    }

    const dislikeHundler = () => {
        setDislike(isDisliked ? dislike-1 : dislike+1)
        setIsDisLicked(!isDisliked)

    }

    return(
        <div className='post'>
            <div className="top-post">
                <div className='top-post-left'>
                    <div> <img className='post-profile-image' src= {Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" /></div>
                    <div className='post-profile-name'> {Users.filter((u) => u.id === post.userId)[0].username} </div>
                    <div className='post-time'>&#183;  {post.date} </div>
                </div>
                
                <div className='top-post-right'> <BsThreeDotsVertical className='three-points'/> </div>
            </div>
            <span className='post-text'>{post?.desc}</span>
            <div className="middle-post">
                <img className='post-image' src={post.photo} alt="" />
            </div>
            <div className="bot-post">
                <div className='likes'>
                    <div><AiFillLike className='like-dislike-icons' id='hello' onClick={likeHundler} /></div>
                    <span className='like-dislike-number'> {like} </span>
                    <div><AiFillDislike className='like-dislike-icons' id='hello2'  onClick={dislikeHundler}/></div>
                    <span className='like-dislike-number'> {dislike} </span>
                </div>
                <span className='comments'> {post.comment} comments</span>
            </div>
        </div>
    )
    

}

