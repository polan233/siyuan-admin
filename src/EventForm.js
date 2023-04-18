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
                      <Form.Item label="事件描述">
                      </Form.Item>
                      <Form.Item label="作者id">
                      </Form.Item>
                      <Form.Item label="时间">
                      </Form.Item>
                      <Form.Item label="是否是公元前">
                      </Form.Item>
                      <Form.Item label="时间">
                      </Form.Item>
                      <Form.Item label="地点id">
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