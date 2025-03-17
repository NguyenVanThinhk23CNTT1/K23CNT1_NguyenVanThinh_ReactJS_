import React, { useEffect, useState } from 'react'

export default function NvtUseEffect() {
    // state
    const [nvtCount, setNvtCount] = useState(0);

    // useEffect sử dụng 1 tham số: Được thực hiện mỗi khi render / re-render
    useEffect(()=>{
        console.log("Đây là useEffect một tham số");
    });    

    // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng rỗng => Được gọi duy nhất một lần khi render
    useEffect(()=>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng rỗng []");

    },[]);


    // useEffect sử dụng 2 tham số; tham số thứ 2 là các đối số phụ thuộc
    // => Được gọi mỗi khi đối số thay đổi
    // khởi tạo state là một mảng 
        const nvtArr = [10,12,20,22];
        const [nvtArray, setNvtArray] = useState(nvtArr); 
    useEffect(()=>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng đối số phụ thuộc [nvtArray]");
    },[nvtArray]);

    useEffect(()=>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng rỗng [nvtCount]");
    },[nvtCount]);
    
    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng 
    const nvtHandleAddList=()=>{
        setNvtArray([
            ...nvtArray,
            parseInt(Math.random()*100),
        ])
    }
  return (
    <div className='alert alert-info'>
        <h2>Demo useEffect</h2>
        <h3>Count: {nvtCount}</h3>
        <button onClick={()=>setNvtCount(nvtCount+1)}>Click here</button>

        <div>
            <h3>Array: {nvtArray.toString()}</h3>
            <button onClick={nvtHandleAddList}>Thêm </button>
        </div>
    </div>
  )
}
