import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment, incrementByAmount, reset } from './counterSlice'

function Counter() {
  const[Amount,setAmount]=useState()
  const dispatch = useDispatch()
  const count = useSelector(state=>state.counterReducer.count)
  const handleIncrementBYAmount = ()=> {
    if(Amount){
      dispatch(incrementByAmount(Amount))
    }
    else{
      alert("Plaese enter a valid number")
    }
  }
  return (
    <>
    
      <div style={{ height: '100vh' }} className=' bg-dark  w-100 p-5'>
      <div style={{textAlign:'center',color:'white',fontSize:'50px' }} className='mb-2'>Counter App</div>
        <div style={{ backgroundColor: 'black', height: '500px' }} className='border rounded   w-50 container p-4 '>
          <div style={{  height: '250px', textAlign: 'center',fontSize:'150px',color:'white' }} className=' mb-3 ' > {count}</div>
          <div  className=' mb-3 d-flex justify-content-around p-3 '>

            <div><button onClick={()=>dispatch(Decrement())} className="btn btn-danger ">Decrement</button></div>
            <div><button onClick={()=>dispatch(reset())} className="btn btn-info ">Reset</button></div>

            <div><button onClick={()=>dispatch(Increment())} className="btn btn-success ">Increment</button></div>
          </div>


          <div className=' d-flex justify-content-around  p-3 '>
<input onChange={e=>setAmount(e.target.value)} style={{height:'50px'}} className='form-control w-75  ' type="number" placeholder='Increment Number' />
<button onClick={handleIncrementBYAmount} style={{width:'230px'}} className="btn btn-primary ms-2 ">Increment By Amount</button>

          </div>
        </div>

      </div>
    </>
  )
}

export default Counter