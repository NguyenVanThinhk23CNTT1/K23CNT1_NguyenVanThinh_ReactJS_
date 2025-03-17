import React, { useState } from 'react'

export default function NvtUseState() {
  // Tạo state là count và hàm cập nhật state là setCount
  const [count, setCount] = useState(0);
  // Hàm xử lý sự kiện tăng giá trị cả count
  const nvtHandleTang = () => {
    setCount(count + 1);
  }

  // state là mảng list
  const danh_sach = [100, 120, 150, 200];
  // Khởi tạo state
  const [list, setlist] = useState(danh_sach);
  //Hàm xử lý sự kiện phần tử ngẫu nhiên vào danh sách 
  const nvtHandleNewRandom = () => {
    // setlist(prev =>{
    //    return [...prev,
    //        parseInt(Math.random()*1000)
    //    ]
    // })

    setlist([
      ...list,
      parseInt(Math.random()*1000)
    ])

    
  }
  return (
    <div className='alert alert-info'>
      <h2>Sử dụng useState</h2>
      <div>
        <b>Count: {count} </b>
        <button onClick={nvtHandleTang}>Tăng</button>
        <button onClick={() => setCount(count - 1)}>Giảm</button>
        <button onClick={() => setCount(0)}>Đặt lại</button>
      </div>
      <div>
        <h3>List: {list.toString()}</h3>
        <button onClick={nvtHandleNewRandom}>Add new(random)</button>
      </div>
    </div>
  )
}
