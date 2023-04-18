import {
    Button,
    Form,
    Input,
    Radio,
  
} from 'antd';
import React from 'react';
import AuthorIdPicker from './AuthorIdPicker';
import PlaceIdPicker from './PlaceIdPicker';
const { TextArea } = Input;

export class EventForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description:"",
            author_id:"",
            time:"",
            place_id:"",
            isBC:false,
        }
    }
    
    handleSubmit(e){
        console.log("EventForm",this.state)
    }
    handleDesc(e){
    this.setState({
        description:e.target.value,
    })
    }
    handleAuthorId(data){
    this.setState({
        author_id:data,
    })
    }
    handleTime(e){
    this.setState({
        time:e.target.value,
    })
    }
    handleBC(e){
    this.setState({
        isBC:e.target.value,
    })
    }
    handlePlaceId(data){
    this.setState({
        place_id:data,
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
                    <Form.Item label="事件描述">
                    <TextArea rows={12} onChange={this.handleDesc.bind(this)}  />
                    </Form.Item>
                    <Form.Item label="作者id">
                    <AuthorIdPicker onChange={this.handleAuthorId.bind(this)}></AuthorIdPicker>
                    </Form.Item>
                    <Form.Item label="时间">
                    <Input  allowClear placeholder='公元前时间请在下面勾选,公元前200年也写 200-00-00 时间格式使用YYYY-MM-DD 不详写0 如 1911-00-00 表示1911年日期不详' onChange={this.handleTime.bind(this)} />
                    </Form.Item>
                    <Form.Item label="是否是公元前">
                    <Radio.Group onChange={this.handleBC.bind(this)} value={this.state.isBC}>
                    <Radio value={1}>是公元前</Radio>
                    <Radio value={0}>不是公元前</Radio>
                    </Radio.Group>
                    </Form.Item>
                    <Form.Item label="地点id">
                    <PlaceIdPicker onChange={this.handlePlaceId.bind(this)}></PlaceIdPicker>
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