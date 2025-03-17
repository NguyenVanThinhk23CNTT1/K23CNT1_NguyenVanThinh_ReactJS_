import React, { Component } from 'react'
import NvtControl from './components/NvtControl';
import NvtStudentList from './components/NvtStudentList';
import NvtForm from './components/NvtForm';

class NvtApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      nvtStudents :[
        {nvtId:"SV001",nvtStudentName:"Nguyễn Văn Thịnh",nvtAge:"19",nvtGender:"Nam",nvtBirthday:"16/04/2005",nvtBirthPlace:"HN",nvtAddress:"02 Ngô Đình Mẫn"},
        {nvtId:"SV002",nvtStudentName:"Nguyễn Văn Triệu Tử Long",nvtAge:"222",nvtGender:"Nữ",nvtBirthday:"16/05/1999",nvtBirthPlace:"HP",nvtAddress:"02 Vũ Lông Bông"},
        {nvtId:"SV003",nvtStudentName:"Nguyễn Văn Lả Bố",nvtAge:"33",nvtGender:"Nam",nvtBirthday:"16/06/2000",nvtBirthPlace:"TpHCM",nvtAddress:"16 Linh Đàm"},
        {nvtId:"SV004",nvtStudentName:"Nguyễn Văn Cu",nvtAge:"34",nvtGender:"Nam",nvtBirthday:"16/07/2000",nvtBirthPlace:"TpHCM",nvtAddress:"166 Rau Má"},
      ],
      nvtStudent:"",
    }
  }

  //Hàm xử lý sự kiện view Student
  nvtHandleView = (nvtStudent)=>{
    this.setState({
      nvtStudent:nvtStudent,
    })
  }

  render() {
    // log 
    console.log("View Student:",this.state.nvtStudent);
    
    return (
      <div>
        <h1 className='text-center'>
          Nguyễn Văn Thịnh - K23CNT1 - Mini Project1
          </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                 
              {/* header */}
              <NvtControl />
              {/*  danh sách sinh viên */}
              <NvtStudentList renderNvtStudents={this.state.nvtStudents} onNvtHandleView={this.nvtHandleView} />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form */}
              <NvtForm renderNvtStudent = {this.state.nvtStudent} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NvtApp;
