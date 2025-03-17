import React from 'react'
import NvtLoginComp from './NvtLoginComp'
import NvtLogoutComp from './NvtLogoutComp'

export default function NvtLoginControl(props) {
    const nvtElement = props.isLoggedIn ? <NvtLoginComp /> : <NvtLogoutComp />

    console.log("Login control",props);
    
    // const nvtLogin = ()=>{
    //    if(props.isloggedIn)
    //         return <NvtLogoutComp/>
    //    else
    //         return <NvtLoginComp/>
    //  }
  return (
    <div>
        {nvtElement}
    </div>
  )
}
