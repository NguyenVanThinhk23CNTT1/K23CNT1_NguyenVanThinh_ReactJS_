import React, { Component } from 'react'
import NvtClassCompEvent1 from './NvtClassCompEvent1';

 class  NvtClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }

    //Hàm sử lý sự kiện 
    nvtEventHandleClick = ()=>
        // Chuyển dữ liệu lên App thông qua props
        this.props.onNvtDataToApp("Dữ liệu từ component con - NvtClassCompEventPostData")
  render() {
    return (
      <div className='alert alert-success'>
        <button className="btn btn-primary"
        onClick={this.nvtHandleClick}>
            Button 1 - Chuyển dữu liệu lên App</button>
      </div>
    );
  }
}

export default NvtClassCompEventPostData; 