import './index.less'
import { Menu } from 'antd';
import { 
    StarOutlined, 
    AlertOutlined,
    FolderOpenOutlined,
    FileTextOutlined
 } from '@ant-design/icons';

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
        getItem('申报信息录入', 'g11'),
        getItem('信息变更', 'g12'),
        getItem('结题材料上交', 'g13'),
    ]),
    getItem('新苗计划', 'sub2', <AlertOutlined />, [
        getItem('申报信息录入', 'g21'),
        getItem('信息变更', 'g22'),
        getItem('结题材料上交', 'g23'),
    ]),
    getItem('通知材料', 'sub3', <FolderOpenOutlined />),
    getItem('使用说明', 'sub4', <FileTextOutlined />)
]



const Sidebar = () => {
    const onClick = () => {

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
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
            ></Menu>
        </div>
    )
}


export default Sidebar

