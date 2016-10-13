import Posts from './../views/posts.vue'
import Comment from './../views/comment.vue'

import { Auth } from './middleware';

export default [
    {
        path: '/',
        component: Posts,
        children:[
            {
                path: '/comment',
                component: Comment,
               // beforeEnter: Auth
            }
        ]
    }
]