import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { postEndpoints } from "../apis";


export function createPostAPI( title, content, email)
  {
    return  async (navigate) => {
      const toastId = toast.loading("Loading...");
      try {

        const response = await apiConnector("POST", postEndpoints.POST_CREATE_SECRET_POST_API, {title, content, email })

        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success(response.data.message)
        // navigate("/");
      } catch (error) {
        console.log("Creat Post API ERROR............", error)
        console.log(title,content,email);
        toast.error("Post Creation Failed")
        // navigate("/")
      }
      toast.dismiss(toastId)
    }
  }

// update a post
export const updatePostApi = async (data,id) => {

  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("PATCH", `${postEndpoints.UPDATE_SINGLE_SECRET_POST_API_ID}/${id}`, data);
    console.log("UPDATE POST API RESPONSE............", response)

    if (!response?.data?.success) {
      throw new Error("Could Not Update POST")
    }
    toast.success("Post Updated")
     // navigate("/");
  } catch (error) {
    console.log("UPDATE POST API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}

// delete a post
export const deletePost = async (id) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("DELETE", `${postEndpoints.DELETE_SINGLE_SECRET_POST_API_ID}/${id}`);
      console.log("DELETE POST API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Delete POST")
      }
      toast.success("Post Deleted")
    } catch (error) {
      console.log("DELETE POST API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
  }  