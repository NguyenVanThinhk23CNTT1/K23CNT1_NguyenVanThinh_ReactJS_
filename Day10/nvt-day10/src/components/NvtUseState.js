import React, { useState } from 'react'

export default function NvtUseState() {
    // khởi tạo state
    const [nvtCount, setNvtCount] = useState(0);

   // khởi tạo state là một mảng 
    const nvtArr = [10,12,20,22];
    const [nvtArray, setNvtArray] = useState(nvtArr); 

    // khởi tạo mảng object 
    const nvtStudents = [
        {nvtId:"SV001",nvtName:"Văn Thịnh",nvtAge:20},
        {nvtId:"SV002",nvtName:"La Văn Nam",nvtAge:22},
    ];
    const [nvtStudentList, setNvtStudentList] = useState(nvtStudents);

    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng
    const nvtHandleAddList=()=>{
        setNvtArray([
        ...nvtArray,
        parseInt(Math.random()*100),
        ])
    }

    // Hàm xử lý sự kiện thêm mới sinh viên
    const nvtHandleAddNewStudent = ()=>{
        let nvtStudent = {
            nvtId:"SV003",
            nvtName:"Nguyễn Quang Triệu Vân",
            nvtAge:22,
        };
        // Thêm vào state nvtStudentList
        setNvtStudentList([
            ...nvtStudentList,
            nvtStudent
        ])

        console.log("List ", nvtStudentList);
        
    }
  return (
    <div className='alert alert-danger'>
        <h2>useState Demo</h2>
        <div>
            <h3>Count: {nvtCount}</h3>
            <button onClick={()=>setNvtCount(nvtCount+1)}>Tăng + </button>
            <button onClick={()=>setNvtCount(nvtCount-1)}>Giảm - </button>
        </div>
        <div>
            <h3>Array: {nvtArray.toString()}</h3>
            <button onClick={nvtHandleAddList}>Thêm phần tử</button>
        </div>
        <div>
            <h3>Danh sách sinh viên</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nvtStudentList.map((nvtStudent,index)=>{
                            return <>
                                <tr>
                                    <td>{nvtStudent.nvtId}</td>
                                    <td>{nvtStudent.nvtName}</td>
                                    <td>{nvtStudent.nvtAge}</td>
                                </tr>
                            </>
                        })
                    }
                    
                </tbody>
                <tfoot>
                    <button onClick={nvtHandleAddNewStudent}>Thêm mới sinh viên</button>
                </tfoot>
            </table>
        </div>
    </div>
  )
}
