import React, { Component } from 'react'
import NvtFuncCompEvent1 from './components/NvtFuncCompEvent1';
import NvtClassCompEvent1 from './components/NvtClassCompEvent1';
import NvtFunpEventProps from './components/NvtFuncCompEventProps';
import NvtFuncCompEventProps from './components/NvtFuncCompEventProps';
import NvtClassCompEventProps from './components/NvtClassCompEventProps';
import NvtClassCompEventState from './components/NvtClassCompEventState';
import NvtClassCompEventPostData from './components/NvtClassCompEventPostData';

 class NvtApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      nvtNoiDung:"chưa có gì",
    }
  }
  // Hàm xử lý sự kiện khi component con chuyển dữ liệu lên 
  nvtHandleDataToApp = (content)=>{
    alert(content);
    this.setState()
  }
  render() {
    return (
      <div className='container border mt-3'>
            <h1 className='text - center alert alert-info my-2'>K23CNT1 - Nguyễn Văn Thịnh - Event and Form</h1>
            <hr/>
            <div>
              <h2>Function Component - Event</h2>
              <NvtFuncCompEvent1 />
            </div>
            <hr/>
            <div>
              <h2>Class Component - Event</h2>   
              <NvtClassCompEvent1 />           
            </div>   
            <div>
              <h2>Function Component - Event; props</h2>  
              <NvtFuncCompEventProps nvtRenderName="Nguyễn Văn Thịnh"/>
            </div>  
            <hr/>   
            <div>
              <h2>Class Component - Event; props</h2>
              <NvtClassCompEventProps nvtRenderTitle = "Welcome to Văn Văn"/>  
            </div>   
            <div>
              <h2>Class Component - Event; state</h2>  
              <NvtClassCompEventState/>
            </div>  
            <div>
              <h1>{this.state.nvtNoiDung}</h1>
              <h2>Class Component - Event; Post Data to App </h2>  
              <NvtClassCompEventPostData onNvtDataToApp={this.nvtHandleDataToApp}/>
            </div>     
      </div>
    );
  }
}

export default NvtApp;