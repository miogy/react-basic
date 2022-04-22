import React from 'react'

export default class Effect03 extends React.Component{
    state = {
        count : 0
    }
    render(){
        const {count} = this.state;
        return (
            <div>
                <h1>시점보기</h1>
                <p>count 변경보기 : {count}</p>
                <button onClick={this.click}>click</button>
            </div>
        )
    }
    // click에 함수넣기 () => {}이름없는 함수
    click = () => {
        this.setState({
            count : this.state.count +1
        })
    }
    componentDidMount(){
        console.log('mount시점',this.state.count)
    }
    componentDidUpdate(){
        console.log('update시점',this.state.count)
    }
}