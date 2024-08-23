import React, { useState } from 'react'
import Widget from './Widget'

const Category = ({ category, onAddWidget, onDeleteWidget }) => {
  const [addWidgetName, setAddWidgetName] = useState('')
  const [addWidgetText, setAddWidgetText] = useState('')

  const handleAddWidget = () => {
    onAddWidget(category.id, addWidgetName, addWidgetText)
    setAddWidgetName('')
    setAddWidgetText('')
  }

  const handleDeleteWidget = (widgetId) => {
    onDeleteWidget(category.id, widgetId)
  }

  return (
    <div className='category'>
      <h3>{category.name}</h3>
      <ul>
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            onDeleteWidget={handleDeleteWidget}
          />
        ))}
      </ul>
      <form className='add-widget-form'>
        <input
          type='text'
          value={addWidgetName}
          onChange={(e) => setAddWidgetName(e.target.value)}
          placeholder='Widget name'
        />
        <input
          type='text'
          value={addWidgetText}
          onChange={(e) => setAddWidgetText(e.target.value)}
          placeholder='Widget text'
        />
        <button type='button' onClick={handleAddWidget}>
          Add Widget
        </button>
      </form>
    </div>
  )
}

export default Category
