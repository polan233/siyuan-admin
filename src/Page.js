import { FileTextOutlined} from '@ant-design/icons';
import React from 'react';
import { Layout,Menu } from 'antd';
import './App.css';
import FormTable from './FormTable';

const { Header, Footer, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    height: 64,
    lineHeight: '64px',
    backgroundColor:"#bae0ff"
  };
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
};

const items = [
    {
      label: '作者表',
      key: 'author',
      icon: <FileTextOutlined />,
    },
    {
      label: '课文信息表',
      key: 'text',
      icon: <FileTextOutlined />,
    },
    {
      label: '城市表',
      key: 'city',
      icon: <FileTextOutlined />,
    },
    {
      label: '事件表',
      key: 'event',
      icon: <FileTextOutlined />,
    },
    {
      label: '讨论题表',
      key: 'discussion',
      icon: <FileTextOutlined />,
    },
    {
      label: '课后问题表',
      key: 'problem',
      icon: <FileTextOutlined />,
    },
    {
      label: '额外作品表',
      key: 'extra_work',
      icon: <FileTextOutlined />,
    },
    
  ];

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectMenu:"author"
        }
        this.handleMenuClick=this.handleMenuClick.bind(this);
    }
    handleMenuClick(e){
        this.setState({
            selectMenu:e.key
        })
    }
    render(){
        return(
            <div className='page'>
                <Layout>
                    <Header style={headerStyle}>
                        <Menu className='topMenu'  onClick={this.handleMenuClick} selectedKeys={[this.state.selectMenu]} mode="horizontal" items={items} />
                    </Header>
                    <Content style={contentStyle}>
                        <FormTable/>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Page