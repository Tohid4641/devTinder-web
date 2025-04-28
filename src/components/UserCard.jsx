import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user, route }) => {
  
  const { _id, firstName, lastName, age, gender, photoUrl, about, skills, isPremium } =
    user;
  const [toast, setToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const dispatch = useDispatch();

  const sendRequest = async (status, userId) => {
    try {
      await axios.post(
        `${BASE_URL}/api/request/send/${status}/${userId}`,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUserFromFeed(userId));

      if (status == "interested") {
        setToastText("Connection request is sent!");
      } else {
        setToastText("Ignored User!");
      }
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  }; 

  return (
    <div className="card bg-base-300 w-72 h-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt="Profile photo" />
      </figure>
      <div className="card-body">
        {user?.isPremium && (
          <input type="checkbox" defaultChecked checked readOnly className="checkbox checkbox-primary" />
        )}
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about && `${about}`}</p>
        {route === "feed" && (
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => sendRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => sendRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        )}
      </div>
      {toast && (
        <div className="toast  toast-top z-10">
          <div className="alert alert-success">
            <span>{toastText}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
