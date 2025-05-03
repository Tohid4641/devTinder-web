import io from "socket.io-client"
import { BASE_URL } from "./constants";
import Cookies from "js-cookie";


export const createSocketConnection = () => {
    const token = Cookies.get("token");
    if (location.hostname === 'localhost') {
        return io(BASE_URL, { auth: { token } });
    } else {
        return io('http://13.60.199.215/api', { auth: { token }, path: '/api/socket.io' });
    }

}