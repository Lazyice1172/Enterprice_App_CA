import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Import from pages
// import Test from './pages/Test.jsx'
import Home from './pages/Home.jsx'
import CreateCategories from './pages/CreateCategories.jsx'
import DeleteCategories from './pages/DeleteCategories.jsx'
import ShowCategories from './pages/ShowCategories.jsx'
import EditCategories from './pages/EditCategories.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories/create" element={<CreateCategories />} />
      <Route path="/categories/show/:id" element={<ShowCategories />} />
      <Route path="/categories/edit/:id" element={<EditCategories />} />
      <Route path="/categories/delete/:id" element={<DeleteCategories />} />
    </Routes>
  )
}

export default App