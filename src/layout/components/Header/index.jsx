import './index.less';
import { CloudSyncOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

const items = [
    {
        label: '进入钉钉群反馈',
        key: 1
    },
    {
        label: <img  src='../../src/assets/images/hznu_logo.png'></img>,
        key: 2
    }
];


const Header = () => {
    return (
        <div className="header-box">
            <div className="header-left">
                <img src="/src/assets/images/hznu_logo.png" alt="logo" />
            </div>
            <div className="header-right">
                <div className="ops-box">
                    <Dropdown trigger={['click']} menu={{items}}>
                        <a onClick={(e) => e.preventDefault()} style={{ display: 'flex', alignItems: 'center' }}>
                            <Space>
                                <CloudSyncOutlined className='icon-c' />
                            </Space>
                        </a>
                    </Dropdown>

                    <UserOutlined className='icon' />
                </div>
            </div>
        </div>
    );
};

export default Header;
