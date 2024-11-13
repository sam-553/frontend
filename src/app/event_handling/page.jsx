'use client';
import React from 'react'

const EventHandling = () => {

const previewimage=(e)=>{
  const file=e.target.files[0];
  const reader=new FileReader();
  reader.onload=(data)=>{
    const image=new image();
    image.src=data.target.result;
    document.body.appendChild(image);
  }
  reader.readAsDataURL(file);

}


  return (
    <div>
     <div className='container mx-auto h-screen ' onMouseMove={(e)=>{console.log(e.clientX,e.clientY);
const el=document.getElementById('circle');
el.style.left=e.clientX+'px';
el.style.right=e.clientY+'px';

     }}>
      <div className='size-8 bg-red bg-red-500 absolute rounded-full' id='circle'></div>
      <h1 className='my-5 text-center font-bold text-3xl'>Event Handling</h1>
      <button className='mt-4 bg-black text-white'
      onClick={()=>{alert('button was clicked')}}
      >

        Click Event
      </button>
      <input type="text" className='border block w-full p-3 mt-4' placeholder='input value'
      onChange={(e)=>{console.log(e.target.value)}}
       />

       <input className='border block w-full p-3 mt-4' placeholder='key value'
       onKeyDown={(e)=>{console.log(e.code)}} type="text" />


       <input type="color"
       onChange={(e)=>{console.log(document.body.style.background=e.target.value)}}
       />


       <input type="file" className='border block w-full p-3 mt-4' placeholder='file'
       onChange={(e)=>{console.log(e.target.files);
       }} />
       <input type="file" accept='image/*' onChange={previewimage} />



     </div>



    </div>
  )
}

export default EventHandling;