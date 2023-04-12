import React, { useState, useEffect } from 'react';
import {  UserOutlined,EyeTwoTone  } from '@ant-design/icons';
import { Card, Space, Button,Input } from 'antd';
import './App.css';

export function Login(props) {
    const [loading, setLoading] = useState(false);
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const login=props.login;
    const handleUserNameInput=(event)=>{
        setUserName(event.target.value);
    }
    const handlePasswordInput=(event)=>{
        setPassword(event.target.value)
    }
    const handleLogin=()=>{
        setLoading(true);
        console.log("username:",userName);
        console.log("password:",password);
        setTimeout(()=>{
            setLoading(false);
            login();
        },2000)
    }

    return (
      <div className='login'>
        <Card
            title="思源后台数据管理系统"
            style={{
                width: 300,
            }}
            >
            <Space direction="vertical">
                <Input
                    className='input-userName'
                    placeholder="请输入用户名"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    onChange={handleUserNameInput}
                />
                <Input.Password onChange={handlePasswordInput} placeholder="请输入密码" />
                <Button type="primary" loading={loading}  onClick={() => handleLogin()}>登录</Button>
            </Space>
        </Card>
      </div>
    );
  }