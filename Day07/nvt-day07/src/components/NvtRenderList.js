import React from 'react'

export default function NvtRenderList() {
    const nvtNumbers = ["Hùng","Dũng","Sang","Trang"];
    
    // Hiển thị giá trị của mảng 
    const nvtElementNumber = nvtNumbers.map((item)=>{
        return <li>{item}</li>
    })
    
  return (
    <div>
        <h2>Danh sách các anh hùng thời đại</h2>
        {nvtElementNumber}
    </div>
  )
}
