'use client'
import { IconCheck, IconLoader3 } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const productSchema=Yup.object().shape({
    itemname:Yup.string()
    .min(2,'To short')
    .required('please enter item name'),
  company:Yup.string().required('please add company'),  
  itemNumber:Yup.string().required('please add number of item '),
  size:Yup.string().required('please add size'),
  price:Yup.string().required('please add price'),
})

const productdetails = () => {
  const router=useRouter

    const productForm=useFormik({
        initialValues:{
         itemname:'',
         company:'',
         itemNumber:'',
         size:'',
         price:'',
         email:'',
         password:'',
         confirmpassword:'',
    
        },onSubmit:(values,{resetForm,setSubmitting })=>{
            console.log(values);


            axios.post('http://localhost:5000/product/add',values)
            .then((result) => {
              toast.success('Product added')
              resetForm();
            }).catch((err) => {
              console.log(err);
              
              toast.error(err?.response?.data?.message||'something went wrong')
              setSubmitting(false);
            });
            
          },
          validationSchema:productSchema
    })
    
  return (
    <div className="mt-7 max-w-lg mx-auto bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
    <div className="p-4 sm:p-7">
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
          Add Products
        </h1>
        
      </div>
      <div className="mt-5">
       
       
        {/* Form */}
        <form onSubmit={productForm.handleSubmit}>
          <div className="grid gap-y-4">
            {/* Form Group */}
            <div>
              <label
                htmlFor="text"
                className="block text-sm mb-2 dark:text-white"
              >
               Item Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="itemname"
                  onChange={productForm.handleChange}
                  value={productForm.values.itemname}
                  name="itemname"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  required=""
                  aria-describedby="item-error"
                />
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                  <svg
                    className="size-5 text-red-500"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>
              {
                (productForm.errors.itemname)&&(productForm.touched.itemname)&&
                (<p className=" text-xs text-red-600 mt-2" id="email-error">
                 
                    {productForm.errors.itemname}
                    </p>)
              }
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm mb-2 dark:text-white"
              >
             Company Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="company"
                  onChange={productForm.handleChange}
                  value={productForm.values.company}
                  name="company"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  required=""
                  aria-describedby="company-error"
                />
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                  <svg
                    className="size-5 text-red-500"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>
             {
                (productForm.errors.company)&&(productForm.touched.company)&&(
                    <p className=" text-xs text-red-600 mt-2" id="email-error">
                    {productForm.errors.company}
                  </p>
                )
             }
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm mb-2 dark:text-white"
              >
               No Of Item
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="itemNumber"
                  onChange={productForm.handleChange}
                  value={productForm.values.itemNumber}
                  name="itemNumber"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  required=""
                  aria-describedby="itemNumber-error"
                />
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                  <svg
                    className="size-5 text-red-500"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>
             {
                (productForm.errors.itemNumber)&&(productForm.touched.itemNumber)&&(
                    <p className=" text-xs text-red-600 mt-2" id="email-error">
                    {productForm.errors.itemNumber}
                   </p>
                )
             }
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-sm mb-2 dark:text-white"
              >
        size
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="size"
                  onChange={productForm.handleChange}
                  value={productForm.values.size}
                  name="size"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  required=""
                  aria-describedby="size-error"
                />
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                  <svg
                    className="size-5 text-red-500"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>
              {
                (productForm.errors.size)&&(productForm.touched.size)&&(
                    <p className=" text-xs text-red-600 mt-2" id="email-error">
                    {productForm.errors.size}
                   </p>
                )
             }
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-sm mb-2 dark:text-white"
              >
        price
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="price"
                  onChange={productForm.handleChange}
                  value={productForm.values.price}
                  name="price"
                  className="py-3 px-4 block w-full border-3 border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  required=""
                  aria-describedby="price-error"
                />
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                  <svg
                    className="size-5 text-red-500"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>
              {
                (productForm.errors.price)&&(productForm.touched.price)&&(
                    <p className=" text-xs text-red-600 mt-2" id="email-error">
                    {productForm.errors.price}
                   </p>
                )
             }
            </div>
           
            

            
            {/* End Form Group */}
          
            <button
              type="submit"
              disabled={productForm.isSubmitting}
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
                  {productForm.isSubmitting ? <IconLoader3 
                   className='animate-spin' /> : <IconCheck />}
                  {productForm.isSubmitting ? 'Added....' : 'Add product'}
                                    
            </button>
          </div>
        </form>
        {/* End Form */}
      </div>
    </div>
  </div>
  
  )
}

export default productdetails