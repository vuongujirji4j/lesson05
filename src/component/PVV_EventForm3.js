import React, { Component } from 'react'

export default class PVV_EventForm3 extends Component {
    constructor(props){
        super(props);
        //tao doi tuong du lieu thong qua state
        this.state={
            name:"phan viet vuong",
            job:"dev soft"
        }
    }
    //ham su ly su kien
    handlechangename=(ev)=>{
       this.setState({
        name:"k22cntt3-reactjs"
       })
    }
    handlechangejob=()=>{
        this.setState({
         job:"cong nghe phan mem",
        })
     }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>thay doi du lieu trong state</h2>
        <p>du lieu:{this.state.name}-{this.state.job}</p>
        <button onClick={this.handlechangename}>thay doi name</button>
        <button onClick={this.handlechangejob}>thay doi job</button>
      </div>
    )
  }
}
