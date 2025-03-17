import React, { Component } from 'react';

 class NvtClassCompEvent1 extends Component {
    // Hàm xử lý sự kiện 
    nvtEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }

    nvtEventHandleClick2 = (name)=>{
        alert("Button 2 clicked; name="+name);
    }

  render() {
    return (
      <div className="alert alert-danger">
        <button className='btn btn-primary mx-1' onClick={this.nvtEventHandleClick1}>Button 1</button>
        <button className='btn btn-success mx-1' 
          onClick={()=>this.nvtEventHandleClick2("Văn Thịnh")}>Button 2</button>
      </div>
    );
  }
}

export default NvtClassCompEvent1;
