import React from 'react';
// import 'antd/dist/reset.css';
import "./App.css"
import {  Col, Row } from 'antd';
import { Input } from 'antd';
import logoPic from './img/siyuan.webp';
const { Search } = Input;


const onSearch = (value) => console.log(value);

class Top extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='Top'>
        <Row justify="space-around" align={"middle"}>
          <Col span={"100px"}>
            <img id='topLogo' src={logoPic} className="logoBig" width={"100px"} height={"100px"} alt="LOGO"/>
          </Col>
          <Col flex="auto" />
          <Col flex={"300px"}>
            <h1 className='topTitle'>思源后台数据管理系统</h1>
          </Col>
          <Col flex="auto" />
        </Row>
      </div>
    );
  }
}
export default Top;