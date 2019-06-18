import App from './App'
import Detail from './page/Detail'
import Home from './page/Home'
import { Redirect } from 'react-router'
const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path: '/detail',
        component: Detail
    }
]

export default routes;