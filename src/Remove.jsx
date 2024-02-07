import React from 'react'

function Remove({onRemoveCart}) {
  return (
    <div>
        <button onClick={onRemoveCart} className='btn btn-primary'>Remove Cart</button>
    </div>
  )
}

export default Remove