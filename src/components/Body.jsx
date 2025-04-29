import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { addUser } from "../utils/userSlice"

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showToast, setShowToast] = useState(false); 

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

    const handleOnline = () => {
      setIsOnline(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [])

  return (
    <div>

      {showToast && (
        isOnline ? (
          <div className="toast toast-top toast-center z-10">
            <div className="alert alert-success">
              <span>You are online</span>
            </div>
          </div>
        ) : (
          <div className="toast toast-top toast-center z-10">
            <div className="alert alert-error">
              <span>No internet!</span>
            </div>
          </div>
        )
      )}

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body