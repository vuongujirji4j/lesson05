import React, { Component } from 'react'
import PVV_EventForm1 from './component/PVV_EventForm1'
import PVV_EventForm2 from './component/PVV_EventForm2'
import PVV_EventForm3 from './component/PVV_EventForm3'
import PVV_EventForm4 from './component/PVV_EventForm4'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>event from demo</h1>
        <PVV_EventForm1/>
        <PVV_EventForm2/>
        <PVV_EventForm3/>
        <PVV_EventForm4 name="phan viet vuong"/>
      </div>
    )
  }
}

