import {
  Radio,
} from 'antd';

import React from 'react';
import { AuthorForm } from './AuthorForm';
import { TextForm } from './TextForm';
import { CityForm } from './CityForm';


export default class FormTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mode:"form"
        }
        this.handleChangeMode=this.handleChangeMode.bind(this);
    }
    handleChangeMode=({ target: { value } })=>{
        this.setState({mode:value});
    }
    render(){
        let content=null;
        if(this.state.mode=="table"){
            content=(
                <div>table</div>
            )
        }
        else{
            if(this.props.selectMenu=='author'){
                content=<AuthorForm></AuthorForm>
            }
            else if(this.props.selectMenu=='text'){
                content=<TextForm></TextForm>
            }
            else if (this.props.selectMenu=='city'){
                content=<CityForm></CityForm>
            }
        }
        return (
            <>
            <Radio.Group  defaultValue="form" buttonStyle="solid" onChange={this.handleChangeMode} value={this.state.mode}>
                <Radio.Button value="form">插入模式</Radio.Button>
                <Radio.Button value="table">查看模式</Radio.Button>
            </Radio.Group>
            {content}
            </>
        );
    }
}


