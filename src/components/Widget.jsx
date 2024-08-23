import React from 'react'

const Widget = ({ widget, onDeleteWidget }) => {
  return (
    <div className='widget'>
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <button type='button' onClick={() => onDeleteWidget(widget.id)}>
        X
      </button>
    </div>
  )
}

export default Widget
