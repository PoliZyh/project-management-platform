import './index.less'
import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const routeMap = {
    'home': {
        title: '星光新苗申报结题系统',
        des: ''
    },
    'welcome': {
        title: '欢迎页',
        des: '欢迎使用星光新苗申报结题系统！如果对系统的使用有所疑问，请阅读使用说明。对系统的任何吐槽都请点击页面右上角图标进行反馈，您的使用意见对我们非常宝贵！'
    },
    'star': {
        title: '星光计划',
    },
    'new': {
        title: '新苗计划'
    },
    'declaration-entry': {
        title: '申报信息录入',
        des: '请认真添加相关信息'
    },
    'information-changes': {
        title: '信息变更',
        des: '空着不填，则默认无修改。请认真填写相关信息'
    },
    'closing-materials': {
        title: '结题材料上交',
        des: '请认真阅读通知中有关材料上交的相关内容'
    },
    'notification-materials': {
        title: '通知链接',
        des: '通知链接内容仅作参考，请以各学院官网通知为准'
    },
    'use-instructions': {
        title: '使用说明',
        des: '对系统的任何吐槽都请点击页面右上角图标进行反馈，您的使用意见对我们非常宝贵'
    }
}


const BreadcrumbCard = () => {
    const location = useLocation()
    const [itemsState, setItemsState] = useState([])
    useEffect(() => {
        const path = location.pathname
        const pathArr = path.split('/')        
        const itemsArr = []
        pathArr.forEach(item => item in routeMap && itemsArr.push(routeMap[item]))
        setItemsState(itemsArr)
    }, [location])
    return (
        <div className="breadcrumb-box">
            <Card>
                <Breadcrumb
                items={itemsState}>
                </Breadcrumb>
                <p className='title'>{itemsState.length > 0 ? itemsState[itemsState.length - 1].title : ''}</p>
                <p className='des'>{itemsState.length > 0 ? itemsState[itemsState.length - 1].des : ''}</p>
            </Card>
        </div>
    )
}


export default BreadcrumbCard