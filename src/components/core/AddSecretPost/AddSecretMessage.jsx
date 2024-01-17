import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { createPostAPI } from '../../../services/operations/secretPostAPI';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../../slices/PaginationSlice';

export const AddSecretMessage = () => {

  const navigate = useNavigate();

  // const user="220suraj@gmail.com";
  const { user } = useSelector((state) => state.profile)

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    email: user,
  })


  const {  title, content, email } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

     const apiCall=createPostAPI( title, content, email);
     apiCall(navigate);

    // Reset
    setFormData({
      title: "",
      content: "",
      email: user,
    })
   
  }

  return (
    <div className='w-[80%] md:w-[60%] bg-richblack-900 m-auto mt-5 p-4 shadow-[10px_-5px_35px_-5px] shadow-blue-200 rounded-md'>

     

        <div className=' text-white font-bold text-xl flex'> 
           <h1 className='m-auto'>Create one Secret Post</h1>
        </div>
     

      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4 ">
        <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Title <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="title"
              value={title}
              onChange={handleOnChange}
              placeholder="Enter id"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
        </div>

        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Content <sup className="text-pink-200">*</sup>
          </p>
          <textarea
            required
            name="content"
            value={content}
            onChange={handleOnChange}
            placeholder="Enter secret post"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 resize-none"
          />
        </label>

        <button type="submit"
          className="mt-6 rounded-[8px] bg-[#2f8d46] py-[8px] px-[12px] font-bold text-richblack-900 m-auto" 
        >
            Sumit
        </button>

       
      </form>


    </div>
  )







}
