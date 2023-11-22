import { Card, Row, Col, Input, Radio, DatePicker, Table, Flex, Button, Space } from "antd"
import { useState } from "react"
import { CheckOutlined, PlusOutlined } from "@ant-design/icons"

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

const NewDeclarationEntry = () => {

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

    const [radioValue, setRadioValue] = useState(true)
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

    const handleChangeRadioValue = (e) => {
        setRadioValue(e.target.value)
    }

    const handleChangeDatePicker = (_, dateString) => {

    }
    
    return (
        <div className="new-declaration-entry">
            <Card>
                <Row>学院</Row>
                <Row style={{marginTop: '10px'}}>
                    <Col span={6}>
                        <Input placeholder="请输入学院名字"></Input>
                    </Col>
                </Row>
            </Card>
            <Card style={{marginTop: '20px'}} title="项目信息管理">
                <Row gutter={20}>
                    <Col span={8}>项目名称</Col>
                    <Col span={8}>项目类别</Col>
                    <Col span={4}>指导老师</Col>
                    <Col span={4}>教师职称(中级以上)</Col>
                </Row>
                <Row gutter={20} >
                    <Col span={8}>
                        <Input placeholder="请输入项目名称"></Input>
                    </Col>
                    <Col span={8}>
                        <Input placeholder="请输入项目类别"></Input>
                    </Col>
                    <Col span={4}>
                        <Input placeholder="请输入姓名"></Input>
                    </Col>
                    <Col span={4}>
                        <Input placeholder="请输入职称"></Input>
                    </Col>
                </Row>
                <Row gutter={20} style={{marginTop: '10px'}}>
                    <Col span={8} style={{position: 'relative'}}>
                        <span style={{position: 'absolute', top: '65%'}}>项目负责人</span>
                    </Col>
                    <Col span={8} style={{position: 'relative'}}>
                        <span style={{position: 'absolute', top: '65%'}}>负责人电话</span>
                    </Col>
                    <Col span={4}>
                        <Input placeholder="请输入姓名"></Input>
                    </Col>
                    <Col span={4}>
                        <Input placeholder="请输入职称"></Input>
                    </Col>
                </Row>
                <Row gutter={20} style={{marginTop: '10px'}}>
                    <Col span={8}>
                        <Input placeholder="请输入负责人姓名"></Input>
                    </Col>
                    <Col span={8}>
                        <Input placeholder="请输入负责人电话"></Input>
                    </Col>
                    <Col span={4}>
                        <Input placeholder="请输入姓名"></Input>
                    </Col>
                    <Col span={4}>
                        <Input placeholder="请输入职称"></Input>
                    </Col>
                </Row>
                <Row gutter={20} style={{marginTop: '10px'}}>
                    <Col span={8} style={{position: 'relative', bottom: '-20px'}}>学院排名</Col>
                    <Col span={8} style={{position: 'relative', bottom: '-20px'}}>是否参加"挑战杯"竞赛</Col>
                    <Col span={8}>
                        <Row gutter={0}>
                            <Col span={6} style={{position: 'relative', bottom: '-5px'}}>级别</Col>
                            <Col span={18}>
                                <Input></Input>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row gutter={20} style={{marginTop: '10px'}}>
                    <Col span={8}>
                        <Input></Input>
                    </Col>
                    <Col span={8}>
                        <Radio.Group options={radioOptions}
                        value={radioValue}
                        onChange={handleChangeRadioValue}></Radio.Group>
                    </Col>
                    <Col span={8}>
                        <Row >
                            <Col span={6} style={{position: 'relative', bottom: '-5px'}}>拟完成时间</Col>
                            <Col span={18}>
                                <DatePicker onChange={handleChangeDatePicker}></DatePicker>
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


export default NewDeclarationEntry