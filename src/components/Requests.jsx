import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequests, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests) || [];
  const dispatch = useDispatch();
  const [toast, setToast] = useState(false);
  const [toastText, setToastText] = useState("");

  const reviewRequest = async (status, requestId) => {
    try {
      await axios.post(
        `${BASE_URL}/api/request/review/${status}/${requestId}`,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeRequest(requestId));

      if (status == "accepted") {
        setToastText("Request Accepted !");
      } else {
        setToastText("Request Rejected !");
      }
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
     } catch (err) {
      console.log(err);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/api/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (requests.length === 0) {
      fetchRequests();
    }
  }, []);

  return (
    <div className="text-center flex flex-col justify-center">
      {toast && (
        <div className="toast toast-top toast-center z-10">
          <div className="alert alert-success">
            <span>{toastText}</span>
          </div>
        </div>
      )}
      <div className="text-xl  font-bold my-4">
        <h1>Connections Requests</h1>
      </div>
      <div className="mx-auto overflow-x-auto w-full sm:w-1/2 bg-base-300">
        <table className="table">
          <tbody>
            {/* row 1 */}
            {requests?.length == 0 ? (
              <tr>
                <td className="m-5">No requests found</td>
              </tr>
            ) : (
              requests.map((connection) => {
                const { _id, firstName, lastName, about, photoUrl } =
                  connection.fromUserId;
                return (
                  <tr key={_id} className="hover:bg-base-200">
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar ">
                          <div className="mask mask-squircle h-12 w-12 rounded-full">
                            <img src={photoUrl} alt="connection photo" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{`${firstName} ${lastName}`}</div>
                          <div className="text-sm opacity-50">
                            {about && about}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() =>
                          reviewRequest("rejected", connection._id)
                        }
                      >
                        Reject
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() =>
                          reviewRequest("accepted", connection._id)
                        }
                      >
                        Accept
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Requests;
