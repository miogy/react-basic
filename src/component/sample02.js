import React,{useState} from 'react'

// 제일많이 사용가는 기본방식

function Sample02(){
    // const [count,setCount]=React.useState(0);
    // 배열로 선언 const [초기값이름,변경값이름] 
    const [count,setCount] = useState(0);
    return (
        <div>
            <h1>기본 함수 방식</h1>
            <p>sample02 : {count}</p>
            <button onClick={click}>click</button>
            {/* click이라는 함수를 불러옴 */}
        </div>
    )
    function click(){
        setCount(count + 1);
    }
}
export default Sample02