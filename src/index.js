import React from 'react';
import ReactDOM from 'react-dom/client';
import Effect01 from './effect/effect01';
import Effect02 from './effect/effect02';
import Effect03 from './effect/effect03';
function App(){
  return (
    // 컴포넌트를 가져와서 페이지 만들기
    // 컴포넌트를 만들고 기본 구조에 <컴퍼넌트이름 />을 넣어 페이지를 만든다.
    <div>
      
      <Effect01 />
      <Effect02 />
      <Effect03 />
    </div>
  )
}
const root = document.querySelector('#root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)