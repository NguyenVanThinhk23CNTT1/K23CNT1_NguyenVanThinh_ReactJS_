import React, { Component } from 'react'

 class NvtRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvtStudents:[
                {nvtId:"SV001",nvtName:"Nguyễn Văn Thịnh",nvtAge:"19",nvtClass:"K23CNT1"},
                {nvtId:"SV002",nvtName:"Nguyễn Văn Đoành",nvtAge:"18",nvtClass:"K23CNT1"},
                {nvtId:"SV003",nvtName:"Nguyễn Tiên Sinh",nvtAge:"20",nvtClass:"K23CNT1"},
                {nvtId:"SV004",nvtName:"Nguyễn Văn Sên",nvtAge:"21",nvtClass:"K23CNT1"},
                {nvtId:"SV005",nvtName:"Nguyễn Văn Thóc",nvtAge:"12",nvtClass:"K23CNT1"},
            ],
        }
    }
    
  render() {
    // render data
    const nvtElement = this.state.nvtStudents.map((nvtItem, index)=>{
        return(
            <tr>
                    <td>{index+1}</td>
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
      <div className='card'>
            <div className='card-header'>
                <h2>Danh sách sinh viên</h2>
            </div>
            <div className='card-body'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>nvtID</th>
                        <th>nvtName</th>
                        <th>nvtAge</th>
                        <th>nvtClass</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {nvtElement}
                </tbody>
            </table>
            </div>
        </div>
    );
  }
}

export default NvtRenderListStudent;
