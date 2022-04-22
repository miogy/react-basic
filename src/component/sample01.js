import React from 'react'

export default class Sample01 extends React.Component{
    state = {
        count : 0
    }
    // render
    render(){
        return (
            <div>
                <h1>기존 class방식</h1>
                <p>Sample01 : {this.state.count}</p>
                <button onClick={this.click}>click</button>
            </div>
        )
    }
    // 매서드 함수 만들기
    click = () => {
        this.setState({
            count : this.state.count +1
        })
    }
}
