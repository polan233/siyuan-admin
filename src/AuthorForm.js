import { PlusOutlined,LoadingOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  Upload,
  Space,
  message,
} from 'antd';
import React from 'react';
import { uploadAuthorImg,handleError } from './axios/api';
const { TextArea } = Input;

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};


export class AuthorForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading:false,
            imgUrl:null,
        }
        this.handleChange=this.handleChange.bind(this);
        this.uploadAuthorImg=this.uploadAuthorImg.bind(this);
        this.handleAuthorNameChange=this.handleAuthorNameChange.bind(this);
        this.handleAuthorInfoChange=this.handleAuthorInfoChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.beforeUpload=this.beforeUpload.bind(this);
    }
    handleChange(info){
        if (info.file.status === 'uploading') {
            this.setState({loading:true});
            return;
        }
        if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (url) => {
            this.setState({
                loading:null,
                imgUrl:null,
                authorName:null,
                authorInfo:null,
            });
        });
        }
    }
    beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('请上传JPG\PNG格式图片!');
        }
        const hasAuthorName = this.state.authorName!==""|| this.state.authorName!="" || this.state.authorName !=undefined;
        if(!hasAuthorName){
            message.error('请先填写作者名称!');
        }
        return isJpgOrPng&&hasAuthorName ;
    };
    uploadAuthorImg(options){
        this.setState({loading:true});
        const { onSuccess, onError, file, onProgress } = options;
        //console.log(options);
        const reader = new FileReader();
        reader.readAsDataURL(file); // 读取图片文件
        reader.onload = (file) => {
            const base64=file.target.result;
            // 在这里我们调用朱老师的接口上传图片
            // setTimeout(()=>{
            //     console.log("base64",base64);
            //     this.setState({
            //         loading:false,
            //     })
            // },200)
            uploadAuthorImg(file,this.state.authorName).then((res)=>{

                this.setState({
                    loading:false,
                    imgUrl:res.data.data,
                })
                message.success("图片上传成功!");
            }).catch((e)=>{
                message.error("上传失败!");
                console.log("上传失败",e);
                handleError(e);
            })
        }
    }
    handleAuthorNameChange(e){
        this.setState({authorName:e.target.value});
    }
    handleAuthorInfoChange(e){
        this.setState({authorInfo:e.target.value});
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
        console.log("handleSubmit",this.state);
    }
    render(){
        const url=this.state.url;
        const loading=this.state.loading;
        const uploadButton = (
            <div>
              {loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
        );
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
                    <Form.Item label="作者姓名" >
                    <Input value={this.state.authorName} onChange={this.handleAuthorNameChange} />
                    </Form.Item>
                    
                    <Form.Item label="作者简介" >
                    <TextArea rows={13} value={this.state.authorInfo} onChange={this.handleAuthorInfoChange}  />
                    </Form.Item>
                    
                    <Form.Item label="作者图片" valuePropName="fileList" >
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        customRequest={this.uploadAuthorImg}
                        beforeUpload={this.beforeUpload}
                        onChange={this.handleChange}
                    >
                        {url ? (
                        <img
                            src={url}
                            alt="avatar"
                            style={{
                            width: '100%',
                            }}
                        />
                        ) : (
                        uploadButton
                        )}
                    </Upload>
                    </Form.Item>
                    
                    <Form.Item label="提交按钮" >
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

