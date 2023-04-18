import {
  Button,
  Form,
  Input,
  Radio,
  AutoComplete,
  message,
} from 'antd';
import React from 'react';
import AuthorIdPicker from './AuthorIdPicker';
import PlaceIdPicker from './PlaceIdPicker';
const { TextArea } = Input;



export class TextForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text_name:null,
            author_id:null,
            publish_time:null,
            publish_place_id:null,
            content:null,
            textbook:null,
            type:null,
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
    handleSubmit(e){
        let values=Object.values(this.state);
        for(let i=0;i<values.length;i++){
            if(values[i]==null||values[i]==undefined||values[i]==""){
                message.error("有未完成表项,请填写所有表项!")
                return;
            }
        }
        message.success("提交成功");
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
        this.setState({
            type:e.target.value
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
                    <AuthorIdPicker onChange={this.handleAuthorId.bind(this)}></AuthorIdPicker>
                    </Form.Item>
                    
                    <Form.Item label="发表时间">
                    <Input  allowClear placeholder='时间格式使用YYYY-MM-DD 不详写0 如 1911-00-00 表示1911年日期不详 ' onChange={this.handlePublishTime.bind(this)} />
                    </Form.Item>

                    <Form.Item label="发表地点">
                    <PlaceIdPicker onChange={this.handlePlaceId.bind(this)}></PlaceIdPicker>
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

                    <Form.Item label="提交按钮">
                    <Button
                    onClick={this.handleSubmit.bind(this)}
                    type='primary'
                    >
                        提交
                    </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}