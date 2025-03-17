import React from 'react'

export default function NvtFuncCompEvent1() {

    // Hàm xử lý sự kiện 
    const nvtEventButton1Click = ()=>{
        alert("Button 1 - Clicked");
    };

    const nvtEventButton2Click = ()=> {
        alert("Button 2 - Clicked");
    };

    const nvtEventButton3Click = (name)=>{
        alert("Name:" + name)
    }
  return (
    <div className="alert alert-info">
        {/* <button className="btn btn-primary" onClick={nvtEventButton1Click()}>
            Button 1
            </button> */}
        <button className="btn btn-sucess mx-1" onClick={nvtEventButton2Click}>
            Button 2
            </button>
        {/* <button className="btn btn-sucess" onClick={()=>nvtEventButton3Click("Văn Thịnh")}>
            Button 3
            </button> */}
        <button className="btn btn-sucess mx-1" onClick={()=>nvtEventButton3Click("Văn Thịnh Văn")}>
            Button 4
            </button>
    </div>
  );
}
