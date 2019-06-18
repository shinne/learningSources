import {renderRoutes} from 'react-router-config'

export const routes = [
    {
        component: Root,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/child/:id',
                component: Child,
                routes: [
                    {
                        path: '/child/:id/grand-child',
                        component: GrandChild]
            }
        ]
    }
]

const Root = ({route}) => (
    <div>
        <h1>Root</h1>
        {/* child routes won't render without this */}
        {renderRoutes(route.routes)}
    </div>
)

const Home = ({route}) => (
    <div>
        <h2>Home</h2>
    </div>
)

const Child = ({route}) => (
    <div>
        <h2>Child</h2>
        {/* child routes won't render without this */}
        {renderRoutes(route.routes)}
    </div>
)

const GrandChild = () => (
    <div>
        <h3>Grand Child</h3>
    </div>
)