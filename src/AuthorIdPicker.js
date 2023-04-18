import React from "react";
import {AutoComplete,} from 'antd';
//返回搜索列表的列表项
const mockVal = (str, repeat = 1) => ({
    value: str+":"+"作者id"+repeat,
});

export default class AuthorIdPicker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options:[],
        }
        this.onChange=this.onChange.bind(this);
        this.handleAuthorIdInput=this.handleAuthorIdInput.bind(this);
    }

    handleAuthorIdInput(text){
        let list=[];
        //返回搜索列表
        list=!text ? [] : [mockVal(text), mockVal(text, 2), mockVal(text, 3)];
        this.setState({
            options:list,
        })
    }
    onChange(text){
        this.props.onChange(text);
    }
    render(){
        return(
            <>
                <AutoComplete
                        options={this.state.options}
                        onSearch={this.handleAuthorIdInput}
                        placeholder={"请输入作者姓名然后选择对应id"}
                        onChange={this.onChange}
                />
            </>
        )
    }
}