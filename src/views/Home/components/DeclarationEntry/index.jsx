import { Card, Input, Row, Col, Select } from "antd"


const DeclarationEntry = () => {
    return (
        <div className="declaration-entry-box">
            <Card>
                <Row>
                    <p>学院</p>
                </Row>
                <Row style={{
                    marginTop: '10px'
                }}>
                    <Col span={6}>
                        <Input></Input>
                    </Col>
                </Row>
            </Card>
            <Card style={{
                marginTop: '20px'
            }}
            title="项目管理信息">
                <Row gutter={20}>
                    <Col span={8}>项目名称</Col>
                    <Col span={8}>项目类别</Col>
                    <Col span={8}>变更后作品分类</Col>
                </Row>
                <Row gutter={20} style={{marginTop: '10px'}}> 
                    <Col span={8}>
                        <Input placeholder="请输入项目名称"></Input>
                    </Col>
                    <Col span={8}>
                        <Input placeholder="请输入项目类别"></Input>
                    </Col>
                    <Col span={8}>
                        <Select placeholder="请选择作品类别" style={{width: '100%'}}></Select>
                    </Col>
                </Row>
                <Row gutter={20} style={{marginTop: '20px'}}>
                    <Col span={8}>项目负责人</Col>
                    <Col span={8}>负责人电话</Col>
                    <Col span={8}>指导老师姓名</Col>
                </Row>
                <Row gutter={20} style={{marginTop: '10px'}}>
                    <Col span={8}>
                        <Input placeholder="请输入负责人姓名"></Input>
                    </Col>
                    <Col span={8}>
                        <Input placeholder="请输入负责人电话"></Input>
                    </Col>
                    <Col span={8} >
                        <Row gutter={10}>
                            <Col span={8}>
                                <Input placeholder="指导老师1"></Input>
                            </Col>
                            <Col span={8}>
                                <Input placeholder="指导老师2"></Input>
                            </Col>
                            <Col span={8}>
                                <Input placeholder="指导老师3"></Input>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default DeclarationEntry