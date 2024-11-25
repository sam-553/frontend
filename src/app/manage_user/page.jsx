'use client'
import { IconPencil, IconTrash } from '@tabler/icons-react';
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

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

    const deleteUser=async(id)=>{
        if(!confirm('are you sure you to to delete this user')) return;
        const res=await axios.delete(`http://localhost:5000/user/delete/${id}`)
        if(res.status===200){
            fetchUsers();
            toast.success('user deleted successfully')
        }else{
            toast.error('failed to delete user')
        }
    }
    
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
                                    <th className='p-2' colSpan={2}></th>
                                </tr>
                            </thead>
                            <tbody className='bg-gray-100'>
                                {
                                    userList.map((user)=>{
                                        return <tr key={user._id} className='border border-slate-800  text-center'>
                                            <td className='p-2 border border-gray-300'>{user._id}</td>
                                            <td className='p-2 border border-gray-300'>{user.name}</td>
                                            <td className='p-2 border border-gray-300'>{user.email}</td>
                                            <td className='p-2 border border-gray-300'>{user.city}</td>
                                            <td className='p-2 border border-gray-300'>{user.createdAt}</td>
                                           
                                            <td className=''>
                                                <button className='bg-red-500 px-2 py-1 rounded-full text-white  '> <IconTrash onClick={()=>{
                                                    deleteUser(user._id)
                                                }}></IconTrash></button>
                                            </td>
                                            <td className='p-2 border border-gray-300'>
                                                <Link className='bg-blue-500 px-2 py-1 rounded-full text-white block w-fit' href={'/updateUser/'+user._id}><IconPencil></IconPencil></Link>
                                            </td>
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