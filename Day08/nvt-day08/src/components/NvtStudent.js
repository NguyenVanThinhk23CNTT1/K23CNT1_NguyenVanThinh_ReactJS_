import React, { Component } from 'react'

class NvtStudent extends Component {
    constructor(props) {
        super(props);
    }

    // Hàm xử lý chức năng xem
    nvtHandleView = (nvtStudent)=>{
        // Chuyển lên NvtStudentList
        this.props.onNvtHandleView(nvtStudent);
    }
    render() {
        // lấy đối tượng dữ liệu chuyển từ NvtStudentList
        let { renderNvtStudent, key } = this.props;
        console.log("Student:", renderNvtStudent);

        return (
            <>
                <tr>
                    <td>{key}</td>
                    <td>{renderNvtStudent.nvtId}</td>
                    <td>{renderNvtStudent.nvtStudentName}</td>
                    <td>{renderNvtStudent.nvtAge}</td>
                    <td>{renderNvtStudent.nvtGender}</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={()=>this.nvtHandleView(renderNvtStudent)}
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        );
    }
}

export default NvtStudent;