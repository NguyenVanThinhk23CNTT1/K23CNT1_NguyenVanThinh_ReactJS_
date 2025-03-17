import React from 'react'

export default function NvtJsxExpression() {
    // biến 
    const name="Nguyễn Văn Thịnh"
    // Biến đối tượng 
    const user = {
        firstName:"Văn",
        LastName:"Thịnh"
    }
    // hàm
    const fullName=(user)=>{
        return  user.firstName + ' ' + user.LastName ;
    }

    // element
    const element =(
        <div>
            {/* Biểu thức jsx */}
            <h2> {fullName(user)} </h2>
            <hr/>
            <h3> Welcome to, {name}</h3>
        </div>
    );

    // Ham
    const sayWelcome = (name)=>{
        if(name){
            return <h3> Welcome to {name}</h3>
        }else{
            return <h3> Welcome to Fit-NTU - K23CNT1</h3>
        }
    }
    return (
    <div>
        <h1> NVT - JSX Expression</h1>
        {/* sử dụng biến element */}
        {element}

        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome("Ma Vương Tulen")}
    </div>
  )
}
