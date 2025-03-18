import React from 'react'

const Scroll = (props) => {
  return(
    <div style={{
        overflowY: 'scroll',
        borderTop: '2px solid black',
        height: '770px',
        padding: '10px'
    }}>
        {props.children}
    </div>
  )
}

export default Scroll