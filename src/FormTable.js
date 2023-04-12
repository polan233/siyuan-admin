import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  TreeSelect,
  Upload,
  Radio,
  Space
} from 'antd';

import { useState } from 'react';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const FormTable = () => {
    const [mode,setMode] = useState("form");
    const handleChangeMode=({ target: { value } })=>{
        console.log('radio1 checked', value);
        setMode(value);
    }
    let content=(
        <Form
            className='form'
            labelCol={{
            span: 4,
            }}
            wrapperCol={{
            span: 14,
            }}
            layout="horizontal"
            style={{
            maxWidth: 600,
            }}
        >
            <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
            <Checkbox>Checkbox</Checkbox>
            </Form.Item>
            <Form.Item label="Radio">
            <Radio.Group>
                <Radio value="apple"> Apple </Radio>
                <Radio value="pear"> Pear </Radio>
            </Radio.Group>
            </Form.Item>
            <Form.Item label="Input">
            <Input />
            </Form.Item>
            <Form.Item label="Select">
            <Select>
                <Select.Option value="demo">Demo</Select.Option>
            </Select>
            </Form.Item>
            <Form.Item label="TreeSelect">
            <TreeSelect
                treeData={[
                {
                    title: 'Light',
                    value: 'light',
                    children: [
                    {
                        title: 'Bamboo',
                        value: 'bamboo',
                    },
                    ],
                },
                ]}
            />
            </Form.Item>
            <Form.Item label="Cascader">
            <Cascader
                options={[
                {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                    },
                    ],
                },
                ]}
            />
            </Form.Item>
            <Form.Item label="DatePicker">
            <DatePicker />
            </Form.Item>
            <Form.Item label="RangePicker">
            <RangePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
            <InputNumber />
            </Form.Item>
            <Form.Item label="TextArea">
            <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
            <Switch />
            </Form.Item>
            <Form.Item label="Upload" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
                <div>
                <PlusOutlined />
                <div
                    style={{
                    marginTop: 8,
                    }}
                >
                    Upload
                </div>
                </div>
            </Upload>
            </Form.Item>
            <Form.Item label="Button">
            <Button>Button</Button>
            </Form.Item>
            <Form.Item>
            <Button style={{float:'left',marginLeft:"45px"}} type="primary" htmlType="submit">
                提交
            </Button>
            </Form.Item>
        </Form>
    )
    if(mode=="table"){
        content=(
            <div>table</div>
        )
    }
    return (
        <>
        <Radio.Group defaultValue="form" buttonStyle="solid" onChange={handleChangeMode} value={mode}>
            <Radio.Button value="form">插入模式</Radio.Button>
            <Radio.Button value="table">查看模式</Radio.Button>
        </Radio.Group>
        {content}
        </>
    );
};
export default () => <FormTable />;