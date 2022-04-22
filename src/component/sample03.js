import React from 'react'

function Sample03(){
    // 객체화일떄
    // useState => count
    // useState => {count : 0}
    const [state,setState] = React.useState({count : 0});
    return (
        <div>
            <h1>state 방식 :객체화</h1>
            <p>sample03 : {state.count}</p>
            <button onClick={click}>click</button>
        </div>

    )
    function click(){
        setState({count:state.count + 1})
    }
}
export default Sample03