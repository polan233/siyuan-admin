import { PlusOutlined,LoadingOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  Upload,
  Space,
  message,
  Radio,
  AutoComplete,
} from 'antd';
import React from 'react';
import { uploadAuthorImg,handleError } from './axios/api';
const { TextArea } = Input;

const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
});

export class TextForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text_name:"",
            author_id:"",
            publish_time:"",
            publish_place_id:"",
            content:"",
            textbook:"",
            type:1,
            authorList:[],
            placeList:[],
        }
    }
    handleTextName(e){
        this.setState({
            text_name:e.target.value,
        })
    }
    handleAuthorId(data){
        this.setState({
            author_id:data,
        })
    }
    handlePlaceId(data){
        this.setState({
            publish_place_id:data,
        })
    }
    handleAuthorIdInput(text){
        let list=[];
        list=!text ? [] : [mockVal(text), mockVal(text, 2), mockVal(text, 3)];
        this.setState({
            authorList:list,
        })
    }
    handlePlaceIdInput(text){
        let list=[];
        list=!text ? [] : [mockVal(text), mockVal(text, 2), mockVal(text, 3)];
        this.setState({
            placeList:list,
        })
    }
    handleSubmit(e){
        console.log("submit",this.state);
    }
    handlePublishTime(e){
        this.setState({
            publish_time:e.target.value,
        })
    }
    handleContentChange(e){
        this.setState({
            content:e.target.value,
        })
    }
    handleBook(e){
        this.setState({
            textbook:e.target.value,
        })
    }
    handleType(e){
        let type=0;
        if(e.target.value){
            type=1;
        }
        this.setState({
            type:type,
        })
    }
    render(){
        return(
            <>
                <Form
                className='form'
                labelCol={{
                span: 4,
                }}
                wrapperCol={{
                span: 14,
                }}
                layout="horizontal"
                
                >
                    <Form.Item label="课文名">
                    <Input  allowClear onChange={this.handleTextName.bind(this)} />
                    </Form.Item>
                    
                    <Form.Item label="作者"> {/*输入姓名选择id*/}
                    <AutoComplete
                        options={this.state.authorList}
                        onSelect={this.handleAuthorId.bind(this)}
                        onSearch={this.handleAuthorIdInput.bind(this)}
                        placeholder="请输入作者姓名然后选择对应id"
                        onChange={this.handleAuthorId.bind(this)}
                    />
                    </Form.Item>
                    
                    <Form.Item label="发表时间">
                    <Input  allowClear placeholder='时间格式使用YYYY-MM-DD 不详写0 如 1911-00-00 表示1911年日期不详 ' onChange={this.handlePublishTime.bind(this)} />
                    </Form.Item>

                    <Form.Item label="发表地点">
                    <AutoComplete
                        options={this.state.placeList}
                        onSelect={this.handlePlaceId.bind(this)}
                        onSearch={this.handlePlaceIdInput.bind(this)}
                        placeholder="请输入地名然后选择对应id"
                        onChange={this.handlePlaceId.bind(this)}
                    />
                    </Form.Item>

                    <Form.Item label="课文内容">
                    <TextArea rows={25} onChange={this.handleContentChange.bind(this)}  />
                    </Form.Item>
                    
                    <Form.Item label="书名">
                    <Input  allowClear placeholder='输入请用全中文 如必修一' onChange={this.handleBook.bind(this)} />
                    </Form.Item>

                    <Form.Item label="类型">
                    <Radio.Group onChange={this.handleType.bind(this)} value={this.state.type}>
                        <Radio value={1}>现代文</Radio>
                        <Radio value={0}>古文</Radio>
                    </Radio.Group>
                    </Form.Item>

                    <Form.Item>
                    <Button 
                    style={{float:'left',marginLeft:"45px"}} 
                    type="primary" 
                    htmlType="submit"
                    onClick={this.handleSubmit.bind(this)}
                    >
                        提交
                    </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}