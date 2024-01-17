import React, { useEffect, useState } from 'react'

import toast from 'react-hot-toast';
import { postEndpoints } from '../../../services/apis';
import { SecretPostCard } from '../../common/SecretPostCard';
import Shimmer from '../../common/Shimmer';
import { apiConnector } from '../../../services/apiconnector';
import { setPage } from '../../../slices/PaginationSlice';
import { useDispatch, useSelector } from 'react-redux';

export const AllSecretPost = () => {

      
      const [getAllPost,setGetAllPost]=useState(null);
      
     // for pagination 
      const {page} = useSelector((state)=>state.pagination);
      const dispatch=useDispatch();
      const ItemInOnePage=3;
      const NumOfPage=(Math.ceil(getAllPost?.length/ItemInOnePage));

      // Fetch data
      useEffect(() => {
        (async () => {
          const toastId = toast.loading("Loading...");
          try {
            const res = await apiConnector("GET", postEndpoints.GET_ALL_SECRET_POST_API);
            setGetAllPost(res?.data?.data.reverse())
          } catch (error) {
            console.log("Could not fetch post", error)
          }
          toast.dismiss(toastId);
  
        })()
      }, [])
  
  
  
     if(getAllPost==null) return (<Shimmer/>)
  
  
    return (
      <div> 


       

          {/* getAllPost */}
          {
            getAllPost.slice(ItemInOnePage*(page-1),page*ItemInOnePage).map((post) =>{
                return(
                    
                    <div key={post._id}>
                    <SecretPostCard title={post.title} content={post.content}/>
                </div>
                    
                );
            })
          }


         {/* pagination */}
       {
        <div className=" p-6 w-[1280] h-8 my-5 items-center flex justify-center font-semibold ">


            <div className=" bg-white flex border-2 rounded-md border-white ">

                    <button className=" p-1  bg-gray-500  hover:bg-caribbeangreen-400   bg-caribbeangreen-200  text-black rounded-md " onClick={()=>{  
                    {(page<=1)?  dispatch(setPage(NumOfPage))  : dispatch(setPage(page-1))}
                }}>
                Prev</button>

                <div className="bg-white p-1 pl-3 pr-4 font-bold ">
                    <h1> {page==0?1:page} of {NumOfPage==0?1:NumOfPage} </h1>
                </div>

                <button className=" p-1  bg-gray-500 hover:bg-caribbeangreen-400    bg-caribbeangreen-200 text-black rounded-md" onClick={()=>{  
                    {(page>=NumOfPage)? dispatch(setPage(1)): dispatch(setPage(page+1))}
                }}>
                Next</button>
    
            </div>


        </div>
       }

       {( getAllPost.slice(ItemInOnePage*(page-1),page*ItemInOnePage).length ==2)&& <div className='h-[6vh]'> </div>}
       {( getAllPost.slice(ItemInOnePage*(page-1),page*ItemInOnePage).length ==1)&& <div className='h-[28vh]'> </div>}
     
      



      </div>
    )
 
}
