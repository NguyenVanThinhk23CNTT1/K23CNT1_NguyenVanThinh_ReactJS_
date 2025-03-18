import React from 'react'
import NvtReadApiLocal from './components/NvtReadApiLocal'
import NvtReadMockAPI from './components/NvtReadMockAPI'
import NvtCreateMockAPI from './components/NvtCreateMockAPI'

export default function NvtApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1> ReactJS -API - Nguyễn Văn Thịnh </h1>
      <NvtReadApiLocal />
      <hr />
      <h2>Đọc dữ liệu từ mockAPI (mockapi.io)</h2>
      <NvtReadMockAPI />
      <NvtCreateMockAPI />
    </div>
  )
}
