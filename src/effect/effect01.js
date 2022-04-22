import React ,{useState} from 'react'

function Effect01(){
    const [count,setCount] = useState(0);
    // 함수작동
    React.useEffect(()=>{
        // monut와 update를 준비
        console.log('effect시작과 업데이트',count)
    });
    return (
        <div>
            <h1>effect기본</h1>
            <p>count 변경보기 : {count}</p>
            <button onClick={click}>click</button>
        </div>
    )
    function click(){
        setCount(count +1)
    }
}
export default Effect01