'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ManageUser = () => {
    const[userList,setUserList]=useState([]);
    const[loading,setLoading]=useState(true)
    const fetchUsers=async()=>{
      const res=await axios.get('http://localhost:5000/user/getall')
      console.log(res.data);
      setUserList(res.data);
      setLoading(false)
    }
    useEffect(()=>{
        fetchUsers();
    },[]);
    
  return (
   
        <div className='h-screen bg-gray-200 pt-10'>
            <h1 className='text-center font-bold text-3xl'>Manage User</h1>
            <div className="container mx-auto">
                {
                    loading?<p className='text-center text-gray-500 text-2xl font-bold'>
                        Loading.....please wait
                    </p>:(
                        <table className='w-full'>
                            <thead className='border border-slate-800 text-white bg-slate-800'>
                                <tr>
                                    <th className='p-2'>ID</th>
                                    <th className='p-2'>Name</th>
                                    <th className='p-2'>Email</th>
                                    <th className='p-2'>City</th>
                                    <th className='p-2'>Registered At</th>
                                </tr>
                            </thead>
                            <tbody className='bg-gray-100'>
                                {
                                    userList.map((user)=>{
                                        return <tr key={user._id} className='border border-slate-800  text-center'>
                                            <td>{user._id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.city}</td>
                                            <td>{user.createdAt}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
    
    
    </div>
   
  )
}

export default ManageUser