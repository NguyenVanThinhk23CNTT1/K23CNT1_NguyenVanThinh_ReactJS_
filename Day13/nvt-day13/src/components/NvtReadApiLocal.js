import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NvtReadApiLocal() {
    // khởi tạo state 
    const [nvtListUser, setNvtListUser] = useState([])
    // đọc dữ liệu từ api local và set cho nvtListUser
    const apiUrl = "http://localhost:3000/users"
    // Lấy danh sách từ apiUrl
    useEffect(() => {
        axios.get(apiUrl)
            .then((nvtResponse) => {
                setNvtListUser(nvtResponse.data)
            })
            .catch((error) => {
                console.log("Lỗi")
            })
    }, [])

    return (
        <div>
            <h2>Đọc dữ liệu từ Local API LOCAL</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nvtListUser.map((nvtItem, index) => {
                            return (
                                <tr>
                                    <td>{nvtItem.fullName}</td>
                                    <td>{nvtItem.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
