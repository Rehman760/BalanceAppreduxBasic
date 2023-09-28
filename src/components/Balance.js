import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from '../state/index'

const Balance = () => {
  const dispatch=useDispatch()

  return (
    <div>
        <button className='btn btn-primary' onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button>
        Add Balance 100 
        <button className='btn btn-primary' onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button>
    </div>
  )
}

export default Balance