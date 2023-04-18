import {
  Button,
  Form,
  Input,

} from 'antd';
import React from 'react';


export class CityForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            city_name:"",
            lng:"",
            lat:"",
        }
    }
    handleCityName(e){
        this.setState({
            city_name:e.target.value,
        })
    }
    handlePoint(e){
        let str=e.target.value;
        let point=str.split(",",2);
        this.setState({
            lng:point[0],
            lat:point[1],
        })
    }
    handleSubmit(e){
        console.log("CityForm",this.state)
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
                    <Form.Item label="城市名">
                    <Input  allowClear placeholder='外国城市前请加国名' onChange={this.handleCityName.bind(this)} />
                    </Form.Item>
                    <Form.Item>
                    <a target="view_window" href='https://api.map.baidu.com/lbsapi/getpoint/index.html'>百度地图坐标拾取工具</a>
                    </Form.Item>
                    <Form.Item label="坐标">
                    <Input  allowClear placeholder="请使用上附坐标拾取工具,格式: lng,lat" onChange={this.handlePoint.bind(this)} />
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