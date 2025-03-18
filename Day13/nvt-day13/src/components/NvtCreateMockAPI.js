// Thêm mới dữ liệu 

import React, { useState } from 'react'
import axios from 'axios'
export default function NvtCreateMockAPI() {
    // Khởi tạo state
    const [nvtFullName,setNvtFullName] = useState('')
    const [nvtAge,setNvtAge] = useState(0)
    const [nvtActive,setNvtActive] = useState(true)

    // api post 
    const nvtCreateUserApi = "https://67d9035d00348dd3e2a90921.mockapi.io/k23cnt1-nguyenvanthinh/nvt-users";

    // khi submit form
    const nvtHandleSubmit = (event) => {
        event.preventDefault();
        console.log("nvtActive",nvtActive);
        let nvtNewUser = {nvtFullName,nvtAge,nvtActive};
        console.log(nvtNewUser);
        
        // ghi dữ liệu vào api 
        axios
            .post(nvtCreateUserApi, nvtNewUser)
            .then((nvt_response) => {
                
            })
            
    }
    
    return (
        <div className='alert alert-info'>
            <h2>Thêm mới users</h2>
            <hr />
            <form>
                <div className=" mb-1">
                    <label for="nvtFullName">FullName</label>
                    <input type="text" name='nvtFullName' id="nvtFullName" 
                    value={nvtFullName}
                    onChange={(ev)=>setNvtFullName(ev.target.value)}
                    />
                </div>
                <div className=" mb-1">
                    <label for="nvtAge">Age</label>
                    <input type="number" name='nvtAge' id="nvtAge" 
                    value={nvtAge}
                    onChange={(ev)=>setNvtAge(ev.target.value)}
                    />
                </div>
                <div className=" mb-1">
                    <label for="nvtActive">Active</label>
                    <input type='radio' name='nvtActive' id="nvtActive_hd" value={'true'} 
                        onChange={(ev)=>setNvtActive(ev.target.value)}/>
                        <label for="nvtActive_hd"> Hoạt động</label>
                    <input type='radio' name='nvtActive' id="nvtActive_kh" value={'false'} 
                        onChange={(ev)=>setNvtActive(ev.target.value)}/>
                        <label for="nvtActive_kh"> Khóa</label>
                </div>
                <button onClick={nvtHandleSubmit}>Create</button>
            </form>
        </div>
    )
}
