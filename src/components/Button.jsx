import React from 'react'

const Button = ({action, handler}) => {
  return (
    <>
      <button onClick={handler}>
        {action}
      </button>
    </>
  )
}

export default Button