import React from 'react';
import ReactDOM from 'react-dom/client';
import Sample01 from './component/sample01';
import Sample02 from './component/sample02';
import Sample03 from './component/sample03';
import Sample04 from './component/sample04';

function App(){
  return (
    // 컴포넌트를 가져와서 페이지 만들기
    // 컴포넌트를 만들고 기본 구조에 <컴퍼넌트이름 />을 넣어 페이지를 만든다.
    <div>
      
      <Sample01 />
      <Sample02 />
      <Sample03 />
      <Sample04 />
    </div>
  )
}
const root = document.querySelector('#root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)