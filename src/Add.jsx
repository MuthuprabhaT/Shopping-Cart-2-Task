import React from 'react'

function Add({onAddCart}) {
  return (
    <div>
        <button onClick={onAddCart}  className='btn btn-primary'>Add Cart</button>
    </div>
  )
}

export default Add