import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'


const ShowCategories = () => {
    const [categorie, setCategorie] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:5050/categories/${id}`)
        .then((res) => {
            setCategorie(res.data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }, [])
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3x1 my-4'>Show Categorie</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4'>
                    <div className='my-6'>
                        <span className='text-xl mr-4 text-gray-500'>ID</span>
                        <span>{categorie.id}</span>
                    </div>
                    <div className='my-6'>
                        <span className='text-xl mr-4 text-gray-500'>name</span>
                        <span>{categorie.name}</span>
                    </div>
                    <div className="my-6">
                        <span className="text-xl mr-4 text-gray-500">Path:</span>
                        <ul>
                            {categorie.path?.map((pathItem, index) => (
                                <li key={index}>{pathItem.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-6">
                        <span className="text-xl mr-4 text-gray-500">Subcategories:</span>
                        <ul>
                            {categorie.subCategories?.map((subCategory) => (
                                <li key={subCategory.id}>{subCategory.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowCategories