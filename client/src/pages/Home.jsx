import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const Home = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5050/categories')
            .then(res => {
                if(res) {
                    setCategories(res.data)
                } else {
                    console.error('Unexpected response structure');
                    console.log(res.data);
                    setCategories([]); // Avoid undefined
                }
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [])


    return (
        <div className=' p-4'>
            <div className=' flex justify-between items-center'>
                <h1 className=' text-3xl my-8'>Categories List</h1>
                <Link to={'/categories/create'}>
                    <MdOutlineAddBox className=' text-sky-800 text-4xl' />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <table className=' w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className=' border border-slate-600 rounded-md'>No</th>
                            <th className=' border border-slate-600 rounded-md'>ID</th>
                            <th className=' border border-slate-600 rounded-md'>Name</th>
                            <th className=' border border-slate-600 rounded-md'>Operations</th>
                        </tr>
                    </thead>

                    <tbody>
                        {categories.map((categorie, index) => (
                            <tr key={categorie._id} className=' h-8'>
                                <td className=' border border-slate-700 rounded-md text-center'>
                                    {index + 1}
                                </td>
                                <td className=' border border-slate-700 rounded-md text-center'>
                                    {categorie.id}
                                </td>
                                <td className=' border border-slate-700 rounded-md text-center'>
                                    {categorie.name}
                                </td>
                                <td className=' border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/categorie/show/${categorie._id}`}>
                                            <BsInfoCircle className='text-2xl text-green-800' />
                                        </Link>
                                        <Link to={`/categorie/edit/${categorie._id}`}>
                                            <AiOutlineEdit className='text-2xl text-yellow-800' />
                                        </Link>
                                        <Link to={`/categorie/delete/${categorie._id}`}>
                                            <MdOutlineDelete className='text-2xl text-red-800' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            )}

        </div>
    )
}

export default Home