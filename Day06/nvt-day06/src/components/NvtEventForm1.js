import React, { Component } from 'react'

class NvtEventForm1 extends Component {;   
    constructor(props){
        super(props);
        this.state = {
            nvtStudentName: 'Văn Thịnh',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (nvtStudentName)thay đổi
    nvtHandleChange = (event)=>{
        // Cập nhật lại state
        this.state({
            nvtStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    nvtStudentName = (ev)=>{
        alert ('Xin chào:' + this.state.nvtStudentName);
        ev.preventDefault();
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Form Input</h2>
        <form>
            <label htmlFor='nvtStudentName'>
                <input type='text' name='nvtStudentName' id='nvtStudentName' 
                    value={this.state.nvtStudentName}
                    onchange={this.nvtHandleChange}
                />
            
            </label>
            <button className='btn btn-primary'>Click here</button>
        </form>
      </div>
    );
  }
}

export default NvtEventForm1;
