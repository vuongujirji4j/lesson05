import React, { Component } from 'react'

export default class PVV_EventForm1 extends Component {
  //ham su ly su kien
  eventhandleclick1 =()=>{
    alert("event handle 1");
    }
    eventhandleclick2(){
        alert("event click 2")
    }
    render() {
    return (
        <div className='alert alert-danger'>
            <h2>event handle</h2>
            {/* goi ham su ly su kien khi render */}
            <button onClick={this.eventhandleclick1()}>
                click 1
            </button>
            {/* goi ham su ly khi click */}
            <button onClick={this.eventhandleclick2}>
                click 2
            </button>
        </div>
        );
    }

}
