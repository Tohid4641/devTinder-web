import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addUser } from "../utils/userSlice"

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const fetchUser = async () => {
    try {
      if (user) return

      const res = await axios.get(BASE_URL + '/api/profile/view', {
        withCredentials: true
      });
      dispatch(addUser(res.data.data));

    } catch (error) {
      if (error.status === 401) {
        return navigate("/login");
      }
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body