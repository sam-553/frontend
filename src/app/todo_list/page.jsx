'use client';
import { IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react'
const TodoList = () => {
    // let count=0;
    //  count[count,setcount] = usestate(0);
    const [taskList,setTaskList]=useState([
        {text:'doodh lao',complete:false},
        {text:'khana khao',complete:false},
        {text:'code likho',complete:false},
        {text:'code submit kro',complete:false},
    ]);
    const addNewtask=(e)=>{
        if(e.code==='Enter'){
            console.log(e.target.value);
            const newTask={text:e.target.value,complete:false};
            setTaskList([...taskList,newTask])
            e.target.value='';
        }
    }

    const deleteTask=(index)=>{
        console.log(index);

        const temp=taskList;
        temp.splice(index,1);
        setTaskList([...temp]);
        
    }
    const updateTask=(index)=>{
        const temp=taskList;
        temp[index].completed=!temp[index].completed;
        setTaskList([...temp])
    }

    return (
        <div className='bg-blue-300  pt-10' >
            <h1 className='text-center font-bold text-4xl my-5'>ToDo List</h1>
            <div className='container mx-auto shadow rounded-lg bg-white'>
                {/* <h1 className='text-5xl'>
                    {count}
                </h1>
                <button onClick={() => { setcount(count+1); console.log(count); 
                    
                }} >Add Count</button> */}
                <div className='p-5 border-b-2'>
                    <input type="text" className='border-2 px-4 py-2 w-full'
                        placeholder='Enter a task to add' onKeyDown={addNewtask}
                    />
                </div>
                <div className='p-5'>
                    {
                        taskList.map((task,index)=>{
                            return <div key={index} className='border p-3 rounded mb-4c'>
                                  {task.completed?
                                  (
                                    <p className='bg-gradient-to-r from-blue-500 to-green-500 text-white w-fit px-2 rounded-full text-sm'>complete</p>
                                  ):(
                                    <p className='bg-gradient-to-r from-red-500 to-yellow-500 text-white w-fit px-2  rounded-full text-sm'>pending</p>
                                  )
                                }
                                  <p className='text-xl'>{task.text}</p>
                                  
                                  <div className="flex gap-3 mt-4">

                                    <button onClick={()=>{deleteTask(index)}} className='flex bg-red-500 rounded-full text-white px-3 py-1'>
                                        <IconTrash sizw={18}/>
                                        Delete
                                        
                                        </button>
                                    <button onClick={()=>{updateTask(index)}} className={`bg-blue-500 rounded-full text-white px-3 py-1 ${task.completed?'bg-yellow-500':'bg-voilet-500'}`}>
                                            {task.completed?'undo':'completed'}
                                    </button>
                                  </div>
                                </div>
                        })
                    }



                </div>
            </div>
        </div>
    )
}
export default TodoList;