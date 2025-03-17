import React, { Component } from 'react';
import NvtLoginControl from './NvtLoginControl';

 class NvtRenderConditon extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    nvtHandlelogin = (ev)=>{
        console.log("Login");
        
        ev.preventDefault();
        this.setState({
            isLoggedIn:true
        })
    }
    // Hàm xử lý sự kiện Logout
    nvtHandlelogout = (event)=>{
        console.log("Logout");
        
        event.preventDefault();
        this.setState({
            isLoggedIn:false
        })
    }
  render() {
    console.log(this.state.isLoggedIn);
    
    return (
      <div className='alert alert-danger'>
        <NvtLoginControl isLoggedIn={this.state.isLoggedIn} />

        {
            this.state.isLoggedIn ?
            <button className='btn btn-danger' onClick={this.nvtHandlelogout}>Logout</button>
            : <button className='btn btn-primary' onClick={this.nvtHandlelogin}>Login</button>
        }
      </div>
    );
  }
}

export default NvtRenderConditon;