import React, { useState } from 'react'

export default function NvtUseStateListObject() {
    // mockdata
    const liststudent = [
        { nvtId: "SV001", nvtName: "Nguyễn Văn Thịnh", nvtAge: 19, nvtClass: "K23CNT1" },
        { nvtId: "SV002", nvtName: "Nguyễn Quang Nakroth", nvtAge: 22, nvtClass: "K23CNT1" },
        { nvtId: "SV003", nvtName: "Nguyễn Quang Florentino", nvtAge: 21, nvtClass: "K23CNT1" },
        { nvtId: "SV004", nvtName: "Nguyễn Quang Triệu Vân", nvtAge: 23, nvtClass: "K23CNT1" },
    ];
    // tạo state với hook
    const [nvtStudents, setNvtStudents] = useState(liststudent);
    //render data
    let nvtElement = nvtStudents.map((nvtItem, index) => {
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{nvtItem.nvtId}</td>
                <td>{nvtItem.nvtName}</td>
                <td>{nvtItem.nvtAge}</td>
                <td>{nvtItem.nvtClass}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>nvtID</th>
                        <th>nvtName</th>
                        <th>nvtAge</th>
                        <th>nvtClass</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {nvtElement}
                </tbody>
            </table>

        </div>
    )
}
