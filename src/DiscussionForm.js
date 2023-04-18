import {
    Button,
    Form,
    Input,
} from 'antd';
import React from 'react';
import TextIdPicker from './TextIdPicker';
const { TextArea } = Input;

export class DiscussionForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            text_id:"",
        }
    }

    handleSubmit(e){
        console.log("Discussion",this.state)
    }
    handleTitle(e){
        this.setState({
            title:e.target.value,
        })
    }
    handleText(data){
        this.setState({
            text_id:data,
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
                    <Form.Item label="题目">
                    <TextArea rows={12} onChange={this.handleTitle.bind(this)}  />
                    </Form.Item>
                    <Form.Item label="课文id">
                    <TextIdPicker onChange={this.handleText.bind(this)}></TextIdPicker>
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