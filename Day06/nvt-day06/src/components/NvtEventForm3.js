import React, { Component } from 'react'

class NvtEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvtGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    nvtHandleChange = (event)=>{
        this.setState({
            nvtGioiTinh:event.target.value,
        })
    }

    // Hàm xửu lý sự kiện submit form
    nvtHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là:" + this.state.nvtGioiTinh)
    }
  render() {
    return (
      <div className='alert alert-success'>
        <h2> Form input - radio</h2>
        <form>
            <div>
                <label htmlFor>Giới tính</label>
                <input type='radio' name='nvtGioiTinh'  id='nvtNam' className='ml-2'
                    value="Nam" checked={this.state.nvtGioiTinh === 'Nam'} onChange={this.nvtHandleChange}/> 
                    <label htmlFor='nvtNam'>Nam</label>
                <input type='radio' name='nvtGioiTinh'  id='nvtNu' className='ml-2'
                    value="Nữ" checked={this.state.nvtGioiTinh === 'Nữ'} onChange={this.nvtHandleChange}/> 
                    <label htmlFor='nvtNu'>Nữ</label>
                <input type='radio' name='nvtGioiTinh'  id='nvtKhac' className='mx-2'
                    value="Khác" checked={this.state.nvtGioiTinh === 'Khác'} onChange={this.nvtHandleChange}/> 
                    <label htmlFor='nvtKhac'>Khác</label>
            </div>
            <button onClick={this.nvtHandleChange}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NvtEventForm3;
