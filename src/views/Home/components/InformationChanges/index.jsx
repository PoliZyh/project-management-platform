import { Card, Input, Row, Col, Select, Table, Space, Button, Flex } from "antd"
import { CheckOutlined, PlusOutlined } from "@ant-design/icons"
import { useState } from "react"

const InformationChanges = () => {
    const tableColumns = [
        {
            title: '成员',
            dataIndex: 'memberName',
            key: 'memberName',
            render: (memberName, record, index) => (
                <Space.Compact style={{width: '100%'}}>
                    <Input value={memberName} onChange={(e) => onChangeTableItem('memberName', e.target.value, index)} disabled={!record.canuse || disabledMapState['memberName' + index]}></Input>
                    <Button disabled={!record.canuse || disabledMapState['memberName' + index]} onClick={() => disabledInput('memberName', index)} icon={<CheckOutlined></CheckOutlined>}></Button>
                </Space.Compact>
            )
        },
        {
            title: '学号',
            dataIndex: 'id',
            key: 'id',
            render: (id, record, index) => (
                <Space.Compact style={{width: '100%'}}>
                    <Input disabled={!record.canuse || disabledMapState['id' + index]} value={id} onChange={(e) => onChangeTableItem('id', e.target.value, index)}></Input>
                    <Button disabled={!record.canuse || disabledMapState['id' + index]} onClick={() => disabledInput('id', index)} icon={<CheckOutlined></CheckOutlined>}></Button>
                </Space.Compact>
            )
        },
        {
            title: '学院',
            dataIndex: 'collegeName',
            key: 'collegeName',
            render: (collegeName, record, index) => (
                <Space.Compact style={{width: '100%'}}>
                    <Input disabled={!record.canuse || disabledMapState['collegeName' + index]} value={collegeName} onChange={(e) => onChangeTableItem('collegeName', e.target.value, index)}></Input>
                    <Button disabled={!record.canuse || disabledMapState['collegeName' + index]} onClick={() => disabledInput('collegeName', index)} icon={<CheckOutlined></CheckOutlined>}></Button>
                </Space.Compact>
            )
        },
        {
            title: '操作',
            dataIndex: 'option',
            key: 'option',
            render: (_, __, index) => (
                <>
                    <Space size="middle">
                        <a onClick={() => editTableRow(index)}>编辑</a>
                        <a onClick={() => removeTableRow(index)}>删除</a>
                    </Space>
                </>
            )
        }
    ]
    const tableData = [
        {
            memberName: '测试用例1',
            id: '2021212205080',
            collegeName: '信息科学与技术学院',
            key: '1',
        },
        {
            memberName: '测试用例2',
            id: '2021212205079',
            collegeName: '信息科学与技术学院',
            key: '2',
        }
    ]

    const [tableDataState, setTableDataState] = useState(tableData)
    const [disabledMapState, setDisabledMapState] = useState({})
    const [keyState, setKeyState] = useState(tableDataState.length)

    const onChangeTableItem = (key, value, index) => {
        const item = tableDataState[index]
        item[key] = value
        setTableDataState([...tableDataState])
    }
    const onAddTableItem = () => {
        tableDataState.push({
            memberName: '',
            id: '',
            collegeName: '',
            key: keyState + 1
        })
        setKeyState(keyState + 1)
        setTableDataState([...tableDataState])
    }
    const disabledInput = (key, index) => {
        disabledMapState[key + index] = true
        setDisabledMapState({...disabledMapState})
    }
    const editTableRow = (index) => {
        onChangeTableItem('canuse', true, index)
        disabledMapState['id' + index] = false
        disabledMapState['memberName' + index] = false
        disabledMapState['collegeName' + index] = false
    }
    const removeTableRow = (index) => {
        onChangeTableItem('canuse', false, index)
        disabledMapState['id' + index] = false
        disabledMapState['memberName' + index] = false
        disabledMapState['collegeName' + index] = false
        tableDataState.splice(index, 1)
        setTableDataState([...tableDataState])
    }

    return (
        <div className="information-changes-box">
            <Card>
                <Row>
                    <p>学院</p>
                </Row>
                <Row style={{
                    marginTop: '10px'
                }}>
                    <Col span={6}>
                        <Input placeholder="请输入学院名称"></Input>
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
            <Card style={{marginTop: '20px'}} title="成员管理">
                <Row>
                    <Col span={24}>
                        <Table columns={tableColumns} dataSource={tableDataState} pagination={false}></Table>
                    </Col>
                </Row>
                <Row style={{marginTop: '10px'}}>
                    <Flex style={{width: '100%'}} justify="center">
                        <Button onClick={onAddTableItem} icon={<PlusOutlined></PlusOutlined>}>新增成员</Button>
                    </Flex>
                </Row>
                
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

export default InformationChanges