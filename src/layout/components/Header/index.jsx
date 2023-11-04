import './index.less'
import { CloudSyncOutlined, UserOutlined } from '@ant-design/icons'


const Header = () => {
    return (
        <div className="header-box">
            <div className="header-left">
                <img src="/src/assets/images/hznu_logo.png" />
            </div>
            <div className="header-right">
                <div className="ops-box">
                    <CloudSyncOutlined className='icon' />
                    <UserOutlined className='icon' />
                </div>
            </div>
        </div>
    )
}


export default Header