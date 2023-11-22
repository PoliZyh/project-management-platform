import './index.less'
import { Menu } from 'antd';
import { 
    StarOutlined, 
    AlertOutlined,
    FolderOpenOutlined,
    FileTextOutlined
 } from '@ant-design/icons';
 import { useNavigate } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('星光计划', 'sub1', <StarOutlined />, [
        getItem('申报信息录入', '/home/star/declaration-entry'),
        getItem('信息变更', '/home/star/information-changes'),
        getItem('结题材料上交', '/home/star/closing-materials'),
    ]),
    getItem('新苗计划', 'sub2', <AlertOutlined />, [
        getItem('申报信息录入', '/home/new/declaration-entry'),
        getItem('信息变更', '/home/new/information-changes'),
        getItem('结题材料上交', '/home/new/closing-materials'),
    ]),
    getItem('通知链接', '/home/notification-materials', <FolderOpenOutlined />),
    getItem('使用说明', '/home/use-instructions', <FileTextOutlined />)
]



const Sidebar = () => {
    const navigate = useNavigate()
    const onClick = (e) => {
        navigate(e.key)
    }
    return (
        <div className="sidebar-box">
            <Menu
            onClick={onClick}
            style={{
                height: '100%',
                width: '100%'
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={[]}
            mode="inline"
            items={items}
            ></Menu>
        </div>
    )
}


export default Sidebar

