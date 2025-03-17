import React, { Component } from 'react'

class NvtClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvtFullName:"Nguyễn Văn Thịnh",
            nvtAge:19,
        }
    }

    // Hàm xử lý sự kiện 
    nvtEventHandleClick1 = ()=>{
        // Lấy dữi liệu trong state
        alert("FullName: " +this.state.nvtFullName + "\n Age:" + this.state.nvtAge);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.nvtEventHandleClick}>Button 1 - Dữ liệu trong state</button>       
      </div>
    );
  }
}

export default NvtClassCompEventState;