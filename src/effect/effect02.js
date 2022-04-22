import React ,{useState} from 'react'

function Effect02(){
    const [count,setCount] = useState(0);
    // 함수작동 effect는 여러개를 만들수 있음
    React.useEffect(()=>{
        // monut와 update를 준비
        console.log('effect02시작과 업데이트',count)
    },[]);
    // ,[] : 시작점이 없을때
    React.useEffect(()=>{
        // monut와 update를 준비
        console.log('effect02시작과 업데이트',count)
    },[count]);
    // conut에 시점을 정하고 볼떄
    return (
        <div>
            <h1>effect시점보기</h1>
            <p>count 변경보기 : {count}</p>
            <button onClick={click}>click</button>
        </div>
    )
    function click(){
        setCount(count +1)
    }
}
export default Effect02