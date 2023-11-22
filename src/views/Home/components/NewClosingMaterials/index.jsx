import { Card, Row, Col, Input, Upload, message, Radio, Flex, Button } from "antd"
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const radioOptions = [
    {
        label: '是',
        value: true
    },
    {
        label: '否',
        value: false
    }
]

const NewClosingMaterials = () => {
    const props = {
        name: 'file',
        multiple: true,
    }


    return (
        <div className="closing-materials-box">
            <Card title="项目信息管理">
                <Row gutter={20}>
                    <Col span={8}>项目名称</Col>
                    <Col span={8}>发表论文数量</Col>
                    <Col span={8}>是否参加"挑战杯"竞赛</Col>
                </Row>
                <Row gutter={20}>
                    <Col span={8}>
                        <Input placeholder="请输入项目名称"></Input>
                    </Col>
                    <Col span={8}>
                        <Input placeholder="发表论文数量"></Input>
                    </Col>
                    <Col span={8}>
                        <Radio.Group options={radioOptions}></Radio.Group>
                    </Col>
                </Row>
                <Row gutter={20} style={{marginTop: '20px'}}>
                    <Col span={8}>项目完成时间</Col>
                    <Col span={8}>授权或受理专利数量</Col>
                    <Col span={8}>是否孵化成立公司</Col>
                </Row>
                <Row gutter={20}>
                    <Col span={8}>
                        <Input placeholder="请输入项目完成时间"></Input>
                    </Col>
                    <Col span={8}>
                        <Input placeholder="请输入专利数量"></Input>
                    </Col>
                    <Col span={8}>
                        <Radio.Group options={radioOptions}></Radio.Group>
                    </Col>
                </Row>
                <Row gutter={20} style={{marginTop: '20px'}}>
                    <Col span={8}>获奖级别</Col>
                    <Col span={8}>项目主要成果</Col>
                    <Col span={8}>是否投产</Col>
                </Row>
                <Row gutter={20}>
                    <Col span={8}>
                        <Input placeholder="请输入获奖级别"></Input>
                    </Col>
                    <Col span={8}>
                        <Input placeholder="请输入项目主要成果"></Input>
                    </Col>
                    <Col span={8}>
                        <Radio.Group options={radioOptions}></Radio.Group>
                    </Col>
                </Row>
                <Row gutter={20} style={{marginTop: '20px'}}>
                    <Col span={8}>获奖等级</Col>
                    <Col span={8}>级别</Col>
                </Row>
                <Row gutter={20}>
                    <Col span={8}>
                        <Input placeholder="请输入获奖等级"></Input>
                    </Col>
                    <Col span={8}>
                        <Input placeholder="请输入级别"></Input>
                    </Col>
                </Row>
                <Row gutter={20} style={{marginTop: '20px'}}>
                    <Col span={8}>投产后经济效益</Col>
                    <Col span={8}>成果完成时间</Col>
                </Row>
                <Row gutter={20}>
                    <Col span={8}>
                        <Input placeholder="请输入投产后经济效益"></Input>
                    </Col>
                    <Col span={8}>
                        <Input placeholder="请输入成果完成时间"></Input>
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

export default NewClosingMaterials