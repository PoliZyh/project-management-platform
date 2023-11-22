import { Card, Row, Col, Input, Upload, message, Button, Flex } from "antd"
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const ClosingMaterials = () => {
    const props = {
        name: 'file',
        multiple: true,
    }


    return (
        <div className="closing-materials-box">
            <Card title="项目信息管理">
                <Row style={{width: '100%'}} gutter={20}>
                    <Col span={8}>
                        项目名称
                    </Col>
                    <Col span={8}>
                        项目负责人
                    </Col>
                    <Col span={8}>
                        负责人电话
                    </Col>
                </Row>
                <Row style={{width: '100%', marginTop: '10px'}} gutter={20}>
                    <Col span={8}>
                        <Input placeholder="请输入项目名称"></Input>
                    </Col>
                    <Col span={8}>
                        <Input placeholder="请输入负责人姓名"></Input>
                    </Col>
                    <Col span={8}>
                        <Input placeholder="请输入负责人电话"></Input>
                    </Col>
                </Row>
            </Card>
            <Card style={{marginTop: '20px'}} title="结题材料上传">
                    <Dragger {...props} style={{width: '100%'}}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">点击或拖动文件到此区域进行上传</p>
                        <p className="ant-upload-hint">
                            支持单个或批量上传。严禁上传敏感数据或其他被禁止的文件
                        </p>
                    </Dragger>
            </Card>
            <Card style={{marginTop: '20px'}}>
                <Row>
                    <Col span={21}></Col>
                    <Col span={3}>
                        <Flex justify="space-between">
                            <Button type="primary">保存</Button>
                            <Button>提交</Button>
                        </Flex>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default ClosingMaterials