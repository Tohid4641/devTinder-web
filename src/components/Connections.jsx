import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { BASE_URL } from "../utils/constants";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections) || [];

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/api/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (connections.length === 0) {
      fetchConnections();
    }
  }, []);

  return (
    <div className="text-center flex flex-col justify-center">
      <div className="text-xl  font-bold my-4">
        <h1>Connections</h1>
      </div>
      <div className="mx-auto overflow-x-auto w-full sm:w-1/2 bg-base-300">
        <table className="table">
          <tbody>
            {/* row 1 */}
            {connections?.length == 0 ? (
              <tr>
                <td className="m-5">No connections found</td>
              </tr>
            ) : (
              connections.map((connection) => (
                <tr key={connection._id} className="hover:bg-base-200">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar ">
                        <div className="mask mask-squircle h-12 w-12 rounded-full">
                          <img
                            src={connection.photoUrl}
                            alt="connection photo"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{`${connection.firstName} ${connection.lastName}`}</div>
                        <div className="text-sm opacity-50">
                          {connection.about && connection.about}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Connections;
