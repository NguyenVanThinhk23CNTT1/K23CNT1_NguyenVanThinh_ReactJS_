import logo from './logo.svg';
import './App.css';
import NvtFuncomp from './components/NvtFuncomp';
import NvtFuncomp1 from './components/NvtFuncomp1';
import NvtClasscomp from './components/NvtClasscomp';

function NvtApp() {
  // object
  const users = {
    fullName:"Lữ Bố",
    age:20,
    phone:"0988888888"
  }
  return (
    <div className="container border mt-3">
      <h1>Demo Component - Props - State</h1>
      <hr/>    
      <div className='alert alert-danger'>
        <NvtFuncomp name="Văn Thịnh" address="86 Phố Từa" company = "Devmaster" />
        <hr/>
        <NvtFuncomp name="Triệu Tử Long" address="Thành Tô Châu" company="Fit.NTU" />
      </div>
      <div className='alert alert-info'>
        <NvtFuncomp1 renderInfo={users} />
      </div>
        <NvtClasscomp />
        {/*chuyển dữ liệu từ NvtApp -> xuống NvtClasscomp */}
        <NvtClasscomp renderName="K23CNT1" renderUsers={users} />
    </div>
  );
}

export default NvtApp;
