import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]); // To hold the filtered list
    const [searchQuery, setSearchQuery] = useState(''); // To hold the search query
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5050/categories')
            .then((res) => {
                const data = res.data || [];
                setCategories(data);
                setFilteredCategories(data); // Initialize with all categories
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    // Filtering function triggered by button press
    const handleFilter = () => {
        const filtered = categories.filter((category) =>
            category.name
                ? category.name.toLowerCase().includes(searchQuery.toLowerCase())
                : false
        );
        setFilteredCategories(filtered); // Update filtered list
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Categories List</h1>
                <Link to="/categories/create">
                    <MdOutlineAddBox className="text-sky-800 text-4xl" />
                </Link>
            </div>
            
            <div className="mb-4 flex"> 
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
                    className="border border-gray-500 px-4 py-2 w-full"
                />
                <button
                    onClick={handleFilter} // Apply filter on button click
                    className="ml-2 bg-sky-500 text-white px-4 py-2 rounded"
                >
                    Search
                </button>
            </div>
            
            {loading ? (
                <Spinner />
            ) : (
                <table className="w-full border-separate border-spacing-2">
                    <thead>
                        <tr>
                            <th className="border border-slate-600 rounded-md">No</th>
                            <th className="border border-slate-600 rounded-md">ID</th>
                            <th className="border border-slate-600 rounded-md">Name</th>
                            <th className="border border-slate-600 rounded-md">Operations</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredCategories.map((category, index) => (
                            <tr key={category._id} className="h-8">
                                <td className="border border-slate-700 rounded-md text-center">
                                    {index + 1}
                                </td>
                                <td className="border border-slate-700 rounded-md text-center">
                                    {category.id}
                                </td>
                                <td className="border border-slate-700 rounded-md text-center">
                                    {category.name || 'N/A'}
                                </td>
                                <td className="border border-slate-700 rounded-md text-center">
                                    <div className="flex justify-center gap-x-4">
                                        <Link to={`/categories/show/${category._id}`}>
                                            <BsInfoCircle className="text-2xl text-green-800" />
                                        </Link>
                                        <Link to={`/categories/edit/${category._id}`}>
                                            <AiOutlineEdit className="text-2xl text-yellow-800" />
                                        </Link>
                                        <Link to={`/categories/delete/${category._id}`}>
                                            <MdOutlineDelete className="text-2xl text-red-800" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Home;
