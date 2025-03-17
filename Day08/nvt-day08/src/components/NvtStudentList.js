import React, { Component } from 'react'
import NvtStudent from './NvtStudent';

class NvtStudentList extends Component {
    constructor(props){
        super(props);

    }
        //Hàm xử lý sự kiện xem
        nvtHandleView = (nvtStudent)=>{
            // Chuyển dữ liệu lên NvtApp
            this.props.onNvtHandleView(nvtStudent);
        }
    render() {
        // Lấy dữu liệu trong props từ NvtApp chuyển xuống 
        let {renderNvtStudents} = this.props;
        console.log("List:",renderNvtStudents);

        // chuyển dữ liệu vào NvtStudent để hiển thị 
        let nvtElementStudent = renderNvtStudents.map((nvtItem,index)=>{
        return <NvtStudent key={index} renderNvtStudent={nvtItem} onNvtHandleView={this.nvtHandleView}/>
        })
        return (

            <div>
                <div className="card-body">
                    <h3 className="card-title">Danh sách sinh viên</h3>
                    <div className="table-responsive pt-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Mã sinh viên</th>
                                    <th>Tên sinh viên</th>
                                    <th>Tuổi</th>
                                    <th>Giới tính</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                 
                                 {nvtElementStudent}
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default NvtStudentList;
