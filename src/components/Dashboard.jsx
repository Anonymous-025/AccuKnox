import React, { useState, useEffect } from 'react'
import Category from './Category'
import data from '../data.json'
import './Dashboard.css'

const Dashboard = () => {
  const [categories, setCategories] = useState(data.categories)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories])

  const handleAddWidget = (categoryId, widgetName, widgetText) => {
    const newWidget = { id: Math.random(), name: widgetName, text: widgetText }
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return { ...category, widgets: [...category.widgets, newWidget] }
      }
      return category
    })
    setCategories(updatedCategories)
  }

  const handleDeleteWidget = (categoryId, widgetId) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter((widget) => widget.id !== widgetId),
        }
      }
      return category
    })
    setCategories(updatedCategories)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredCategories = categories.filter((category) => {
    return category.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className='dashboard'>
      <input
        type='search'
        value={searchTerm}
        onChange={handleSearch}
        placeholder='Search'
        className='search-input'
      />
      {filteredCategories.map((category) => (
        <Category
          key={category.id}
          category={category}
          onAddWidget={handleAddWidget}
          onDeleteWidget={handleDeleteWidget}
        />
      ))}
    </div>
  )
}

export default Dashboard
