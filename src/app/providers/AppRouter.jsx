import {createBrowserRouter} from 'react-router-dom'
import { Posts } from '../../pages/Posts'
import { Post } from '../../pages/Post'
import { paths } from '../../shared/config/routeConfig/routeConfig'

export const router = createBrowserRouter([
    {
        path: paths.posts,
        element: <Posts />
    },
    {
        path: paths.post,
        element: <Post />
    }
])