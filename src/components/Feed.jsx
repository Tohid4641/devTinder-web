import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {

  const feed = useSelector(store => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      if (feed) return 
      const res = await axios.get(BASE_URL + '/api/user/feed', {
        withCredentials: true
      });
      
      dispatch(addFeed(res?.data?.data));
    } catch (error) {
      // Error Tasks
    }
  }

  useEffect(() => {
    getFeed()
  }, [])

  return (

    feed && (
      <div className="flex justify-center my-10">
        <UserCard user={feed[0]}/>
      </div>
    )
  )
}

export default Feed