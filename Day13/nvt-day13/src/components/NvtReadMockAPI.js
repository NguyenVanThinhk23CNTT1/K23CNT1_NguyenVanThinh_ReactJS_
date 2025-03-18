import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function NvtReadMockAPI() {
    // khởi tạo state 
    const [nvtListUser, setNvtListUser] = useState([])
    // api 
    const nvtApiOnline = "https://67d9035d00348dd3e2a90921.mockapi.io/k23cnt1-nguyenvanthinh/nvt-users"
    // Đọc dữ liệu từ api bằng axios 
    useEffect(() => {
        axios.get(nvtApiOnline)
            .then((nvt_response) =>{
                setNvtListUser(nvt_response.data)
            })
            .catch((error) => {
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const nvtElementUser = nvtListUser.map((nvtItem, index) => {
        return (
            <tr>
                <td>{nvtItem.nvtId}</td>
                <td>{nvtItem.nvtFullName}</td>
                <td>{nvtItem.nvtAge}</td>
                <td>{nvtItem.nvtActive?'Hoạt động' :'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FullName</th>
                        <th>Age</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nvtElementUser
                    }
                </tbody>
            </table>

    </div>
  )
}
