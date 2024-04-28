import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateCategories = () => {
  const [id, setid] = useState('')
  const [name, setName] = useState('')
  const [path, setPath] = useState('')
  const [subCategories, setSubCategories] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const parsePath = (input) => {
    return input.split(',').map((item) => {
      const [id, name] = item.trim().split(':');
      return { id: id.trim(), name: name.trim() }; // Return object with id and name
    });
  };

  const parseSubCategories = (input) => {
    return input.split(',').map((item) => {
      const [id, name] = item.trim().split(':');
      return { id: id.trim(), name: name.trim() }; // Return object with id and name
    });
  };

  const handleSubmit = () => {
    const data = {
      id,
      name,
      path: parsePath(path), // Use custom parsing function
      subCategories: parseSubCategories(subCategories), // Use custom parsing function
    }
    setLoading(true)
    axios.post('http://localhost:5050/categories', data)
      .then(res => {
        setLoading(false)
        navigate('/')
      })
      .catch(err => {
        setLoading(false)
        alert('An Error happended. Please Check console')
        console.log(err)
      })
  }


  return (
    <div className=' p-4'>
      <BackButton />
      <h1 className=' text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w=[600px] p-4 mx-auto'>
        <div className=' my-4'>
          <label className=' text-xl mr-4 text-gray-500'>ID</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setid(e.target.value)}
            className=' border-2 border-gray-500 px-4 py-2 w-full'
          />
          <label className=' text-xl mr-4 text-gray-500'>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=' border-2 border-gray-500 px-4 py-2 w-full'
          />
          <label className="text-xl mt-4 text-gray-500">Path (Format: id:name, id:name...)</label>
          <input
            type="text"
            value={path}
            onChange={(e) => setpath(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />

          <label className="text-xl mt-4 text-gray-500">Subcategories (Format: id:name, id:name...)</label>
          <input
            type="text"
            value={subCategories}
            onChange={(e) => setSubCategories(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />

        </div>
        <button
          className="bg-sky-500 text-white px-4 py-2 rounded mt-4"
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
    </div>
  )
}

export default CreateCategories