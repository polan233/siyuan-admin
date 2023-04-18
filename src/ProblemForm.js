import {
    Button,
    Form,
    Input,
    Radio,
    message,
} from 'antd';
import React from 'react';
import TextIdPicker from './TextIdPicker';
const { TextArea } = Input;

export class ProblemForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:null,
            answer:null,
            text_id:null,
            type:null,
        }
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
        console.log("Problem",this.state)
    }
    handleTitle(e){
        this.setState({
            title:e.target.value,
        })
    }
    handleAnswer(e){
        this.setState({
            answer:e.target.value,
        })
    }
    handleText(data){
        this.setState({
            text_id:data,
        })
    }
    handleType(e){
        this.setState({
            type:e.target.value,
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
                    <TextArea rows={3} onChange={this.handleTitle.bind(this)}  />
                    </Form.Item>
                    <Form.Item label="答案">
                    <TextArea rows={3} onChange={this.handleAnswer.bind(this)}  />
                    </Form.Item>
                    <Form.Item label="课文id">
                    <TextIdPicker onChange={this.handleText.bind(this)}></TextIdPicker>
                    </Form.Item>
                    
                    <Form.Item label="题目类型">
                    <Radio.Group onChange={this.handleType.bind(this)} value={this.state.type}>
                    <Radio value={0}>句子默写</Radio>
                    <Radio value={1}>字词解释</Radio>
                    <Radio value={2}>句子翻译</Radio>
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