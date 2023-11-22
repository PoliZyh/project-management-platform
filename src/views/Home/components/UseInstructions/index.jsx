import { Card, Row, Col } from "antd"
import { CloudSyncOutlined } from '@ant-design/icons'

const UseInstructions = () => {
    return (
        <div className="use-instructions-box">
            <Card title="星光新苗申报结题系统使用说明">
                <Row>
                    <h3>页面说明</h3>
                </Row>
                <Row style={{marginTop: '10px'}}>
                    <Col span={12}>
                        <img src="../src/assets/images/page_template.png" style={{width: '100%'}} />
                    </Col>
                </Row>
                <Row style={{marginTop: '10px'}}>
                    <p>页面的左侧为<b>导航区域</b>，请在此处选择您所要使用的页面</p>
                </Row>
                <Row style={{marginTop: '10px'}}>
                    <p>页面的中间为<b>为信息填写区域</b>，请在此处阅读通知要求后再填写信息或上传材料</p>
                </Row>
                <Row style={{marginTop: '10px'}}>
                    <p>将鼠标移动至页面的右上角 <CloudSyncOutlined></CloudSyncOutlined> 图标，可以扫码进入问题反馈钉钉群
                    ，反馈您在使用中发现的问题或提出优化意见，您的使用意见对我们非常宝贵！</p>
                </Row>
            </Card>
        </div>
    )
}

export default UseInstructions