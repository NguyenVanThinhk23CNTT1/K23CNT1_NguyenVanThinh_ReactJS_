import React from 'react'

export default function NvtFuncCompEventProps(nvtProps) {
  // Hàm xử lý sự kiện 
  const nvtHanldeButtonClick1 =()=>{
    alert("Dữ liệu từ props:" + nvtProps.nvtRenderName);
    console.log("Xin chao:",nvtProps.nvtRenderName);
  }
  const nvtHanldeButtonClick2 = (param)=>{
    // Lấy dữu liệu từ props
    alert("Dữ liệu từ props (Button 2 click):" + nvtProps.nvtRenderName);
    console.log('=============================');
    console.log("Hi:",param);
    console.log('=============================');
  }
  return (
    <div className="alert alert-info">
      <button className='btn btn-primary mx-1'
        onClick={nvtHanldeButtonClick1}>Button 1</button>

      <button className='btn btn-success mx-1'
        onClick={()=>nvtHanldeButtonClick2("Button2")}>button 2</button>
    </div>
  )
}
