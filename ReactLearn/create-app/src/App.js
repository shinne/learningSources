import React, {Component} from 'react'
import routes from './routes'
import styles from './index.less'
import {renderRoutes} from 'react-router-config'
import {Switch} from 'react-router'
import { BrowserRouter,Link} from 'react-router-dom'
import Aside from './page/Aside'

export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles.bodyWrap}>
                <BrowserRouter>
                    <Aside></Aside>
                    <div className={styles.bodyContent}>{renderRoutes(routes)}</div>
                </BrowserRouter>
            </div>
        )
    }
}
