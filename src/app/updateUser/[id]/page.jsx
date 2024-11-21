'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const updateUser = () => {
const updateUser=()=>{
  const {id}=useParams();
  console.log(id);
  
}

  return (
    <div>updateUser</div>
  )
}

export default updateUser