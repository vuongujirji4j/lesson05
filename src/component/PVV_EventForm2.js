import React from 'react'

export default function PVV_EventForm2() {
  // dinh ngia cua cac ham xu ly su kien
  const eventhandleclick1=(content)=>{
    console.log('==============');
    console.log(content);
    console.log('==============');
    }
  return (
    <div className='alert alert-success'>
    <h2>event demo- function components</h2>
    <button onClick={eventhandleclick1("phan viet vuong")}>goi khi render</button>
    <button onClick={()=>eventhandleclick1("k22cntt3-reactjs")}>goi khi click</button>
    </div>
  )
}
