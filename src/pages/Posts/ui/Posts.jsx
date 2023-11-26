import { useEffect, useState } from "react";
import PostCard from "../../../entities/PostCard/PostCard";
import { useGetPostsQuery } from "../../../features/postSlice";
import './Posts.css'

const Posts = () => {
    const [page, setPage] = useState(0)
    const { data: posts, isLoading, isError, isFetching } = useGetPostsQuery(page)
    useEffect(() => {
        const onScroll = () => {
          const scrolledToBottom =
            window.innerHeight + window.scrollY >= document.body.offsetHeight;
          if (scrolledToBottom && !isFetching) {
            console.log("Fetching more data...");
            setPage(page + 1);
          }
        };
    
        document.addEventListener("scroll", onScroll);
    
        return function () {
          document.removeEventListener("scroll", onScroll);
        };
      }, [page, isFetching]);

    
    if (isError) return <h1>Ошибка загрузки</h1>

    if (isLoading) return <h1>Загрузка</h1>

    return (
        <div className="posts">
            <h1 className="posts-h1">ПОСТЫ</h1>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Posts;