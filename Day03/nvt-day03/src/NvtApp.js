import logo from './logo.svg';
import './App.css';
import NvtJsxExpression from './components/NvtJsxExpression';
import NvtfuncComp from './components/NvtfuncComp';
import NvtClassComp from './components/NvtClassComp';

function NvtApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Lession03 - Nguyễn Văn Thịnh</h1>
    
      <NvtJsxExpression />

      <hr/>
      {/* Sử dụng function components */}
      <NvtfuncComp />

      {/* sử dụng class components */}
      <NvtClassComp></NvtClassComp>
    </div>
  );
}

export default NvtApp;
