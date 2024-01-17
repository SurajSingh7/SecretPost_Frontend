import Footer from "../components/common/Footer"
import { AllSecretPost } from "../components/core/HomePage/AllSecretPost"


function Home() {

  return (
    <>
        
      <div>

        <div className="  w-[80%] md:w-[60%] bg-richblack-900 m-auto mt-5 flex"> 
            <h1 className="mx-auto text-lg font-bold text-richblack-25 ">All Secret Post 🤔 </h1>
        </div>

        <AllSecretPost/>

      </div>
     <Footer />
   </>
  )
}

export default Home

