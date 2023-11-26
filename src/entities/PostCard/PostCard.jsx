import { useNavigate } from 'react-router-dom'
import './PostCard.css'
import {truncate} from 'lodash'
/* eslint-disable react/prop-types */
const PostCard = ({post}) => {
    const navigate = useNavigate()
    return (
        <div className="postcard">
            <h1 className="postcard-h2">{post.id}. {post.title}</h1>
            <p className="postcard-p">{truncate(post.body, {length: 150})}</p>
            <button className='postcard-btn' onClick={() => navigate(`/${post.id}`)}>ПРОСМОТР</button>
        </div>
    );
};

export default PostCard;