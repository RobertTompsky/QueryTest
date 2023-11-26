import { useNavigate, useParams } from 'react-router-dom';
import { useGetSelectedPostQuery } from '../../../features/postSlice';
import './Post.css'

// eslint-disable-next-line react/prop-types
const Post = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {data: post, isLoading} = useGetSelectedPostQuery(id)
    if (!post) return <div>Пост пропал!!!</div>
    if (isLoading) return <div>Загрузка...</div>
    return (
        <div className='post-container'>
            <h1 className='post-h1'>{post.title}</h1>
            <h2 className='post-h2'>ID №{id}</h2>
            <h2 className='post-h2'>ОПУБЛИКОВАНО ЮЗЕРОМ №{post.userId}</h2>
            <p className='post-p'>Описание: {post.body}</p>
            <button className='post-btn' onClick={()=> navigate('/')}>НАЗАД</button>
        </div>
    );
};

export default Post;