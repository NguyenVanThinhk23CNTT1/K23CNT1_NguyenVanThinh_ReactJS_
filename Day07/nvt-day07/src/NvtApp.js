import React, { Component } from 'react'
import NvtRenderConditon from './components/NvtRenderConditon'
import NvtRenderList from './components/NvtRenderList';
import NvtRenderListStudent from './components/NvtRenderListStudent';

 class NvtApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
        <h1>Nguyễn Văn Thịnh - Lession07 - Render condition - Render List Key</h1>
        <NvtRenderConditon/>

        <NvtRenderList/>

        <NvtRenderListStudent/>
      </div>
    );
  }
}

export default NvtApp;