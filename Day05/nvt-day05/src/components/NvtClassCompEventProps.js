import React, { Component } from 'react'

 class NvtClassCompEventProps extends Component {
     
    // Hàm xử lý sự kiện
    nvtEventHandleClick1 = ()=> {
        alert("hello ..." + this.props.nvtRenderTitle);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.nvtEventHandleClick1}>Button</button>
      </div>
    );
  }
}

export default NvtClassCompEventProps;
