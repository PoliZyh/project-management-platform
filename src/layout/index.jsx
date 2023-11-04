import './index.less'
import Main from './components/Main'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const Layout = () => {
    return (
        <div className='layout-page'>
            <div className="layout-header">
                <Header></Header>
            </div>
            <div className="layout-bodyer">
                <div className="bodyer-left">
                    <Sidebar></Sidebar>
                </div>
                <div className="bodyer-right">
                    <Main></Main>
                </div>
            </div>
        </div>
    )
}


export default Layout