import { Avatar, Card } from "antd"
import './index.less'

const NotificationMaterials = () => {
    const newsList = [
        {
            title: '【星光计划】《关于做好杭州师范大学2023年“星光计划”学生创新创业项目评选的通知》',
            link: 'https://youth.hznu.edu.cn/c/2023-06-01/2850908.shtml'
        },
        {
            title: '【星光计划】《关于做好杭州师范大学2023年“星光计划”学生创新创业项目评选的通知》1',
            link: 'https://youth.hznu.edu.cn/c/2023-06-01/2850908.shtml'
        }
    ]
    return (
        <div className="notification-materials-box">
            {
                newsList.map((item, index) => {
                    return (
                        <Card key={item.title}>
                            <Card.Meta
                            title={<a href={item.link} target="_blank" style={{color: 'black'}}>{item.title}</a>}
                            description="本页面通知链接内容更新慢，想要获取最新通知请及时关注您所在学院官网！"
                            avatar={<Avatar 
                                style={{display: 'flex', alignItems: 'center'}} 
                                src="../src/assets/images/news_logo.png"></Avatar>
                            }></Card.Meta>
                        </Card>
                    )
                })
            }
        </div>
    )
}


export default NotificationMaterials