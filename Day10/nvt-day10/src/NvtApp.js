import React from 'react'
import NvtUseState from './components/NvtUseState'
import NvtUseEffect from './components/NvtUseEffect'

export default function NvtApp() {
  return (
    <div className='container border my-2'>
        <h1>Demo React hook</h1>
        <NvtUseState />
        <NvtUseEffect />
    </div>
  )
}
