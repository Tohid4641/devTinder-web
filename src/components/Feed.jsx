import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      if (feed) return;
      const res = await axios.get(BASE_URL + "/api/user/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res?.data?.data));
    } catch (error) {
      // Error Tasks
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if(!feed) return 

  if(feed.length === 0) return <h1 className="flex justify-center mt-10">No new users found!</h1>

  return (
    feed && (
      <div className="flex justify-center my-10">
        <UserCard user={feed[Math.floor(Math.random() * feed.length)]} route='feed'/>
      </div>
    )
  );
};

export default Feed;
