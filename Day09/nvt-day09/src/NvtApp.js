import React from 'react'
import NvtUseState from './components/NvtUseState'
import NvtUseStateListObject from './components/NvtUseStateListObject'
import NvtUseEffect1 from './components/NvtUseEffect1'

export default function NvtApp () {
  return (
    <div className='container border mt-3'>
      <h1>React Hooks</h1>
      <hr/>
      <NvtUseState />
      <NvtUseStateListObject />
      
      <NvtUseEffect1 /> 
    </div>
  )
}
